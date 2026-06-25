# Student Management API

This is a Flask-based REST API for managing students.

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Initialize the database:
   ```bash
   flask shell
   >>> from models import db
   >>> db.create_all()
   >>> exit()
   ```

3. Run the application:
   ```bash
   python app.py
   ```

## API Endpoints

- `GET /students`: Retrieve a list of all students.
- `POST /students`: Add a new student.
- `PUT /students/<id>`: Update an existing student.
- `DELETE /students/<id>`: Delete a student.
