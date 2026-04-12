# 1. Base Image
FROM python:3.11-slim

# 2. Working Directory
WORKDIR /app

# 3. Copy only requirements first (better caching)
COPY rag-chatbot/backend/requirements.txt .

# 4. Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy ONLY backend files (ignore node_modules, venv, frontend, etc.)
# Hum specific folders copy karenge taake size chhota rahe
COPY rag-chatbot/backend/main.py .
COPY rag-chatbot/backend/ingest.py .

# 6. Run the server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "10000"]
