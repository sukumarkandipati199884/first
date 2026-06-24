from flask import Blueprint, request, jsonify
from werkzeug.exceptions import BadRequest

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/api/data', methods=['GET'])
def get_data():
    try:
        # Example of query parameter validation
        param = request.args.get('param')
        if not param:
            raise BadRequest('Missing required parameter: param')
        # Simulate data fetching
        data = {'param': param, 'value': 'some data'}
        return jsonify(data), 200
    except BadRequest as e:
        return jsonify({'error': str(e)}), 400
