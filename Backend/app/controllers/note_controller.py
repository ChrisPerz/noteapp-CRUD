from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.note import NoteDB, NoteDBpyd,NoteUpdate,NoteArchived
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

@router.get("/getnotes", response_model=list[NoteArchived])
def read_notes(category: str = "", db: Session = Depends(get_db)):
    return crud.get_notes_by_category(db, category)

@router.put("/updatenote/{note_id}", response_model=NoteArchived)
def update_note(note_id: int, title: str, message: str,is_archived: bool= False ,category: str = "", db: Session = Depends(get_db)):
    return crud.update_note(db, note_id, title=title, message=message, category=category, is_archived=is_archived)

@router.delete("/deletenote/{note_id}", response_model=NoteDBpyd)
def delete_note(note_id: int, db: Session = Depends(get_db)):
    return crud.delete_note(db, note_id)


@router.get("/activenotes", response_model=list[NoteArchived])
def read_active_notes( db: Session = Depends(get_db)):
    notes = crud.get_active_notes(db=db)
    return notes

@router.get("/archivednotes", response_model=list[NoteArchived])
def read_archived_notes( db: Session = Depends(get_db)):
    notes = crud.get_archived_notes(db=db)
    return notes


