from sqlalchemy.orm import Session
from app.models.note import NoteDB

def create_note(db: Session, title: str, message: str, category: str = ""):
    db_note = NoteDB(title=title, message=message, category=category)
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

def get_note(db: Session, note_id: int):
    print(note_id)
    return db.query(NoteDB).filter(NoteDB.id == note_id).first()

def get_notes_by_category(db: Session, category: str = ""):
    if category:
        return db.query(NoteDB).filter(NoteDB.category == category).all()
    else:
        return db.query(NoteDB).all()

def update_note(db: Session, noteId: int, title: str, message: str,is_archived: bool= False, category: str = ""):
    db_note = db.query(NoteDB).filter(NoteDB.id == noteId).first()
    if db_note:
        db_note.title = title
        db_note.message = message
        db_note.category = category
        db_note.is_archived = is_archived
        db.commit()
        db.refresh(db_note)
    return db_note

def delete_note(db: Session, note_id: int):
    db_note = db.query(NoteDB).filter(NoteDB.id == note_id).first()
    if db_note:
        db.delete(db_note)
        db.commit()
    return db_note


def get_active_notes(db: Session) -> list[NoteDB]:
    return db.query(NoteDB).filter(NoteDB.is_archived == False).all()

def get_archived_notes(db: Session) -> list[NoteDB]:
    return db.query(NoteDB).filter(NoteDB.is_archived == True).all()

