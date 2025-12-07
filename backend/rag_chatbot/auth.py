import os
from datetime import datetime, timedelta
from typing import Optional

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel

# Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key") # Use environment variable in production
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2PasswordBearer for token extraction
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class UserInDB(BaseModel):
    email: str
    hashed_password: str
    phone_number: Optional[str] = None
    google_id: Optional[str] = None

class UserCreate(BaseModel):
    email: str
    password: str
    phone_number: Optional[str] = None

class UserLogin(BaseModel):
    email: str
    password: str

# Mock Database
# In a real application, this would be a proper database (SQL, NoSQL, etc.)
mock_users_db = {}

# Utility Functions
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def decode_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials",
                headers={"WWW-Authenticate": "Bearer"},
            )
        token_data = TokenData(email=email)
        return token_data
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

async def get_current_user(token: str = Depends(oauth2_scheme)):
    token_data = decode_token(token)
    user = mock_users_db.get(token_data.email)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user

# Google OAuth Placeholder (requires actual client ID/secret and a proper flow)
async def google_login_placeholder(email: str):
    # This is a very basic placeholder for Google login.
    # In a real app, this would involve client-side redirect to Google OAuth,
    # Google redirecting back to a callback endpoint, and then verifying
    # the token received from Google.
    if email not in mock_users_db:
        # Auto-register if user doesn't exist
        hashed_password = get_password_hash(os.urandom(16).hex()) # Generate a random password
        mock_users_db[email] = UserInDB(email=email, hashed_password=hashed_password, google_id="mock_google_id")
    user = mock_users_db.get(email)
    return user

# Password Reset Placeholder
async def send_password_reset_email(email: str):
    # In a real application, this would generate a unique token,
    # save it to the database with an expiry, and email a link to the user.
    if email not in mock_users_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User with that email not found",
        )
    print(f"DEBUG: Password reset link sent to {email} (placeholder)")
    return {"message": "Password reset link sent (check console for debug info)"}

async def reset_user_password(email: str, new_password: str):
    # In a real application, this would verify the reset token,
    # then update the user's password.
    if email not in mock_users_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User with that email not found",
        )
    mock_users_db[email].hashed_password = get_password_hash(new_password)
    print(f"DEBUG: Password for {email} reset successfully (placeholder)")
    return {"message": "Password reset successfully"}
