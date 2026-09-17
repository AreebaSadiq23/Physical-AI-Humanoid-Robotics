# Hugging Face Spaces ke liye optimized Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Dependencies copy aur install karein
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Backend code copy karein
COPY main.py .

# Hugging Face Spaces default port 7860 use karta hai
EXPOSE 7860
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
