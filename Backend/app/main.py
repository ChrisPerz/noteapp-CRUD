from fastapi import FastAPI, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.controllers.note_controller import router as note_router

from app.database import  Base, engine, SessionLocal



Base.metadata.create_all(bind=engine)


app=FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_credentials=True,
    allow_headers=["*"],
)



app.include_router(note_router, prefix="/notes", tags=["notes"])


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
    