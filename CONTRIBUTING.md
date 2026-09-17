# Contributing to Physical AI & Humanoid Robotics

Thank you for your interest in contributing! We welcome contributions to improve our technical textbook and AI-integrated systems.

## Project Overview

This project is a technical textbook built with [Docusaurus](https://docusaurus.io/), featuring a Retrieval-Augmented Generation (RAG) chatbot backend.

## Prerequisites

- Node.js (v20+)
- Python (v3.10+)

## Local Development Setup

### Frontend
1. Install dependencies: `npm install`
2. Start server: `npm run start`

### Backend
1. Navigate to `rag-chatbot/backend/`
2. Create and activate a virtual environment.
3. Install dependencies: `pip install -r requirements.txt`
4. Run: `python main.py`

## Development Commands

- **Type Checking:** `npm run typecheck`
- **Linting:** 
  - Frontend: `npm run lint`
  - Backend: `ruff check .` (in backend directory)
- **Formatting:** `npm run format`
- **Testing:** `npm run test` (Frontend)

## Contribution Guidelines

### Branch Naming Conventions
Please use descriptive branch names based on the type of change:
- `feature/<name>`
- `fix/<name>`
- `test/<name>`
- `docs/<name>`
- `chore/<name>`

### Commit Messages
Follow conventional commit patterns:
- `feat: <description>`
- `fix: <description>`
- `docs: <description>`
- `test: <description>`
- `chore: <description>`

### Pull Request Workflow
1. Fork the repository.
2. Create your branch.
3. Ensure all tests and linting checks pass.
4. Submit a Pull Request targeting the `main` branch.
5. Keep PRs focused on a single, independent improvement.

## Reporting Issues
Please open an issue with a detailed description of the problem or feature request.
