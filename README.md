# Flask Student Records API

This is a simple Flask REST API for managing student records. It supports create, read, update, and delete operations.

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the application:
   ```
   python app.py
   ```

## API Endpoints

- `POST /students/`: Create a new student record.
- `GET /students/<id>`: Retrieve a student record by ID.
- `PUT /students/<id>`: Update a student record by ID.
- `DELETE /students/<id>`: Delete a student record by ID.

## Error Handling

The API returns appropriate HTTP status codes and error messages for invalid requests.