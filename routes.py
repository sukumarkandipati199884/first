from flask import Blueprint, request, jsonify
from models import db, Student

student_routes = Blueprint('student_routes', __name__)

@student_routes.route('/students', methods=['GET'])
def get_students():
    students = Student.query.all()
    return jsonify([student.to_dict() for student in students]), 200

@student_routes.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    if not data or not 'name' in data:
        return jsonify({'error': 'Bad Request'}), 400
    new_student = Student(name=data['name'])
    db.session.add(new_student)
    db.session.commit()
    return jsonify(new_student.to_dict()), 201

@student_routes.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()
    student = Student.query.get(id)
    if not student:
        return jsonify({'error': 'Student not found'}), 404
    if not data or not 'name' in data:
        return jsonify({'error': 'Bad Request'}), 400
    student.name = data['name']
    db.session.commit()
    return jsonify(student.to_dict()), 200

@student_routes.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get(id)
    if not student:
        return jsonify({'error': 'Student not found'}), 404
    db.session.delete(student)
    db.session.commit()
    return jsonify({'message': 'Student deleted'}), 200