from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import create_engine
from os import getenv
from dotenv import load_dotenv

load_dotenv()

secret= getenv("postgres_secret")
engine=create_engine(f"postgresql://postgres:{secret}@localhost/notes_db", echo=True)

Base=declarative_base()

SessionLocal=sessionmaker(bind=engine,autocommit=False, autoflush=False)
