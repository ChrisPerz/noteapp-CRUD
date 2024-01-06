
# Backend part
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# .\venv\Scripts\activate  # Windows 
pip install -r requirements.txt

alembic upgrade head

# Ejecutar el backend
python app/main.py &


# Frontend part
cd ../frontend
npm install

# Ejecutar el frontend
npm run dev
