# gym-rats-livros Flask API Structure

This repository contains a Flask API for managing gym-related information.

## Directory Structure
```
/gym_rats_livros
    /models
        __init__.py
        user.py
        workout.py
        activity.py
    /routes
        __init__.py
        user_routes.py
        workout_routes.py
        activity_routes.py
    /services
        __init__.py
        user_service.py
        workout_service.py
        activity_service.py
    app.py
    config.py
    requirements.txt
    run.py
```

## File Descriptions
- `app.py`: Main application file where the Flask app is created and configured.
- `config.py`: Configuration settings for the Flask app (e.g., database URI).
- `requirements.txt`: Required packages for the project.
- `run.py`: Script to run the application.
- `models/*`: Contains model definitions for the database.
- `routes/*`: Contains route definitions for the API.
- `services/*`: Contains business logic and service layer functions.

## Sample Code
### app.py
```python
from flask import Flask

from routes.user_routes import user_bp
from routes.workout_routes import workout_bp
from routes.activity_routes import activity_bp

app = Flask(__name__)
app.config.from_object('config.Config')

app.register_blueprint(user_bp)
app.register_blueprint(workout_bp)
app.register_blueprint(activity_bp)

if __name__ == '__main__':
    app.run(debug=True)
```

### User Model (models/user.py)
```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'
```

### User Routes (routes/user_routes.py)
```python
from flask import Blueprint, jsonify, request

user_bp = Blueprint('user', __name__)

@user_bp.route('/users', methods=['GET'])
def get_users():
    return jsonify({'message': 'List of users'})
```

### User Service (services/user_service.py)
```python
from models.user import User

def get_all_users():
    return User.query.all()
```

## Instructions to Setup
1. Clone the repository.
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Set up the database and migrations.
4. Run the application:
    ```bash
    python run.py
    ```
```

## Notes
- Ensure you have Python and pip installed.
- Modify the database URI in `config.py` to point to your database.
- Set up proper error handling, authentication, and other features as needed.
