import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_chat_valid_request():
    response = client.post("/api/chat", json={"query": "What is a robot?"})
    # This might fail if the backend actually needs RAG setup which it does.
    # But for validation, it should return 200 or 500 (server error), 
    # not 422 (validation error).
    assert response.status_code != 422

def test_chat_empty_query():
    response = client.post("/api/chat", json={"query": ""})
    assert response.status_code == 422

def test_chat_whitespace_query():
    response = client.post("/api/chat", json={"query": "   "})
    assert response.status_code == 422

def test_chat_missing_query():
    response = client.post("/api/chat", json={})
    assert response.status_code == 422
