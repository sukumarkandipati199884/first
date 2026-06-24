from flask import Blueprint, jsonify, request, abort

student_blueprint = Blueprint('students', __name__)

# In-memory database
students = {}

@student_blueprint.route('/students', methods=['POST'])
def create_student():
    data = request.get_json()
    if not data or 'id' not in data or 'name' not in data:
        abort(400, 'Invalid data')
    student_id = data['id']
    if student_id in students:
        abort(400, 'Student already exists')
    students[student_id] = data
    return jsonify({'message': 'Student created', 'student': data}), 201

@student_blueprint.route('/students/<int:student_id>', methods=['GET'])
def get_student(student_id):
    student = students.get(student_id)
    if not student:
        abort(404, 'Student not found')
    return jsonify({'student': student})

@student_blueprint.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    if student_id not in students:
        abort(404, 'Student not found')
    data = request.get_json()
    if not data or 'name' not in data:
        abort(400, 'Invalid data')
    students[student_id].update(data)
    return jsonify({'message': 'Student updated', 'student': students[student_id]})

@student_blueprint.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    if student_id not in students:
        abort(404, 'Student not found')
    del students[student_id]
    return jsonify({'message': 'Student deleted'})