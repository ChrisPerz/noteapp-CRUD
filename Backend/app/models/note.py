from sqlalchemy import Column, String, Integer, Text
from ..database import Base
from pydantic import BaseModel

class NoteDB(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    message = Column(Text)
    category = Column(String)

class NoteDBpyd(BaseModel):
    title: str
    message: str
    category : str

