import os
from langchain_community.document_loaders import DirectoryLoader, UnstructuredMarkdownLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_qdrant import Qdrant
from qdrant_client import QdrantClient, models # Import QdrantClient and models
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# --- Configuration ---
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

DOCS_PATH = "../../docs"
COLLECTION_NAME = "humanoid_robotics_book"
EMBEDDING_MODEL_NAME = "all-MiniLM-L6-v2" # Recommended free local embedding model

def main():
    """
    Main function to ingest document data into Qdrant using HuggingFaceEmbeddings.
    1. Loads markdown documents from a directory.
    2. Splits them into smaller chunks.
    3. Generates embeddings for each chunk using a Hugging Face model.
    4. Uploads the chunks and their embeddings to a Qdrant collection.
    """
    if not all([QDRANT_URL, QDRANT_API_KEY]):
        print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        print("!!! ERROR: Missing Qdrant environment variables.            !!!")
        print("!!! Please configure your .env file with:                   !!!")
        print("!!!   - QDRANT_URL                                          !!!")
        print("!!!   - QDRANT_API_KEY                                      !!!")
        print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        return

    # Initialize Qdrant client
    client = QdrantClient(
        url=QDRANT_URL,
        api_key=QDRANT_API_KEY,
    )

    # 1. Load Documents
    print(f"Loading documents from: {DOCS_PATH}")
    loader = DirectoryLoader(
        DOCS_PATH,
        glob="**/*.md",
        loader_cls=UnstructuredMarkdownLoader,
        show_progress=True,
        use_multithreading=True
    )
    documents = loader.load()
    print(f"Loaded {len(documents)} documents.")

    # 2. Split Documents into Chunks
    print("Splitting documents into chunks...")
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    chunks = text_splitter.split_documents(documents)
    print(f"Split documents into {len(chunks)} chunks.")

    # 3. Initialize Embeddings
    print(f"Initializing HuggingFace embeddings with model: {EMBEDDING_MODEL_NAME}...")
    embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL_NAME)

    # 4. Ingest into Qdrant
    print(f"Checking for existing collection '{COLLECTION_NAME}'...")
    # Delete collection if it already exists to ensure a clean re-ingestion
    if client.collection_exists(collection_name=COLLECTION_NAME):
        print(f"Collection '{COLLECTION_NAME}' exists, deleting for fresh ingestion...")
        client.delete_collection(collection_name=COLLECTION_NAME)
        print(f"Collection '{COLLECTION_NAME}' deleted.")

    print(f"Ingesting {len(chunks)} chunks into Qdrant collection '{COLLECTION_NAME}'...")
    
    Qdrant.from_documents(
        chunks,
        embeddings,
        url=QDRANT_URL,
        api_key=QDRANT_API_KEY,
        collection_name=COLLECTION_NAME,
        prefer_grpc=True,
    )

    print("================================================================")
    print("✅ Ingestion complete!")
    print(f"Collection '{COLLECTION_NAME}' in Qdrant is now populated.")
    print("================================================================")


if __name__ == "__main__":
    main()
