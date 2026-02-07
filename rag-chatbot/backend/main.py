import os
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_qdrant import Qdrant
from langchain.prompts import ChatPromptTemplate
from langchain.schema.runnable import RunnablePassthrough
from langchain.schema.output_parser import StrOutputParser
from qdrant_client import QdrantClient
from dotenv import load_dotenv

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

COLLECTION_NAME = "humanoid_robotics_book"
EMBEDDING_MODEL_NAME = "all-MiniLM-L6-v2"
GEMINI_MODEL = "gemini-1.5-flash"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

rag_chain = None
selected_text_chain = None
error_message_init = ""

if not all([QDRANT_URL, QDRANT_API_KEY]):
    error_message_init = "ERROR: Missing Qdrant configuration."
elif not GEMINI_API_KEY:
    error_message_init = "ERROR: GEMINI_API_KEY missing."
else:
    try:
        embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL_NAME)

        qdrant_client = QdrantClient(
            url=QDRANT_URL,
            api_key=QDRANT_API_KEY
        )

        vector_store = Qdrant(
            client=qdrant_client,
            collection_name=COLLECTION_NAME,
            embeddings=embeddings,
        )

        retriever = vector_store.as_retriever(search_kwargs={"k": 4})

        llm = ChatGoogleGenerativeAI(
            model=GEMINI_MODEL,
            google_api_key=GEMINI_API_KEY,
            temperature=0.1,
        )

        prompt = ChatPromptTemplate.from_template("""
        You are an expert assistant for the 'Physical AI & Humanoid Robotics' textbook.
        Answer ONLY from the given context.
        If the answer is not present, say you don't have enough information.

        Context:
        {context}

        Question:
        {question}

        Answer:
        """)

        rag_chain = (
            {"context": retriever, "question": RunnablePassthrough()}
            | prompt
            | llm
            | StrOutputParser()
        )

        selected_text_chain = (
            prompt
            | llm
            | StrOutputParser()
        )

    except Exception as e:
        error_message_init = str(e)

class ChatRequest(BaseModel):
    query: str
    selected_text: str | None = None

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):

    if error_message_init:
        async def err():
            yield error_message_init
        return StreamingResponse(err(), media_type="text/plain")

    if request.selected_text:
        input_data = {
            "context": request.selected_text,
            "question": request.query
        }
        return StreamingResponse(
            selected_text_chain.astream(input_data),
            media_type="text/plain"
        )

    return StreamingResponse(
        rag_chain.astream(request.query),
        media_type="text/plain"
    )
