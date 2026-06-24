# Flask Student Records API

This is a simple Flask REST API for managing student records with create, read, update, and delete (CRUD) operations.

## Setup

1. Install the required packages:

```
pip install -r requirements.txt
```

2. Run the application:

```
python app.py
```

## API Endpoints

- `POST /students`: Create a new student record.
- `GET /students/<student_id>`: Retrieve a student record by ID.
- `PUT /students/<student_id>`: Update a student record by ID.
- `DELETE /students/<student_id>`: Delete a student record by ID.

## Error Handling

- Returns `404` if a student is not found.
- Returns `400` for invalid or duplicate student IDs.