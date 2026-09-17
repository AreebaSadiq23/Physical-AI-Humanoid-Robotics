import sys
from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from qdrant_client import QdrantClient
from openai import OpenAI
from config import settings

# Create app
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

# Initialize components
EMBEDDING_MODEL_NAME = 'all-MiniLM-L6-v2'
COLLECTION_NAME = "humanoid_robotics_book"

embeddings = SentenceTransformer(EMBEDDING_MODEL_NAME)
qdrant = QdrantClient(
    url=settings.QDRANT_URL, 
    api_key=settings.QDRANT_API_KEY, 
    timeout=120
)
openai_client = OpenAI(
    base_url="https://openrouter.ai/api/v1", 
    api_key=settings.OPENROUTER_API_KEY
)

@app.get("/")
async def root():
    return {"status": "RAG Chatbot Backend is LIVE! 🚀"}

@app.get("/health")
async def health():
    return {
        "status": "ok",
        "python": sys.version,
        "port": settings.PORT
    }

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
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
            model=settings.OPENROUTER_MODEL,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=1000
        )
        
        return PlainTextResponse(content=response.choices[0].message.content)
    except Exception as e:
        return PlainTextResponse(content=f"Error: {str(e)}", status_code=500)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=settings.PORT)
