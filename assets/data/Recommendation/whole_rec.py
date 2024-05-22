import pandas as pd
import tensorflow as tf
import numpy as np
from tensorflow.keras.layers import Embedding, Dense, Flatten, Input, Concatenate, GlobalAveragePooling1D, Normalization
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.metrics.pairwise import cosine_similarity
from tensorflow.keras import backend as K

# Load data
whole_data = pd.read_excel('data/whole_data_cleaned.xlsx')
whole_data.drop(["website","place_links","description"],axis=1,inplace=True)

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

# Convert rating to float and handle any missing data
whole_data['rating'] = whole_data['rating'].astype(float).fillna(whole_data['rating'].mean())

# Drop unnecessary columns
whole_data.drop('territory_id', axis=1, inplace=True)

# Pad the sequences for tags
tags_padded = pad_sequences(whole_data['tags'], padding='post')
whole_data['tags'] = list(tags_padded)
# Extract unique tags
tags_flat = [tag for sublist in whole_data['tags'].tolist() for tag in sublist]
unique_tags = np.unique(tags_flat)

# Define the model
def create_model(unique_tags, embedding_dim=64, dense_units=128):
    # Tag embedding
    tag_input = Input(shape=(None,), dtype=tf.int32, name='tags')
    tag_lookup = tf.keras.layers.IntegerLookup(vocabulary=unique_tags, mask_token=None)
    tag_embedding = Embedding(input_dim=len(unique_tags) + 1, output_dim=embedding_dim)
    tag_embeddings = tag_embedding(tag_lookup(tag_input))
    tag_embeddings = GlobalAveragePooling1D()(tag_embeddings)
    
    # Normalize rating
    rating_input = Input(shape=(1,), dtype=tf.float32, name='rating')
    rating_normalization = Normalization(axis=None)
    
    # Manually specify input shape
    rating_normalization.build((None, 1))
    
    rating_normalized = rating_normalization(rating_input)
    
    # Concatenate all features
    combined_embeddings = Concatenate()([
        tag_embeddings,
        rating_normalized
    ])
    
    dense = Dense(dense_units, activation='relu')(combined_embeddings)
    output = Dense(embedding_dim)(dense)
    
    model = Model(inputs=[tag_input, rating_input], outputs=output)
    return model

# Adjusted hyperparameters
model = create_model(unique_tags, embedding_dim=64, dense_units=128)

def triplet_loss(anchor, positive, negative, margin=1.0):
    # Compute the distance between the anchor and the positive
    positive_distance = tf.reduce_sum(tf.square(anchor - positive), axis=-1)
    
    # Compute the distance between the anchor and the negative
    negative_distance = tf.reduce_sum(tf.square(anchor - negative), axis=-1)
    
    # Compute the triplet loss
    loss = tf.maximum(positive_distance - negative_distance + margin, 0.0)
    
    return tf.reduce_mean(loss)
# Create a dataset for triplet loss training
def generate_triplets(dataframe):
    anchor_features = {
        'tags': [],
        'rating': []
    }
    positive_features = {
        'tags': [],
        'rating': []
    }
    negative_features = {
        'tags': [],
        'rating': []
    }
    
    for _, row in dataframe.iterrows():
        anchor_features['tags'].append(row['tags'])
        anchor_features['rating'].append(row['rating'])
        
        positive_idx = np.random.choice(dataframe.index)
        negative_idx = np.random.choice(dataframe.index)
        
        positive_row = dataframe.loc[positive_idx]
        negative_row = dataframe.loc[negative_idx]
        
        positive_features['tags'].append(positive_row['tags'])
        positive_features['rating'].append(positive_row['rating'])
        
        negative_features['tags'].append(negative_row['tags'])
        negative_features['rating'].append(negative_row['rating'])
    
    return (
        {k: pad_sequences(v, padding='post') if k == 'tags' else np.array(v) for k, v in anchor_features.items()},
        {k: pad_sequences(v, padding='post') if k == 'tags' else np.array(v) for k, v in positive_features.items()},
        {k: pad_sequences(v, padding='post') if k == 'tags' else np.array(v) for k, v in negative_features.items()}
    )

anchor_features, positive_features, negative_features = generate_triplets(whole_data)

def triplet_generator(anchor_features, positive_features, negative_features, batch_size=32):
    while True:
        indices = np.arange(len(anchor_features['tags']))
        np.random.shuffle(indices)
        
        for start in range(0, len(anchor_features['tags']), batch_size):
            end = start + batch_size
            batch_indices = indices[start:end]
            
            anchor_batch = {k: v[batch_indices] for k, v in anchor_features.items()}
            positive_batch = {k: v[batch_indices] for k, v in positive_features.items()}
            negative_batch = {k: v[batch_indices] for k, v in negative_features.items()}
            
            yield (anchor_batch, positive_batch, negative_batch)

batch_size = 32
triplet_gen = triplet_generator(anchor_features, positive_features, negative_features, batch_size=batch_size)

# Compile the model with custom training loop
optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)

@tf.function
def train_step(anchor_batch, positive_batch, negative_batch):
    with tf.GradientTape() as tape:
        anchor_embeddings = model(anchor_batch, training=True)
        positive_embeddings = model(positive_batch, training=True)
        negative_embeddings = model(negative_batch, training=True)
        
        loss = triplet_loss(anchor_embeddings, positive_embeddings, negative_embeddings)
    
    gradients = tape.gradient(loss, model.trainable_variables)
    optimizer.apply_gradients(zip(gradients, model.trainable_variables))
    return loss

# Training loop
epochs = 100
steps_per_epoch = len(anchor_features['tags']) // batch_size

for epoch in range(epochs):
    for step in range(steps_per_epoch):
        anchor_batch, positive_batch, negative_batch = next(triplet_gen)
        loss = train_step(anchor_batch, positive_batch, negative_batch)
        
        if step % 100 == 0:
            print(f"Epoch {epoch + 1}, Step {step}, Loss: {loss.numpy()}")
            
# Save the trained model
model.save('triplet_model.h5')



model = tf.keras.models.load_model('triplet_model.keras', custom_objects={'triplet_loss': triplet_loss})

# Generate embeddings for all locations
features = {
    'tags': np.array(pad_sequences(whole_data['tags'], padding='post')),
    'rating': np.array(whole_data['rating'])
}
location_embeddings = model.predict(features)

# Compute cosine similarity matrix
similarity_matrix = cosine_similarity(location_embeddings)

# Function to generate recommendations for a specific place
def recommend(input_features, k=20):
    input_dict = {
        'tags': tf.convert_to_tensor([input_features['tags']], dtype=tf.int32),
        'rating': tf.convert_to_tensor([input_features['rating']], dtype=tf.float32)
    }
    
    # Generate the query embedding
    query_embedding = model.predict(input_dict)
    location_embeddings = model.predict(features)
    
    # Compute cosine similarity between the query embedding and all location embeddings
    similarities = cosine_similarity(query_embedding, location_embeddings)
    
    # Get the top-k most similar locations
    top_k_indices = similarities[0].argsort()[-k:][::-1]
    
    return top_k_indices

# Example usage
input_features = {
    'tags': [1,2,3,5],  # Example tags
    'rating': 4.0
}

recommendations = recommend(input_features, k=10)
print("Recommended items:", recommendations)

# Fetching the items from the dataset
recommended_items = whole_data.iloc[recommendations]
recommended_items



# Load user data
user_data = pd.read_excel('data/generated_user_data.xlsx')
user_data


# Preprocess user_data
user_data['user_id'] = user_data.index

# Extract unique user_ids and place_ids
unique_user_ids = user_data['user_id'].unique()
unique_place_ids = user_data['place_id'].unique()

# Create mappings for user_ids and place_ids
user_id_to_index = {user_id: index for index, user_id in enumerate(unique_user_ids)}
place_id_to_index = {place_id: index for index, place_id in enumerate(unique_place_ids)}

# Map user_ids and place_ids to indices
user_data['user_index'] = user_data['user_id'].map(user_id_to_index)
user_data['place_index'] = user_data['place_id'].map(place_id_to_index)


from keras.src.layers import Multiply
from tensorflow.keras.layers import Input, Embedding, Dot, Add, Flatten, Dense
from tensorflow.keras.models import Model

def create_ncf_model(num_users, num_places, embedding_dim=50, hidden_layers=[64, 32, 16, 8]):
    # User input and embedding
    user_input = Input(shape=(1,), name='user_input')
    user_embedding = Embedding(input_dim=num_users, output_dim=embedding_dim, name='user_embedding')(user_input)
    user_embedding = Flatten()(user_embedding)
    
    # Place input and embedding
    place_input = Input(shape=(1,), name='place_input')
    place_embedding = Embedding(input_dim=num_places, output_dim=embedding_dim, name='place_embedding')(place_input)
    place_embedding = Flatten()(place_embedding)
    
    # GMF part: element-wise product of user and place embeddings
    gmf_vector = Multiply()([user_embedding, place_embedding])
    
    # MLP part: concatenate user and place embeddings
    mlp_vector = Concatenate()([user_embedding, place_embedding])
    
    # Hidden layers for MLP
    for units in hidden_layers:
        mlp_vector = Dense(units, activation='relu')(mlp_vector)
        
    
    # Concatenate GMF and MLP parts
    combined_vector = Concatenate()([gmf_vector, mlp_vector])
    
    # Final prediction layer
    output = Dense(1, activation='sigmoid')(combined_vector)
    
    # Build and compile model
    model = Model(inputs=[user_input, place_input], outputs=output)
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    
    return model

num_users = len(unique_user_ids)
num_places = len(unique_place_ids)
embedding_dim = 50

ncf_model = create_ncf_model(num_users, num_places, embedding_dim)


# Prepare training data
user_indices = user_data['user_index'].values
place_indices = user_data['place_index'].values
interactions = user_data['score'].values  # Assuming binary interaction (0 or 1)

# Train the model
ncf_model.fit(
    x=[user_indices, place_indices],
    y=interactions,
    batch_size=32,
    epochs=15,
    validation_split=0.2
)

# Save the trained NCF model
ncf_model.save('ncf_model.h5')


def ncf_recommend(user_id, model, place_data, user_id_to_index, k=10):
    user_index = user_id_to_index[user_id]
    user_vector = np.full((len(place_data),), user_index)
    place_indices = np.arange(len(place_data))
    
    # Predict scores for all places for the given user
    predictions = model.predict([user_vector, place_indices])
    top_k_indices = predictions.flatten().argsort()[-k:][::-1]
    
    # Get the recommended places
    recommended_places = place_data.iloc[top_k_indices]
    return recommended_places

# Example usage
user_id = 10  # Replace with the actual user_id you want to recommend for
recommended_places = ncf_recommend(user_id, ncf_model, whole_data, user_id_to_index, k=10)
print("Recommended places for user:", user_id)
print(recommended_places)

#write a hybrid recommendation function weighted_hybrid_recommend
from sklearn.preprocessing import MinMaxScaler

def weighted_hybrid_recommend(input_features, user_id, content_model, cf_model, place_data, user_id_to_index, cb_weight=0.5, cf_weight=0.5, k=10):
    # Content-based recommendations (remove the extra 'content_model' argument)
    cb_recommendations = recommend(input_features, k) 
    
    # Collaborative filtering recommendations (with error handling)
    try:
        cf_recommendations = ncf_recommend(user_id, cf_model, place_data, user_id_to_index, k)
        cf_scores = cf_model.predict([np.full((len(place_data),), user_id_to_index[user_id]), place_data.index.values])
        cf_scores = cf_scores.flatten()
    except KeyError:  # User might not exist in CF model's data
        cf_recommendations = pd.DataFrame() 
        cf_scores = np.zeros(len(place_data))

    all_recommendations = pd.concat([place_data.iloc[cb_recommendations], cf_recommendations])
    all_recommendations['source'] = ['content-based'] * len(cb_recommendations) + ['collaborative-filtering'] * len(cf_recommendations)

    # Ensure that both DataFrames have 'place_id'
    if 'place_id' not in all_recommendations.columns:
        # Assuming `place_data` has the 'place_id' column, create a new one for `cf_recommendations`.
        all_recommendations['place_id'] = all_recommendations['name'].apply(lambda name: place_data.loc[place_data['name'] == name, 'place_id'].iloc[0])  # Adjust as needed if multiple places have the same name

    # Drop duplicates after ensuring 'place_id' exists
    all_recommendations = all_recommendations.drop_duplicates('place_id')


    # Scale scores to 0-1 range (reshape to 2D before scaling)
    scaler = MinMaxScaler()

    # Make sure to update indices after removing duplicates
    cb_recommendations = all_recommendations.index[all_recommendations['source'] == 'content-based']
    cf_recommendations = all_recommendations.index[all_recommendations['source'] == 'collaborative-filtering']

    all_recommendations['score'] = scaler.fit_transform(
        np.concatenate([
            cosine_similarity(content_model.predict({
                'tags': tf.convert_to_tensor([input_features['tags']], dtype=tf.int32),
                'rating': tf.convert_to_tensor([input_features['rating']], dtype=tf.float32)
            }), model.predict({
                'tags': pad_sequences([place_data.iloc[idx]['tags']], padding='post'),
                'rating': np.array([place_data.iloc[idx]['rating']])
            }))[0].reshape(-1, 1) for idx in cb_recommendations  # Use the updated index after removing duplicates
        ] + [cf_scores[cf_recommendations].reshape(-1, 1)])  # Use the updated index after removing duplicates and ensure it is 2D
    )

    # Calculate weighted average score
    all_recommendations['weighted_score'] = all_recommendations.apply(
        lambda row: row['score'] * cb_weight if row['source'] == 'content-based' else row['score'] * cf_weight,
        axis=1
    )
    
    # Sort and return top recommendations
    return all_recommendations.sort_values('weighted_score', ascending=False).drop_duplicates('place_id').head(k)

# Example usage
input_features = {
    'tags': [1,2,3,6,7,9,10,11,12,13],  # Example tags
    'rating': 4.5
}
user_id = 0  # Replace with the actual user_id

recommended_items = weighted_hybrid_recommend(input_features, user_id, model, ncf_model, whole_data, user_id_to_index, cb_weight=0.9, cf_weight=0.1, k=10)

print(recommended_items)