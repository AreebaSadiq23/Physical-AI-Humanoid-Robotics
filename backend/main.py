import os
import glob
from fastapi import FastAPI, Request, Depends, HTTPException, status, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import UnstructuredMarkdownLoader
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from pydantic import BaseModel, EmailStr
import logging
from typing import Optional

# Import authentication components
from backend.rag_chatbot.auth import (
    UserCreate, UserLogin, UserInDB, Token,
    get_password_hash, verify_password, create_access_token,
    decode_token, get_current_user,
    mock_users_db, ACCESS_TOKEN_EXPIRE_MINUTES,
    send_password_reset_email, reset_user_password,
    google_login_placeholder
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# RAG Chatbot models and functions
class ChatRequest(BaseModel):
    question: str

vector_store = None
DOCS_PATH = "../docs"
INDEX_PATH = "faiss_index"

def get_all_markdown_files():
    """Get all markdown files from the docs directory."""
    files = []
    for ext in ("*.md", "*.mdx"):
        files.extend(glob.glob(os.path.join(DOCS_PATH, "**", ext), recursive=True))
    logger.info(f"Found {len(files)} markdown files.")
    return files

def create_vector_store():
    """Create the vector store from markdown files."""
    logger.info("Creating new vector store...")
    markdown_files = get_all_markdown_files()
    if not markdown_files:
        logger.error("No markdown files found to create the vector store.")
        return None

    documents = []
    for file_path in markdown_files:
        try:
            loader = UnstructuredMarkdownLoader(file_path)
            documents.extend(loader.load())
        except Exception as e:
            logger.error(f"Error loading file {file_path}: {e}")
            continue

    if not documents:
        logger.error("No documents could be loaded from markdown files.")
        return None

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    chunked_docs = text_splitter.split_documents(documents)

    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    
    db = FAISS.from_documents(chunked_docs, embeddings)
    db.save_local(INDEX_PATH)
    logger.info("Vector store created and saved successfully.")
    return db

@app.on_event("startup")
def startup_event():
    """Load or create the vector store on startup."""
    global vector_store
    if os.path.exists(INDEX_PATH):
        logger.info("Loading existing vector store...")
        try:
            embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
            vector_store = FAISS.load_local(INDEX_PATH, embeddings, allow_dangerous_deserialization=True)
            logger.info("Vector store loaded successfully.")
        except Exception as e:
            logger.error(f"Error loading vector store: {e}")
            logger.info("Attempting to recreate vector store.")
            vector_store = create_vector_store()
    else:
        vector_store = create_vector_store()

@app.post("/chat")
async def chat(chat_request: ChatRequest, current_user: UserInDB = Depends(get_current_user)):
    """Handle chat requests. Requires authentication."""
    if vector_store is None:
        return {"answer": "Vector store is not available."}

    question = chat_request.question
    logger.info(f"Received question from {current_user.email}: {question}")
    
    try:
        docs = vector_store.similarity_search(question, k=3)
        
        if not docs:
            logger.info("No relevant documents found.")
            return {"answer": "Answer not found in textbook"}

        answer = "\n\n".join([doc.page_content for doc in docs])
        logger.info(f"Found answer: {answer}")
        return {"answer": answer}
    except Exception as e:
        logger.error(f"Error during similarity search: {e}")
        return {"answer": "An error occurred while processing your request."}

@app.get("/")
def read_root():
    return {"message": "RAG Chatbot and Auth Server is running"}

# Authentication Router
auth_router = APIRouter(prefix="/auth", tags=["Authentication"])

@auth_router.post("/signup", response_model=Token)
async def signup(user_data: UserCreate):
    if user_data.email in mock_users_db:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    hashed_password = get_password_hash(user_data.password)
    mock_users_db[user_data.email] = UserInDB(
        email=user_data.email,
        hashed_password=hashed_password,
        phone_number=user_data.phone_number
    )
    
    access_token = create_access_token(data={"sub": user_data.email})
    return {"access_token": access_token, "token_type": "bearer"}

@auth_router.post("/signin", response_model=Token)
async def signin(user_data: UserLogin):
    user = mock_users_db.get(user_data.email)
    if not user or not verify_password(user_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@auth_router.post("/google-login", response_model=Token)
async def google_login(email: EmailStr):
    # This endpoint assumes the frontend has already authenticated with Google
    # and provides a verified email. In a real app, this would involve
    # exchanging an ID token or access token from Google.
    user = await google_login_placeholder(email)
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

class ForgotPasswordRequest(BaseModel):
    email: EmailStr

@auth_router.post("/forgot-password")
async def forgot_password(req: ForgotPasswordRequest):
    await send_password_reset_email(req.email)
    return {"message": "If a user with that email exists, a password reset link has been sent."}

class ResetPasswordRequest(BaseModel):
    email: EmailStr
    new_password: str

@auth_router.post("/reset-password")
async def reset_password(req: ResetPasswordRequest):
    await reset_user_password(req.email, req.new_password)
    return {"message": "Password has been reset successfully."}

# Include the auth router in the main app
app.include_router(auth_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)