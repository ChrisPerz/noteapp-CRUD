# Notas App

Esta es una aplicación simple de notas creada con FastAPI en el backend y React en el frontend. La aplicación permite a los usuarios crear, actualizar, archivar y ver sus notas.

## Características

- **Crear Nota**: Los usuarios pueden crear nuevas notas proporcionando un título, un mensaje y una categoría opcional.
- **Actualizar Nota**: Los usuarios pueden actualizar el título, el mensaje, la categoría y el estado de archivado de sus notas existentes.
- **Listar Notas**: Los usuarios pueden ver todas sus notas, filtrar por notas archivadas y ver solo las notas activas.
- **Archivar/Desarchivar Nota**: Los usuarios pueden cambiar el estado de archivado de sus notas, con la opcion activar.

## Tecnologías Utilizadas

- **Backend**: FastAPI/Python con SQLAlchemy y PostgreSQL.
- **Frontend**: React con Vite.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone [https://github.com/ensolvers-github-challenges/PerezCastillo-87732d.git]

2. Tener instalado PostgreSQL, se puede descargar desde:https://www.postgresql.org/download/
3. Iniciar el programa pgAdmin4, Lo puede buscar en el buscador de windows. Posteriormente crear un usuario postgreSQL, el predeterminado es postgre, se recomienda dejarlo asi y colocar la contraseña que prefiera.
4. Entrar a la carpeta Backend descargada desde el repositorio y modificar las URL de la base de datos para que correspondan con tu base de datos local, para ello cambia los link de estos archivos, donde se muestra subrayado:
  a)alembic.ini - sqlalchemy.url
   ![image](https://github.com/ensolvers-github-challenges/PerezCastillo-87732d/assets/128911355/3e582274-d0c9-4c07-8ca6-720c17b74cbc)
  b) alembic>env.py
    ![image](https://github.com/ensolvers-github-challenges/PerezCastillo-87732d/assets/128911355/b3f0fa1b-c858-44a5-b686-cf22358d7881)
  c) app>database.py
    ![image](https://github.com/ensolvers-github-challenges/PerezCastillo-87732d/assets/128911355/aa90c2e6-869e-4908-bc0d-665877802a35)

5. Crear un entorno virtual con el terminal dentro de la carpeta Backend, dependiendo el sistema operativo cambia el comando:
   source venv/bin/activate  # Linux/Mac
    \venv\Scripts\activate  # Windows 
6. Instalar las dependencias del backend con la terminal y el comando: pip install -r requirements.txt
7. Ejecutar main.py de la carpeta Backend>app>main.py, se puede usar el comando: python -m app.main o python app/main.py
8. Para el front end, dentro de la carpeta frontend con la terminal usar el comando npm install y luego npm run dev
9. Ya puede usar la aplicacion desde el link otorgado en la terminal.

   ## Nota: en el Script run_app.sh se ve los comandos a seguir desde el punto 5 al 9

## Librerias y sus versiones usadas
-Para el backend las librerias se encuentran listadas en el archivo requirements.txt, en la ruta Backend>requirements.txt
-Para el front end las librerias se encuentran listadas en el archivo package.json, en la ruta Frontend>src>package.json
