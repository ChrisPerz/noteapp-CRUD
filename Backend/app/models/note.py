from sqlalchemy import Column, String, Integer, Text, Boolean
from ..database import Base
from pydantic import BaseModel
from typing import Optional

class NoteDB(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    message = Column(Text)
    category = Column(String)
    is_archived = Column(Boolean, default=False)

class NoteDBpyd(BaseModel):
    title: str
    message: str
    category : str

class NoteUpdate(BaseModel):
    title: str
    message: str
    category : str
    id: int

class NoteArchived(BaseModel):
    title: str
    message: str
    category : str
    id: int
    is_archived:bool