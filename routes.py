from flask import Blueprint, request, jsonify
from models import db, Student

student_blueprint = Blueprint('students', __name__)

@student_blueprint.route('/students', methods=['GET'])
def get_students():
    students = Student.query.all()
    return jsonify([student.to_dict() for student in students])

@student_blueprint.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    if not data or not 'name' in data:
        return jsonify({'error': 'Invalid input'}), 400
    new_student = Student(name=data['name'])
    db.session.add(new_student)
    db.session.commit()
    return jsonify(new_student.to_dict()), 201

@student_blueprint.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()
    student = Student.query.get_or_404(id)
    if 'name' in data:
        student.name = data['name']
    db.session.commit()
    return jsonify(student.to_dict())

@student_blueprint.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get_or_404(id)
    db.session.delete(student)
    db.session.commit()
    return jsonify({'message': 'Student deleted'})
