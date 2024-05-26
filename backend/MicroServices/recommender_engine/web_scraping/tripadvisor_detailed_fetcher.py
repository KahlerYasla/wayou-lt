import time
import requests
import csv

location_ids = []

# Get API key from the user
api_key = input("Enter your Tripadvisor API key: ")

# Get related csv file to read location_id
with open("search_nearby_besiktas.csv", mode="r", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    rows = list(reader)

    # Get location_id from the rows
    location_ids = [row["location_id"] for row in rows]

# Get detailed information for each location_id via tripadvisor api 
# https://api.content.tripadvisor.com/api/v1/location/10717296/details
# Then save the detailed_besiktas.csv file

for location_id in location_ids:
    url = f"https://api.content.tripadvisor.com/api/v1/location/{location_id}/details?key={api_key}&language=en&currency=USD"
    response = requests.get(url)
    data = response.json()

    with open("detailed_besiktas.csv", mode="a", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=["location_id", "name", "description", "locationYX", "website", "phone", "rating"])
        if csvfile.tell() == 0:
            writer.writeheader()
        writer.writerow({
            "location_id": location_id,
            "name": data["name"],
            "locationYX": data.get("latitude", "") + "," + data.get("longitude", ""),
            "description": data.get("description", ""),
            "website": data.get("website", ""),
            "phone": data.get("phone", ""),
            "rating": data.get("rating", "")
       })
        
        # clear the console
        print("\033[H\033[J")

        # print the percentage of the process
        print(f"{location_ids.index(location_id)}/{len(location_ids)}")

        # wait for 0.1 second
        time.sleep(0.1)
        
    # url = f"https://api.content.tripadvisor.com/api/v1/location/{location_ids[0]}/details?key={api_key}&language=en&currency=USD"
    # response = requests.get(url)
    # data = response.json()

    # with open("detailed_besiktas.csv", mode="a", encoding="utf-8") as csvfile:
    #     writer = csv.DictWriter(csvfile, fieldnames=["location_id", "name", "description", "locationYX", "website", "phone", "rating"])
    #     if csvfile.tell() == 0:
    #         writer.writeheader()
    #     writer.writerow({
    #         "location_id": location_ids[0],
    #         "name": data["name"],
    #         "locationYX": data.get("latitude", "") + "," + data.get("longitude", ""),
    #         "description": data.get("description", ""),
    #         "website": data.get("website", ""),
    #         "phone": data.get("phone", ""),
    #         "rating": data.get("rating", "")
    #     })
