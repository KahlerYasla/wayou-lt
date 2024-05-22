import pandas as pd
import tensorflow as tf
import numpy as np
from tensorflow.keras.layers import Embedding, Dense, Concatenate, Input
from tensorflow.keras.models import Model
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MultiLabelBinarizer

# Load data
whole_data = pd.read_excel('data/whole_data_cleaned.xlsx')
whole_data.drop(["website", "place_links", "description"], axis=1, inplace=True)

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

# Function to generate recommendations for a list of tags
def recommend_by_tags(tag_ids, k=20):
    # Find indices of places with any of the given tags
    tagged_indices = set()
    for tag_id in tag_ids:
        tagged_indices.update(whole_data[whole_data['tags'].apply(lambda x: tag_id in x)].index)
    tagged_indices = list(tagged_indices)
    
    if not tagged_indices:
        return []  # No places found with the given tags
    
    # Compute cosine similarity between the tag embeddings and embeddings of places with the tags
    tag_embeddings = np.mean([model.predict(mlb.transform([[tag_id]])) for tag_id in tag_ids], axis=0)
    similarities = cosine_similarity(tag_embeddings.reshape(1, -1), location_embeddings[tagged_indices])
    
    # Get the indices of top-k most similar places
    top_k_indices = np.array(tagged_indices)[similarities.argsort(axis=1)[0][-k:]][::-1]
    
    return top_k_indices

# Example usage
tag_inputs = [9,12]  # Example list of tags
recommendations = recommend_by_tags(tag_inputs, k=20)

# Sort recommendations based on rating
recommended_items = whole_data.iloc[recommendations].sort_values(by='rating', ascending=False)

print("Recommended items for tags", tag_inputs, ":")
print(recommended_items)
