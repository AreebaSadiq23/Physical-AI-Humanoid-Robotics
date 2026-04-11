from fastapi import FastAPI
import os

app = FastAPI()

@app.get("/")
def root():
    return {"status": "Render Server is LIVE! 🚀"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/api/chat")
def chat():
    return "Chatbot backend is connected! RAG pipeline coming soon."

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 10000))
    print(f"🚀 Starting server on port {port}...")
    uvicorn.run(app, host="0.0.0.0", port=port)
