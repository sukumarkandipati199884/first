# Flask Student Records API

This is a simple Flask REST API for managing student records.

## Endpoints

- `POST /students`: Create a new student record.
- `GET /students/<student_id>`: Retrieve a student record.
- `PUT /students/<student_id>`: Update a student record.
- `DELETE /students/<student_id>`: Delete a student record.

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the application:
   ```
   python app.py
   ```

3. The API will be available at `http://localhost:5000`.