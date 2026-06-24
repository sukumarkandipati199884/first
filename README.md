# Flask Student Records API

This is a simple Flask REST API for managing student records. It supports creating, reading, updating, and deleting student records.

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the application:
   ```
   python app.py
   ```

## Endpoints

- `POST /students`: Create a new student record.
- `GET /students/<student_id>`: Retrieve a student record by ID.
- `PUT /students/<student_id>`: Update a student record by ID.
- `DELETE /students/<student_id>`: Delete a student record by ID.