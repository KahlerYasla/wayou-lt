import pandas as pd
import tensorflow as tf
import numpy as np
from tensorflow.keras.layers import Embedding, Dense, Concatenate, Input
from tensorflow.keras.models import Model
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MultiLabelBinarizer

# Load data
whole_data = pd.read_excel('data/whole_data_cleaned.xlsx')
whole_data.drop(["website", "place_links", "description", "territory_id.1"], axis=1, inplace=True)

# Preprocess whole_data: Convert 'tags' from comma-separated strings to lists of integers
def safe_int_convert(tag_list):
    if isinstance(tag_list, list):
        return tag_list
    elif isinstance(tag_list, (int, float)):
        return [int(tag_list)]
    elif isinstance(tag_list, str):
        try:
            return list(map(int, tag_list.split(',')))
        except ValueError:
            return []
    return []

whole_data['tags'] = whole_data['tags'].apply(safe_int_convert)

# Dummy encode tags
mlb = MultiLabelBinarizer()
dummy_tags = pd.DataFrame(mlb.fit_transform(whole_data['tags']), columns=mlb.classes_, index=whole_data.index)

# Define the model
def create_model(input_dim, embedding_dim=64, dense_units=128):
    # Tag embedding
    tag_input = Input(shape=(input_dim,), dtype=tf.float32, name='tags')
    dense = Dense(embedding_dim, activation='relu')(tag_input)
    output = Dense(embedding_dim)(dense)
    
    model = Model(inputs=tag_input, outputs=output)
    return model

# Adjusted hyperparameters
model = create_model(input_dim=dummy_tags.shape[1], embedding_dim=64, dense_units=128)

# Compile the model
model.compile(optimizer='adam', loss='mse')

# Train the model
history = model.fit(
    x=dummy_tags,
    y=np.zeros((len(whole_data), 64)),  # Dummy target, since we're using a custom loss function
    epochs=50,
    batch_size=32
)

# Save the trained model
model.save('tag_embedding_model.h5')

# Generate embeddings for all locations
location_embeddings = model.predict(dummy_tags)

# Function to generate recommendations for a specific tag
def recommend_by_tag(tag_id, k=20):
    # Find indices of places with the given tag
    tagged_indices = whole_data[whole_data['tags'].apply(lambda x: tag_id in x)].index
    
    # Compute cosine similarity between the tag embedding and embeddings of places with the tag
    tag_embedding = model.predict(mlb.transform([[tag_id]]))
    similarities = cosine_similarity(tag_embedding, location_embeddings[tagged_indices])
    
    # Get the indices of top-k most similar places
    top_k_indices = tagged_indices[similarities.argsort(axis=1)[0][-k:]][::-1]
    
    return top_k_indices

# Example usage
tag_input = 5
recommendations = recommend_by_tag(tag_input, k=10)

# Sort recommendations based on rating
recommended_items = whole_data.iloc[recommendations].sort_values(by='rating', ascending=False)

print("Recommended items for tag", tag_input, ":")
print(recommended_items)
