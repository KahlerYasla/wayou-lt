from connected_route_text_generator import generate_travel_plan
from whole_rec_with_new_card_swiping_rec import recommend_places

from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/generate_travel_plan', methods=['POST'])
def generate_travel_plan_route():
    user_id = request.json.get('userId', 100)  # Get user ID from request, default to 100 if not provided
    print(user_id)

    place_id_list = recommend_places(user_id)

    data_df = pd.read_csv("id_summarized_data.csv")
    data_df = data_df[data_df['place_id'].isin(place_id_list)]

    num_days = request.json.get('numDays', 2)  # Get number of days from request, default to 2 if not provided
    travel_plan = generate_travel_plan(data_df, num_days)

    # return both travel_plan and place_id_list
    return jsonify({"tripText": travel_plan, "placeIdList": place_id_list})

@app.route('/recommend_places', methods=['POST'])
def recommend_places_route():
    user_id = request.json.get('userId', 100)
    recommended_items = recommend_places(user_id)

    return jsonify({"recommendedItems": recommended_items})

@app.route('/interact', methods=['POST'])
def interact_route():
    user_id = request.json.get('userId', 100)
    place_id = request.json.get('placeId', 1)
    score = request.json.get('isLike', 0)

    user_gender = "Recommender"
    continent = -1
    user_age = -1

    # insert user-item interaction into the historical_interactions.xlsx
    historical_interactions = pd.read_excel("historical_interactions.xlsx")

    new_row = pd.DataFrame([{
        "user_id": user_id,
        "place_id": place_id,
        "score": score,
        "user_gender": user_gender,
        "continent": continent,
        "user_age": user_age
    }])

    historical_interactions = pd.concat([historical_interactions, new_row], ignore_index=True)

    historical_interactions.to_excel("historical_interactions.xlsx", index=False)

    return jsonify({"status": "success"})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5353)