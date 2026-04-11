"""
Minimal FastAPI server for Render deployment.
Starts instantly - heavy imports happen inside endpoint functions.
"""
import os
import sys
from fastapi import FastAPI, Request
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Create app immediately - no heavy imports here!
app = FastAPI(title="RAG Chatbot Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    query: str
    selected_text: str | None = None

@app.get("/")
async def root():
    return {"status": "RAG Chatbot Backend is LIVE! 🚀"}

@app.get("/health")
async def health():
    return {
        "status": "ok",
        "python": sys.version,
        "port": os.environ.get("PORT", "not set")
    }

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    # Lazy imports - only loaded when endpoint is called
    from sentence_transformers import SentenceTransformer
    from qdrant_client import QdrantClient
    from openai import OpenAI
    from dotenv import load_dotenv
    
    load_dotenv()
    
    QDRANT_URL = os.getenv("QDRANT_URL")
    QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
    OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
    OPENROUTER_MODEL = os.getenv("OPENROUTER_MODEL", "mistralai/ministral-8b-2512")
    COLLECTION_NAME = "humanoid_robotics_book"
    
    try:
        # Initialize (cached after first call)
        embeddings = SentenceTransformer('all-MiniLM-L6-v2')
        qdrant = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY, timeout=120)
        openai_client = OpenAI(base_url="https://openrouter.ai/api/v1", api_key=OPENROUTER_API_KEY)
        
        # Retrieve chunks
        query_embedding = embeddings.encode(request.query).tolist()
        results = qdrant.query_points(
            collection_name=COLLECTION_NAME,
            query=query_embedding,
            limit=4
        )
        context = "\n\n".join([p.payload.get("text", "") for p in results.points])
        
        # Generate answer
        prompt = f"""You are an expert assistant for the 'Physical AI & Humanoid Robotics' textbook.
Answer ONLY from the given context. If the answer is not present, say you don't have enough information.

Context:
{context}

Question:
{request.query}

Answer:"""
        
        response = openai_client.chat.completions.create(
            model=OPENROUTER_MODEL,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=1000
        )
        
        return PlainTextResponse(content=response.choices[0].message.content)
    except Exception as e:
        return PlainTextResponse(content=f"Error: {str(e)}", status_code=500)

@app.get("/api/health")
async def api_health():
    return {
        "qdrant_configured": bool(os.getenv("QDRANT_URL")),
        "openrouter_configured": bool(os.getenv("OPENROUTER_API_KEY")),
        "model": os.getenv("OPENROUTER_MODEL", "not set")
    }

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    import uvicorn
    print(f"🚀 Starting server on 0.0.0.0:{port}...")
    uvicorn.run(app, host="0.0.0.0", port=port)
