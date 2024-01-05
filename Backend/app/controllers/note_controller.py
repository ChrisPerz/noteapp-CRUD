from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.note import NoteDB, NoteDBpyd
from . import crud

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/createnote", response_model=NoteDBpyd)
def create_note(title: str, message: str, category: str = "", db: Session = Depends(get_db)):
    return crud.create_note(db, title=title, message=message, category=category)

@router.get("/getnote/{note_id}", response_model=NoteDBpyd)
def read_note(note_id: int, db: Session = Depends(get_db)):
    return crud.get_note(db, note_id)

@router.get("/getnotes", response_model=list[NoteDBpyd])
def read_notes(category: str = "", db: Session = Depends(get_db)):
    return crud.get_notes_by_category(db, category)

@router.put("/updatenote/{note_id}", response_model=NoteDBpyd)
def update_note(note_id: int, title: str, message: str, category: str = "", db: Session = Depends(get_db)):
    return crud.update_note(db, note_id, title=title, message=message, category=category)

@router.delete("/deletenote/{note_id}", response_model=NoteDBpyd)
def delete_note(note_id: int, db: Session = Depends(get_db)):
    return crud.delete_note(db, note_id)