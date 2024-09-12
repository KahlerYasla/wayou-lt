from flask import Blueprint, request, jsonify
from flask_restx import Resource, Namespace, fields

import pandas as pd

from app.services.recommend_service import recommend_places
from app.services.route_service import generate_text

# Creating the Blueprint
generate_trip_bp = Blueprint('generate_trip', __name__)

# Creating the Namespace
ns = Namespace('generate-trip', description='Trip recommendation with generated text')

# Defining the model
generate_trip_request = ns.model('GenerateTripRequest', {
    'userId': fields.Integer(required=True, description='User ID'),
    'numDays': fields.Integer(required=True, description='Number of days for the trip')
})

@ns.route('/')
@ns.expect(generate_trip_request)
class GenerateTrip(Resource):
    
    def post(self):
        user_id = request.json.get('userId', 100)
        place_id_list = recommend_places(user_id)

        data_df = pd.read_csv("data/summarized_descriptions.csv")
        data_df = data_df[data_df['place_id'].isin(place_id_list)]

        num_days = request.json.get('numDays', 2)
        travel_plan = generate_text(data_df, num_days)

        return jsonify({"tripText": travel_plan, "placeIdList": place_id_list})
