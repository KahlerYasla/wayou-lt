from flask import Blueprint, request, jsonify
from flask_restx import Resource, Namespace, fields

import pandas as pd

# Create the Blueprint
interact_bp = Blueprint('interact', __name__)

# Create the Namespace
ns = Namespace('interact', description='User interaction like/dislike with a place to train recommender model')

# Defining the model
interact_request = ns.model('InteractRequest', {
    'userId': fields.Integer(required=True, description='User ID'),
    'placeId': fields.Integer(required=True, description='Place ID'),
    'isLike': fields.Integer(required=True, description='Like (1) or Dislike (0)')
})

@ns.route('/')
class Interact(Resource):

    @ns.expect(interact_request)
    def post(self):
        user_id = request.json.get('userId', 100)
        place_id = request.json.get('placeId', 1)
        score = request.json.get('isLike', 0)

        user_gender = "Recommender"
        continent = -1
        user_age = -1

        historical_interactions = pd.read_csv("./data/historical/historical_interactions.csv")

        new_row = pd.DataFrame([{
            "user_id": user_id,
            "place_id": place_id,
            "score": score,
            "user_gender": user_gender,
            "continent": continent,
            "user_age": user_age
        }])

        historical_interactions = pd.concat([historical_interactions, new_row], ignore_index=True)
        historical_interactions.to_csv("./data/historical/historical_interactions.csv", index=False)

        return jsonify({"status": "success"})
