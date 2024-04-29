import csv
import random

# Function to generate random data for each row
def generate_random_row():
    genders = ['f', 'm']
    tag_ids = list(range(48))
    territories = list(range(4))
    places = list(range(300))

    user_gender = random.choice(genders)
    tag_ids = random.sample(tag_ids, 3)
    origin_territory_id = random.choice(territories)
    recommended_place_id = random.choice(places)
    score = random.randint(0, 1)

    return [user_gender, tag_ids, origin_territory_id, recommended_place_id, score]

# Function to append rows to CSV file
def append_to_csv(filename, num_rows):
    with open(filename, 'a', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for _ in range(num_rows):
            row = generate_random_row()
            writer.writerow(row)

# Add 1000 random rows to the CSV file
filename = 'recommender_historical_new.csv'
num_rows_to_add = 1000
append_to_csv(filename, num_rows_to_add)

# userGender,tagIds,terittoryId,placeId,score