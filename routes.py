from flask import Blueprint, request, jsonify

student_blueprint = Blueprint('students', __name__)

students = {}

@student_blueprint.route('/students', methods=['POST'])
def create_student():
    data = request.get_json()
    student_id = data.get('id')
    if not student_id or student_id in students:
        return jsonify({'error': 'Invalid or duplicate student ID'}), 400
    students[student_id] = data
    return jsonify({'message': 'Student created successfully'}), 201

@student_blueprint.route('/students/<student_id>', methods=['GET'])
def get_student(student_id):
    student = students.get(student_id)
    if not student:
        return jsonify({'error': 'Student not found'}), 404
    return jsonify(student)

@student_blueprint.route('/students/<student_id>', methods=['PUT'])
def update_student(student_id):
    if student_id not in students:
        return jsonify({'error': 'Student not found'}), 404
    data = request.get_json()
    students[student_id].update(data)
    return jsonify({'message': 'Student updated successfully'})

@student_blueprint.route('/students/<student_id>', methods=['DELETE'])
def delete_student(student_id):
    if student_id not in students:
        return jsonify({'error': 'Student not found'}), 404
    del students[student_id]
    return jsonify({'message': 'Student deleted successfully'})