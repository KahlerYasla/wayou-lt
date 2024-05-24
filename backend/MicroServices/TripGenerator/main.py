from connected_route_text_generator import generate_travel_plan
from whole_rec_with_new_card_swiping_rec import recommend_places

from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/generate_travel_plan', methods=['POST'])
def generate_travel_plan_route():
    place_id_list = recommend_places()

    data_df = pd.read_csv("id_summarized_data.csv")
    data_df = data_df[data_df['place_id'].isin(place_id_list)]

    num_days = request.json.get('num_days', 2)  # Get number of days from request, default to 2 if not provided
    travel_plan = generate_travel_plan(data_df, num_days)

    # return both travel_plan and place_id_list
    return jsonify({"tripText": travel_plan, "placeIdList": place_id_list})

@app.route('/recommend_places', methods=['POST'])
def recommend_places_route():
    recommended_items = recommend_places()
    return jsonify({"recommendedItems": recommended_items})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=6363)