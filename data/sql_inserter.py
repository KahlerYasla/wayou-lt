import pandas as pd
import psycopg2
from psycopg2 import sql

# Connection details
conn_string = "host='localhost' dbname='wayou' user='kahler' password='3755' port='5432'"

# Read the CSV file
df = pd.read_csv('place_id-tag_list.csv')

# Connect to PostgreSQL
conn = psycopg2.connect(conn_string)
cursor = conn.cursor()

# Function to insert data into PlaceTag table
def insert_place_tags(cursor, place_id, tag):
    insert_query = sql.SQL("""
        INSERT INTO "PlaceTag" ("PlacesId", "TagsId")
        VALUES (%s, %s)
    """)
    cursor.execute(insert_query, (place_id, tag))

try:
    for index, row in df.iterrows():
        place_id = row['Id']
        tags = row['Tags']
        # Split the tags by comma if there are multiple
        tag_list = tags.split(',')
        for tag in tag_list:
            insert_place_tags(cursor, place_id, tag.strip())

    # Commit the transaction
    conn.commit()

except Exception as e:
    print(f"An error occurred: {e}")
    conn.rollback()

finally:
    cursor.close()
    conn.close()
