from flask import Flask
from routes import student_blueprint
import logging

app = Flask(__name__)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Register blueprints
app.register_blueprint(student_blueprint)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)