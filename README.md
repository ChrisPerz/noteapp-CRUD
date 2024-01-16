# Notes App
This is a simple note-taking application created with FastAPI on the backend and React on the frontend. The application allows users to create, update, archive, and view their notes.
 Here is a video demo: https://drive.google.com/file/d/1HBqEvlYPFwZoX-p02ysas2pVTL5GMb_Y/view?usp=drive_link
## Features
**Create Note**: Users can create new notes by providing a title, a message, and an optional category.

**Update Note**: Users can update the title, message, category, and archived status of their existing notes.

**List Notes**: Users can view all their notes, filter by archived notes, and see only active notes.

**Archive/Unarchive Note**: Users can change the archived status of their notes, with the option to activate.

## Technologies Used
Backend: FastAPI/Python with SQLAlchemy and PostgreSQL.

Frontend: React with Vite.

## Installation
1. Clone the repository:

git clone [https://github.com/ensolvers-github-challenges/PerezCastillo-87732d.git]

2. Have PostgreSQL installed, it can be downloaded from: https://www.postgresql.org/download/

3. Start the pgAdmin4 program, you can search for it in the Windows search bar. Then create a PostgreSQL user, the default is "postgres," it is recommended to leave it like that and set the password of your choice.

4. Enter the downloaded Backend folder from the repository and modify the database URLs to match your local database. To do this, change the links in these files, where it is underscored:

a) alembic.ini - sqlalchemy.url

![image](https://github.com/ensolvers-github-challenges/PerezCastillo-87732d/assets/128911355/3e582274-d0c9-4c07-8ca6-720c17b74cbc)

b) alembic>env.py


![image](https://github.com/ensolvers-github-challenges/PerezCastillo-87732d/assets/128911355/b3f0fa1b-c858-44a5-b686-cf22358d7881)

c) app>database.py


![image](https://github.com/ensolvers-github-challenges/PerezCastillo-87732d/assets/128911355/aa90c2e6-869e-4908-bc0d-665877802a35)

**Note: In the run_app.sh script, you can see the commands to follow from step 5 to 8**

5. Create a virtual environment with the terminal inside the Backend folder, depending on the operating system, change the command:
source venv/bin/activate # Linux/Mac
\venv\Scripts\activate # Windows
6. Install backend dependencies with the terminal and the command: pip install -r requirements.txt
7. Run main.py from the Backend>app folder. You can use the command: python -m app.main or python app/main.py
8. For the frontend, inside the frontend folder, use the terminal with the command npm install and then npm run dev

You can now use the application from the link provided in the terminal.

## Libraries and their Used Versions
For the backend, the libraries are listed in the requirements.txt file, in the Backend>requirements.txt path.
For the frontend, the libraries are listed in the package.json file, in the Frontend>src>package.json path.
