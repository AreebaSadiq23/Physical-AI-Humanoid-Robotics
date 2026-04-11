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

    # Initialize Qdrant client with longer timeout
    client = QdrantClient(
        url=QDRANT_URL,
        api_key=QDRANT_API_KEY,
        timeout=120  # Increased timeout for cloud uploads
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
    print(f"Ingesting {len(chunks)} chunks into Qdrant collection '{COLLECTION_NAME}'...")

    # Create collection with proper vector size
    from sentence_transformers import SentenceTransformer
    model = SentenceTransformer(EMBEDDING_MODEL_NAME)
    vector_size = model.get_sentence_embedding_dimension()
    
    # Delete collection if it already exists
    if client.collection_exists(collection_name=COLLECTION_NAME):
        print(f"Collection '{COLLECTION_NAME}' exists, deleting for fresh ingestion...")
        client.delete_collection(collection_name=COLLECTION_NAME)
        print(f"Collection '{COLLECTION_NAME}' deleted.")
    
    # Create collection
    client.create_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=models.VectorParams(
            size=vector_size,
            distance=models.Distance.COSINE
        )
    )
    
    # Generate embeddings and upload in batches
    batch_size = 16  # Even smaller batch size for stable uploads
    max_retries = 3  # Retry failed batches
    print(f"Processing {len(chunks)} chunks in batches of {batch_size}...")
    
    for i in range(0, len(chunks), batch_size):
        batch = chunks[i:i + batch_size]
        texts = [chunk.page_content for chunk in batch]
        metadatas = [chunk.metadata for chunk in batch]
        
        # Generate embeddings
        embeddings_list = embeddings.embed_documents(texts)
        
        # Prepare points for upload
        from qdrant_client.models import PointStruct
        points = [
            PointStruct(
                id=i + j,
                vector=embedding,
                payload={"text": text, **metadata}
            )
            for j, (embedding, text, metadata) in enumerate(zip(embeddings_list, texts, metadatas))
        ]
        
        # Upload batch with retry logic
        for attempt in range(max_retries):
            try:
                client.upsert(
                    collection_name=COLLECTION_NAME,
                    points=points
                )
                print(f"Processed batch {i // batch_size + 1}/{(len(chunks) + batch_size - 1) // batch_size}")
                break  # Success, move to next batch
            except Exception as e:
                if attempt < max_retries - 1:
                    print(f"  Retry {attempt + 1}/{max_retries} for batch {i // batch_size + 1}: {str(e)}")
                    import time
                    time.sleep(2)  # Wait before retry
                else:
                    print(f"  FAILED batch {i // batch_size + 1} after {max_retries} attempts: {str(e)}")
                    raise  # Re-raise if all retries failed

    print("================================================================")
    print("✅ Ingestion complete!")
    print(f"Collection '{COLLECTION_NAME}' in Qdrant is now populated.")
    print("================================================================")


if __name__ == "__main__":
    main()
