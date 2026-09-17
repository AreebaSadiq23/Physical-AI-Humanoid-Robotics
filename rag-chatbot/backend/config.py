import os
from pydantic import BaseModel, Field
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseModel):
    QDRANT_URL: str = Field(default=os.getenv("QDRANT_URL"))
    QDRANT_API_KEY: str = Field(default=os.getenv("QDRANT_API_KEY"))
    OPENROUTER_API_KEY: str = Field(default=os.getenv("OPENROUTER_API_KEY"))
    OPENROUTER_MODEL: str = Field(default=os.getenv("OPENROUTER_MODEL", "mistralai/ministral-8b-2512"))
    PORT: int = Field(default=int(os.getenv("PORT", 10000)))

settings = Settings()
