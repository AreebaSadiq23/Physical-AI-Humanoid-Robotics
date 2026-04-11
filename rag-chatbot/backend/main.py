import os
from fastapi import FastAPI
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from qdrant_client import QdrantClient
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

COLLECTION_NAME = "humanoid_robotics_book"
EMBEDDING_MODEL_NAME = "all-MiniLM-L6-v2"
OPENROUTER_MODEL = os.getenv("OPENROUTER_MODEL", "mistralai/ministral-8b-2512")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Lazy initialization - don't load on startup, load on first request
qdrant_client = None
embeddings = None
openrouter_client = None
is_initialized = False

def initialize_backend():
    """Initialize all services on first request"""
    global qdrant_client, embeddings, openrouter_client, is_initialized
    
    if is_initialized:
        return
    
    print("🔄 Initializing backend services...")
    
    # Initialize Qdrant
    if all([QDRANT_URL, QDRANT_API_KEY]):
        try:
            print("📦 Loading embeddings model (this may take a moment)...")
            embeddings = SentenceTransformer(EMBEDDING_MODEL_NAME)
            print("✅ Embeddings loaded")
            
            qdrant_client = QdrantClient(
                url=QDRANT_URL,
                api_key=QDRANT_API_KEY,
                timeout=120
            )
            print("✅ Qdrant initialized")
        except Exception as e:
            print(f"❌ Qdrant init error: {e}")
    
    # Initialize OpenRouter
    if OPENROUTER_API_KEY:
        try:
            openrouter_client = OpenAI(
                base_url="https://openrouter.ai/api/v1",
                api_key=OPENROUTER_API_KEY,
            )
            print(f"✅ OpenRouter initialized")
        except Exception as e:
            print(f"❌ OpenRouter init error: {e}")
    
    is_initialized = True
    print("🚀 Backend ready!")

def retrieve_chunks(query: str, k: int = 4) -> str:
    """Retrieve relevant document chunks from Qdrant"""
    if not qdrant_client or not embeddings:
        return "No context available"
    
    try:
        query_embedding = embeddings.encode(query).tolist()
        search_results = qdrant_client.query_points(
            collection_name=COLLECTION_NAME,
            query=query_embedding,
            limit=k,
        )
        
        context_texts = []
        for point in search_results.points:
            context_texts.append(point.payload.get("text", ""))
        
        return "\n\n".join(context_texts)
    except Exception as e:
        print(f"Error retrieving chunks: {e}")
        return "Error retrieving context"

def generate_answer(context: str, question: str) -> str:
    """Generate answer using OpenRouter"""
    if not openrouter_client:
        return "OpenRouter API not configured. Please add OPENROUTER_API_KEY to your .env file."
    
    prompt = f"""You are an expert assistant for the 'Physical AI & Humanoid Robotics' textbook.
Answer ONLY from the given context.
If the answer is not present, say you don't have enough information.

Context:
{context}

Question:
{question}

Answer:"""
    
    try:
        response = openrouter_client.chat.completions.create(
            model=OPENROUTER_MODEL,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1,
            max_tokens=1000
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error generating answer: {str(e)}"

class ChatRequest(BaseModel):
    query: str
    selected_text: str | None = None

@app.get("/api/health")
async def health_check():
    return {
        "status": "ok",
        "qdrant_configured": qdrant_client is not None,
        "openrouter_configured": openrouter_client is not None,
        "ready": is_initialized and qdrant_client is not None and openrouter_client is not None
    }

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    # Initialize on first request
    initialize_backend()
    
    try:
        if qdrant_client is None:
            return Response(
                content="Qdrant not configured. Please check your environment variables.",
                media_type="text/plain",
                status_code=500
            )
        
        # Get context from Qdrant or use selected text
        context = request.selected_text if request.selected_text else retrieve_chunks(request.query)
        
        # Generate answer using OpenRouter
        full_response = generate_answer(context, request.query)
        
        return Response(content=full_response, media_type="text/plain")
    except Exception as e:
        error_msg = f"Error processing request: {str(e)}"
        print(f"ERROR in /api/chat: {error_msg}")
        import traceback
        traceback.print_exc()
        return Response(content=error_msg, media_type="text/plain", status_code=500)

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 10000))
    print(f"🚀 Starting server on port {port}...")
    uvicorn.run(app, host="0.0.0.0", port=port)
