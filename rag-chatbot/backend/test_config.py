import os
import pytest
import importlib
import config
from unittest.mock import patch
from pydantic import ValidationError

def test_settings_load_from_env():
    # Patch os.getenv directly for better reliability
    def mock_getenv(key, default=None):
        env_vars = {
            "QDRANT_URL": "http://localhost:6333",
            "QDRANT_API_KEY": "test_qdrant_key",
            "OPENROUTER_API_KEY": "test_openrouter_key",
            "OPENROUTER_MODEL": "test/model",
            "PORT": "9000"
        }
        return env_vars.get(key, default)

    with patch("os.getenv", side_effect=mock_getenv):
        with patch("config.load_dotenv"):
            # Reload to trigger new Settings() instantiation
            importlib.reload(config)
            settings = config.Settings()
            assert settings.QDRANT_URL == "http://localhost:6333"
            assert settings.QDRANT_API_KEY == "test_qdrant_key"
            assert settings.OPENROUTER_API_KEY == "test_openrouter_key"
            assert settings.OPENROUTER_MODEL == "test/model"
            assert settings.PORT == 9000

def test_settings_defaults():
    # Mock os.getenv to return None for everything except PORT
    def mock_getenv(key, default=None):
        if key == "PORT":
            return "10000"
        return default

    with patch("os.getenv", side_effect=mock_getenv):
        with patch("config.load_dotenv"):
            importlib.reload(config)
            settings = config.Settings()
            assert settings.PORT == 10000
            assert settings.QDRANT_URL is None
            assert settings.QDRANT_API_KEY is None

def test_invalid_port():
    def mock_getenv(key, default=None):
        if key == "PORT":
            return "not_a_number"
        return default

    with patch("os.getenv", side_effect=mock_getenv):
        with patch("config.load_dotenv"):
            # int("not_a_number") raises ValueError
            with pytest.raises(ValueError):
                importlib.reload(config)
                config.Settings()
