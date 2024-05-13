from flask import Flask, request, jsonify, session,redirect, url_for
from flask_pymongo import PyMongo
from flask_cors import CORS
import secrets
import bcrypt
from sklearn.metrics.pairwise import cosine_similarity
from model import get_recommendations
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


app.secret_key = secrets.token_bytes(32)
# Connect to MongoDB
app.config["MONGO_URI"] = "mongodb://localhost:27017/DrugRecommendation"
mongo = PyMongo(app)
db = mongo.db


#signup
@app.route("/signup", methods=["GET", "POST"])
def signup():
    data = {}  # Create an empty dictionary to store form data

    if not request.form:
        return jsonify({"message": "No data provided in request body"}), 400

    for key, value in request.form.items():
        data[key] = value

    if not data:
        return jsonify({"message": "No data provided in request body"}), 400

    user_exists = db.Login.find_one({"email": data["email"]})

    if user_exists:
        return jsonify({"message": "exist"}), 409  # Conflict: User already exists

    try:
        hashed_password = bcrypt.hashpw(data['password'].encode("utf-8"), bcrypt.gensalt())
        new_user = {
            "name": data["name"],
            "email": data["email"],
            "password": hashed_password,  # Store hashed password
        }
        db.Login.insert_one(new_user)
    except Exception as e:
        print(f"Error creating user: {e}")
        return jsonify({"message": "error"}), 500  # Internal Server Error

    return jsonify({"message": "success"}), 201  # Created

#Login 
@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        login_data = request.get_json() or request.form  # Try to get JSON data first, then form data
        print("Login:", login_data)
        if not login_data:
            return jsonify({"message": "No data provided in request body"}), 400

        user = db.Login.find_one({"email": login_data.get('email')})

        if not user:
            return jsonify({"message": "Invalid credentials"}), 401

        try:
            if bcrypt.checkpw(login_data.get('password').encode("utf-8"), user["password"]):
                session["user_id"] = str(user["_id"])  # Store user ID in session
                return jsonify({"message": "Login successful!"}), 200
            else:
                return jsonify({"message": "Invalid credentials"}), 401

        except Exception as e:
            print(f"Error during login: {e}")
            return jsonify({"message": "Internal server error"}), 500

    return jsonify({"message": "Method not allowed"}), 405

@app.route('/recommendations', methods=['POST', 'GET'])
def recommendation():
    if request.method == 'POST':
        data={}
        new_patient_info = request.json

        if not new_patient_info:
            return jsonify({"message": "No data provided"}), 400

        # Remove non-numeric fields like patientName from new_patient_info
        for key, value in request.json.items():
            data[key] = value
        try:
            new_patient = {
                "Patient Name": data["patientName"],
                "Patient id": data["patientNbr"],
                "age": data['age'],
                "gender": data['gender'],
                "race": data['race'],
                "Insulin":data['insulin'],
                "Metformin": data['metformin'],
                "Glipizide":data['glipizide'],
                "Glyburide": data['glyburide'],
                "Pioglitazone": data['pioglitazone'],
                "Rosiglitazone": data['rosiglitazone'],
                "Glimepiride": data['glimepiride'],
                "Repaglinide":data['repaglinide'],
                "Dlyburide Metformin": data['glyburideMetformin'],
                "Nateglinide": data['nateglinide']
            }
            db.Patients.insert_one(new_patient)
        except Exception as e:
            print(f"Error creating user: {e}")
            return jsonify({"message": "error"}), 500  # Internal Server Error
        
        new_patient_info.pop('patientName')
        new_patient_info.pop('age')
        new_patient_info.pop('weight')
        new_patient_info.pop('patientNbr')
        new_patient_info.pop('gender')
        new_patient_info.pop('race')
       

        # Convert medication responses to binary (1 or 0)
        for medication in new_patient_info:
            response = new_patient_info[medication]
            if isinstance(response, str) and response.lower() == 'yes':
                new_patient_info[medication] = 1
            elif isinstance(response, str) and response.lower() == 'no':
                new_patient_info[medication] = 0
            else:
                return jsonify({"message": f"Invalid response for {medication}. Please enter 'Yes' or 'No'."}), 400

        # Call recommendation function
        recommendations = get_recommendations(new_patient_info)
        return jsonify({'status': 'success', 'recommendations': recommendations})

    else:
        return jsonify({"message": "Method not allowed"}), 405

if __name__ == "__main__":
    app.run(debug=True)