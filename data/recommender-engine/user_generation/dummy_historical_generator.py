import pandas as pd
import random

# Function to generate a random 6-digit number
def generate_place_id(used_ids):
    new_id = random.randint(100000, 999999)
    while new_id in used_ids:
        new_id = random.randint(100000, 999999)
    return new_id

# Read data from Excel file
file_path = 'data/rec_data.xlsx'
df = pd.read_excel(file_path)

# Initialize set to store used IDs
used_ids = set()

# Generate and assign unique place IDs
place_ids = []
for _ in range(len(df)):
    new_id = generate_place_id(used_ids)
    place_ids.append(new_id)
    used_ids.add(new_id)

# Add place_ids as a new column
df['place_id'] = place_ids

# Save the updated DataFrame to a new Excel file
output_file_path = 'id_generated_rec_data.xlsx'
df.to_excel(output_file_path, index=False)

print("IDs generated and saved successfully to:", output_file_path)
