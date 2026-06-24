from flask import Blueprint, request, jsonify
import sqlite3

student_routes = Blueprint('student_routes', __name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@student_routes.route('/students', methods=['GET'])
def get_students():
    conn = get_db_connection()
    students = conn.execute('SELECT * FROM students').fetchall()
    conn.close()
    return jsonify([dict(ix) for ix in students])

@student_routes.route('/students', methods=['POST'])
def create_student():
    data = request.get_json()
    name = data.get('name')
    age = data.get('age')
    if not name or not age:
        return jsonify({'error': 'Invalid input'}), 400
    conn = get_db_connection()
    conn.execute('INSERT INTO students (name, age) VALUES (?, ?)', (name, age))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Student created'}), 201

@student_routes.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()
    name = data.get('name')
    age = data.get('age')
    if not name or not age:
        return jsonify({'error': 'Invalid input'}), 400
    conn = get_db_connection()
    conn.execute('UPDATE students SET name = ?, age = ? WHERE id = ?', (name, age, id))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Student updated'})

@student_routes.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    conn = get_db_connection()
    conn.execute('DELETE FROM students WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return jsonify({'message': 'Student deleted'})