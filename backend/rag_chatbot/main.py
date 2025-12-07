from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Placeholder for the actual RAG service
# In a real implementation, this would handle document ingestion, embeddings, vector search, and LLM interaction.
class RAGService:
    def __init__(self):
        # Initialize RAG components here (e.g., load vector store, LLM)
        pass

    def query(self, user_query: str) -> str:
        """
        Simulates querying the RAG system.
        In a real scenario, this would:
        1. Embed the user_query.
        2. Search the vector store for relevant document chunks from the textbook.
        3. Construct a prompt with the user_query and retrieved context.
        4. Send the prompt to an LLM to generate a response.
        5. Ensure the response is grounded ONLY in the retrieved context.
        """
        # --- Placeholder Implementation ---
        if "hello" in user_query.lower():
            return "Hello! I am your AI assistant for the Physical AI & Humanoid Robotics textbook. How can I help you today?"
        elif "ros2" in user_query.lower() or "robot operating system" in user_query.lower():
            return "ROS 2 (Robot Operating System 2) is a flexible framework for writing robot software. It consists of a set of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behaviors across a wide variety of robotic platforms. Module 1 of the textbook covers its fundamentals."
        elif "digital twin" in user_query.lower() or "gazebo" in user_query.lower() or "unity" in user_query.lower():
            return "Digital twins are virtual models designed to accurately reflect a physical object. In robotics, tools like Gazebo and Unity are used to create these digital twins, enabling simulation and testing of robots in a virtual environment before deployment. This is explored in Module 2."
        elif "nvidia isaac" in user_query.lower() or "ai robot brain" in user_query.lower():
            return "NVIDIA Isaac is a powerful platform for AI-driven robot development, providing tools and APIs for perception, navigation, and manipulation. It's key for developing the 'AI brain' of autonomous robots, as discussed in Module 3 of our textbook."
        elif "vla" in user_query.lower() or "vision-language-action" in user_query.lower():
            return "Vision-Language-Action (VLA) models allow robots to understand and act upon high-level commands, bridging the gap between human language, visual perception, and physical action. Module 4 delves into their application in robotics."
        elif "humanoid robotics" in user_query.lower():
            return "Humanoid robotics is a field dedicated to creating robots that mimic the human form and capabilities. The textbook explores various aspects of physical AI and humanoid robotics."
        elif "thank you" in user_query.lower() or "thanks" in user_query.lower():
            return "You're welcome! Feel free to ask if you have more questions about the textbook content."
        else:
            return "I can only answer questions based on the content of the Physical AI & Humanoid Robotics textbook. Please ask a question related to the modules or general topics covered."
        # --- End Placeholder Implementation ---


app = FastAPI()
rag_service = RAGService()

# Configure CORS to allow requests from your Docusaurus frontend
origins = [
    "http://localhost:3000",  # Default Docusaurus development server port
    # Add your production frontend URL here when deployed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatQuery(BaseModel):
    query: str

@app.post("/chat")
async def chat_with_bot(chat_query: ChatQuery):
    response = rag_service.query(chat_query.query)
    return JSONResponse(content={"response": response})

@app.get("/")
async def root():
    return {"message": "RAG Chatbot Backend is running!"}

# To run this FastAPI app:
# 1. Save it as main.py in your backend/rag_chatbot directory.
# 2. Make sure you have uvicorn installed: pip install uvicorn fastapi python-dotenv
# 3. Run from the backend/rag_chatbot directory: uvicorn main:app --reload --port 8000
