# Railway ke liye Dockerfile
# Yeh specifically backend folder ko build karega

FROM python:3.11-slim

WORKDIR /app

# Backend dependencies copy aur install karein
COPY rag-chatbot/backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Saara backend code copy karein
COPY rag-chatbot/backend/ .

# Railway automatically $PORT set karta hai
CMD uvicorn main:app --host 0.0.0.0 --port $PORT
