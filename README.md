# Student Management API

This is a Flask REST API for managing students.

## Setup

1. Install dependencies:

```
pip install -r requirements.txt
```

2. Set up the database:

```python
from app import app
from models import db

db.init_app(app)
with app.app_context():
    db.create_all()
```

3. Run the application:

```
python app.py
```

## API Endpoints

- `GET /students`: Retrieve a list of students.
- `POST /students`: Add a new student.
- `PUT /students/<id>`: Update an existing student.
- `DELETE /students/<id>`: Delete a student.
