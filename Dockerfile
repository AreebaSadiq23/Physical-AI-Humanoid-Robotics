FROM python:3.11-slim

WORKDIR /app

# Sirf requirements copy karein taake cache ho
COPY rag-chatbot/backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Baaki backend code copy karein
COPY rag-chatbot/backend/ .

# Railway ko batayein ke server port 10000 par sunega
EXPOSE 10000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "10000"]
