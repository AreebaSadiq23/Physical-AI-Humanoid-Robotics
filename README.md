# Physical AI & Humanoid Robotics Textbook

An AI-native technical textbook dedicated to Physical AI and Humanoid Robotics.

## Project Overview

This project is a technical textbook built with [Docusaurus](https://docusaurus.io/), featuring integrated documentation and a Retrieval-Augmented Generation (RAG) chatbot backend to assist with textbook content.

## Technologies Used

- **Frontend/Docs:** React, Docusaurus 3, TypeScript, Vanilla CSS.
- **Backend:** FastAPI (Python).
- **RAG Chatbot:** OpenAI (via OpenRouter), Qdrant (Vector Database), SentenceTransformers.

## Project Structure

```text
├── docs/             # Textbook documentation (MD/MDX files)
├── src/              # Frontend components, pages, and themes
├── rag-chatbot/      # RAG chatbot FastAPI backend
├── static/           # Static assets (images, icons)
└── docusaurus.config.ts # Docusaurus configuration
```

## Getting Started

### Prerequisites

- Node.js (v20+)
- Python (v3.10+)

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

### Backend Setup

The RAG chatbot backend is located in `rag-chatbot/backend/`.

1. **Navigate to backend directory:**
   ```bash
   cd rag-chatbot/backend
   ```

2. **Setup virtual environment (recommended):**
   ```bash
   python -m venv venv
   # Activate:
   # Windows: venv\Scripts\activate
   # macOS/Linux: source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment Variables:**
   The backend requires the following variables defined (e.g., in a `.env` file):
   - `QDRANT_URL`
   - `QDRANT_API_KEY`
   - `OPENROUTER_API_KEY`
   - `OPENROUTER_MODEL` (Optional, defaults to `mistralai/ministral-8b-2512`)

5. **Run the server:**
   ```bash
   python main.py
   ```

## RAG Chatbot Overview

The chatbot implements a Retrieval-Augmented Generation pattern:
1. **Query:** Receives user query from the frontend.
2. **Retrieve:** Embeds query using `all-MiniLM-L6-v2` and searches relevant text chunks in the Qdrant vector database.
3. **Generate:** Sends context-enriched prompt to the LLM (OpenRouter) to generate a grounded response.
