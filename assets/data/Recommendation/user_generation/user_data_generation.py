import pandas as pd
import numpy as np

# Load the recommendation data
rec_data = pd.read_excel('data/id_generated_rec_data.xlsx')

# Create user data
num_unique_users = 1000
entries_per_user = 10
num_total_entries = num_unique_users * entries_per_user

# Create an empty DataFrame to store user data
user_data = pd.DataFrame()

# Generate user_id
user_ids = np.arange(1, num_unique_users + 1)
user_data['user_id'] = np.repeat(user_ids, entries_per_user)

# Generate user_gender randomly
user_genders = np.random.choice(['Male', 'Female'], size=num_unique_users)
user_data['user_gender'] = np.repeat(user_genders, entries_per_user)

# Sample place_ids from recommendation data
user_data['place_id'] = np.random.choice(rec_data['place_id'], size=num_total_entries)

# Encode continents
continents = ['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia']
continent_codes = range(len(continents))
user_continents = np.random.choice(continent_codes, size=num_unique_users)
user_data['continent'] = np.repeat(user_continents, entries_per_user)

# Generate mostly positive scores (1) with some negative scores (0)
user_data['score'] = np.random.choice([1, 0], size=num_total_entries, p=[0.9, 0.1])

# Define age distribution parameters
mean_age = 50  # Mean age skewed towards older ages
std_dev_age = 15  # Larger standard deviation for more variance

# Generate random ages based on normal distribution
user_ages = np.random.normal(mean_age, std_dev_age, size=num_unique_users).astype(int)

# Ensure ages are non-negative
user_ages = np.clip(user_ages, a_min=0, a_max=None)

user_data['user_age'] = np.repeat(user_ages, entries_per_user)

# Save the user data to a new Excel file
user_data.to_excel('generated_user_data.xlsx', index=False)
