import requests
import csv

# Define coordinates
coordinateY = 41.046321
coordinateX = 29.003509

# Define headers
headers = {"accept": "application/json"}

# Get API key from the user
api_key = input("Enter your Tripadvisor API key: ")

# Open CSV file for appending
with open("search_nearby_besiktas_attractions.csv", mode="a", newline="", encoding="utf-8") as csvfile:
    fieldnames = ["location_id", "name"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    # No need to write header row here

    for i in range(0, 10):
        coordinateY += 0.001
        coordinateX -= 0.001

        url = f"https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong={coordinateY},{coordinateX}&key=url%20%3D%20%22https%3A%2F%2Fapi.content.tripadvisor.com%2Fapi%2Fv1%2Flocation%2Fnearby_search%3Flanguage%3Den%26key%3D{api_key}%22&key={api_key}&category=attractions&radius=3&radiusUnit=km&language=en"

        print("Fetching data from: ", url)
        print("Coordinates:", coordinateY,",", coordinateX)
        print("\n")

        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()  # Check for any HTTP errors

            # Parse JSON response
            data = response.json()["data"]

            # Extract and write data to CSV
            for item in data:
                writer.writerow({"location_id": item["location_id"], "name": item["name"]})

        except requests.exceptions.HTTPError as err:
            print(f"HTTP error occurred: {err}")
        except requests.exceptions.RequestException as err:
            print(f"An error occurred: {err}")

# Reopen CSV file to remove duplicates
with open("search_nearby_besiktas_attractions.csv", mode="r", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    rows = list(reader)

# Remove duplicates
unique_rows = [dict(t) for t in {tuple(d.items()) for d in rows}]

# Write unique data back to the CSV file
with open("search_nearby_besiktas_attractions.csv", mode="w", newline="", encoding="utf-8") as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(unique_rows)
