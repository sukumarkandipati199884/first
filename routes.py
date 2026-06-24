from flask import Blueprint, jsonify, request, abort

student_bp = Blueprint('students', __name__, url_prefix='/students')

# In-memory database
students = {}

@student_bp.route('/', methods=['POST'])
def create_student():
    data = request.get_json()
    if not data or 'id' not in data or 'name' not in data:
        abort(400, description="Invalid input")
    student_id = data['id']
    if student_id in students:
        abort(400, description="Student already exists")
    students[student_id] = data['name']
    return jsonify({'id': student_id, 'name': data['name']}), 201

@student_bp.route('/<int:student_id>', methods=['GET'])
def get_student(student_id):
    if student_id not in students:
        abort(404, description="Student not found")
    return jsonify({'id': student_id, 'name': students[student_id]})

@student_bp.route('/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    if student_id not in students:
        abort(404, description="Student not found")
    data = request.get_json()
    if not data or 'name' not in data:
        abort(400, description="Invalid input")
    students[student_id] = data['name']
    return jsonify({'id': student_id, 'name': data['name']})

@student_bp.route('/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    if student_id not in students:
        abort(404, description="Student not found")
    del students[student_id]
    return jsonify({'result': 'success'})