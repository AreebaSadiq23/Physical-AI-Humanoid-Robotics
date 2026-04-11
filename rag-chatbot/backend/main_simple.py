import os
from fastapi import FastAPI
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from qdrant_client import QdrantClient
from dotenv import load_dotenv

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

COLLECTION_NAME = "humanoid_robotics_book"
EMBEDDING_MODEL_NAME = "all-MiniLM-L6-v2"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Qdrant and embeddings
qdrant_client = None
embeddings = None

if all([QDRANT_URL, QDRANT_API_KEY]):
    try:
        embeddings = SentenceTransformer(EMBEDDING_MODEL_NAME)
        qdrant_client = QdrantClient(
            url=QDRANT_URL,
            api_key=QDRANT_API_KEY,
            timeout=120
        )
        print("✅ Qdrant and embeddings initialized successfully")
    except Exception as e:
        print(f"⚠️ Error initializing Qdrant: {e}")

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

def generate_simple_response(query: str, context: str) -> str:
    """Generate response based on retrieved context (simple extraction)"""
    if not context or context == "No context available" or context == "Error retrieving context":
        return "I don't have enough information in my knowledge base to answer this question. Please try asking about Physical AI, humanoid robotics, or related topics from the textbook."
    
    # Extract most relevant sentences (simple approach)
    sentences = context.split('. ')
    query_words = set(query.lower().split())
    
    # Score sentences by query word overlap
    scored_sentences = []
    for sentence in sentences:
        score = sum(1 for word in query_words if word in sentence.lower())
        scored_sentences.append((score, sentence))
    
    # Sort by score and take top sentences
    scored_sentences.sort(reverse=True, key=lambda x: x[0])
    top_sentences = [s[1] for s in scored_sentences[:3] if s[0] > 0]
    
    if top_sentences:
        return '. '.join(top_sentences) + '.'
    else:
        return f"Based on the textbook content: {sentences[0] if sentences else 'No specific answer found.'}"

class ChatRequest(BaseModel):
    query: str
    selected_text: str | None = None

@app.get("/api/health")
async def health_check():
    return {
        "status": "ok",
        "qdrant_configured": qdrant_client is not None,
        "ready": qdrant_client is not None and embeddings is not None
    }

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        if qdrant_client is None:
            return Response(
                content="Qdrant not configured. Please check your environment variables.",
                media_type="text/plain",
                status_code=500
            )
        
        # Get context from Qdrant or use selected text
        context = request.selected_text if request.selected_text else retrieve_chunks(request.query)
        
        # Generate answer
        full_response = generate_simple_response(request.query, context)
        
        return Response(content=full_response, media_type="text/plain")
    except Exception as e:
        error_msg = f"Error processing request: {str(e)}"
        print(f"ERROR in /api/chat: {error_msg}")
        import traceback
        traceback.print_exc()
        return Response(content=error_msg, media_type="text/plain", status_code=500)
