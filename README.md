# Student Management API

This is a Flask-based REST API for managing students. It provides CRUD operations and uses an SQLite database.

## Setup

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Initialize the database:
   ```bash
   python init_db.py
   ```

4. Run the application:
   ```bash
   python app.py
   ```

The API will be available at `http://localhost:5000`.

## Endpoints

- `GET /students`: Retrieve a list of students.
- `POST /students`: Create a new student.
- `PUT /students/<id>`: Update a student by ID.
- `DELETE /students/<id>`: Delete a student by ID.

## Deployment

This application is ready for deployment on AWS or any other cloud provider. Ensure to set up the environment variables and database configurations as needed.