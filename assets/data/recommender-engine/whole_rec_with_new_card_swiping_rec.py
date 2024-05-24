import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Model, load_model
from tensorflow.keras.layers import Input, Embedding, Dense, Flatten, Concatenate, GlobalAveragePooling1D, Normalization, Multiply
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MinMaxScaler

# Data Preprocessing
def preprocess_data(file_path):
    whole_data = pd.read_excel(file_path)
    whole_data.drop(["website", "place_links", "description", "territory_id"], axis=1, inplace=True)

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
    whole_data['rating'] = whole_data['rating'].astype(float).fillna(whole_data['rating'].mean())
    tags_padded = pad_sequences(whole_data['tags'], padding='post')
    whole_data['tags'] = list(tags_padded)
    tags_flat = [tag for sublist in whole_data['tags'].tolist() for tag in sublist]
    unique_tags = np.unique(tags_flat)
    return whole_data, unique_tags

# Define Triplet Loss
def triplet_loss(anchor, positive, negative, margin=1.0):
    positive_distance = tf.reduce_sum(tf.square(anchor - positive), axis=-1)
    negative_distance = tf.reduce_sum(tf.square(anchor - negative), axis=-1)
    loss = tf.maximum(positive_distance - negative_distance + margin, 0.0)
    return tf.reduce_mean(loss)

# Create Triplet Model
def create_triplet_model(unique_tags, embedding_dim=64, dense_units=128):
    tag_input = Input(shape=(None,), dtype=tf.int32, name='tags')
    tag_lookup = tf.keras.layers.IntegerLookup(vocabulary=unique_tags, mask_token=None)
    tag_embedding = Embedding(input_dim=len(unique_tags) + 1, output_dim=embedding_dim)
    tag_embeddings = tag_embedding(tag_lookup(tag_input))
    tag_embeddings = GlobalAveragePooling1D()(tag_embeddings)
    
    rating_input = Input(shape=(1,), dtype=tf.float32, name='rating')
    rating_normalization = Normalization(axis=None)
    rating_normalization.build((None, 1))
    rating_normalized = rating_normalization(rating_input)
    
    combined_embeddings = Concatenate()([tag_embeddings, rating_normalized])
    dense = Dense(dense_units, activation='relu')(combined_embeddings)
    output = Dense(embedding_dim)(dense)
    
    model = Model(inputs=[tag_input, rating_input], outputs=output)
    return model

# Create Triplets for Training
def generate_triplets(dataframe):
    anchor_features = {'tags': [], 'rating': []}
    positive_features = {'tags': [], 'rating': []}
    negative_features = {'tags': [], 'rating': []}
    
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

# Triplet Generator
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

# Custom Training Loop
@tf.function
def train_step(model, optimizer, anchor_batch, positive_batch, negative_batch):
    with tf.GradientTape() as tape:
        anchor_embeddings = model(anchor_batch, training=True)
        positive_embeddings = model(positive_batch, training=True)
        negative_embeddings = model(negative_batch, training=True)
        
        loss = triplet_loss(anchor_embeddings, positive_embeddings, negative_embeddings)
    
    gradients = tape.gradient(loss, model.trainable_variables)
    optimizer.apply_gradients(zip(gradients, model.trainable_variables))
    return loss

def train_triplet_model(model, anchor_features, positive_features, negative_features, epochs=100, batch_size=32):
    optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)
    triplet_gen = triplet_generator(anchor_features, positive_features, negative_features, batch_size=batch_size)
    steps_per_epoch = len(anchor_features['tags']) // batch_size

    for epoch in range(epochs):
        for step in range(steps_per_epoch):
            anchor_batch, positive_batch, negative_batch = next(triplet_gen)
            loss = train_step(model, optimizer, anchor_batch, positive_batch, negative_batch)
            
            if step % 100 == 0:
                print(f"Epoch {epoch + 1}, Step {step}, Loss: {loss.numpy()}")

    model.save('triplet_model.keras')

# Create and Train NCF Model
def create_ncf_model(num_users, num_places, embedding_dim=50, hidden_layers=[64, 32, 16, 8]):
    user_input = Input(shape=(1,), name='user_input')
    user_embedding = Embedding(input_dim=num_users, output_dim=embedding_dim, name='user_embedding')(user_input)
    user_embedding = Flatten()(user_embedding)
    
    place_input = Input(shape=(1,), name='place_input')
    place_embedding = Embedding(input_dim=num_places, output_dim=embedding_dim, name='place_embedding')(place_input)
    place_embedding = Flatten()(place_embedding)
    
    gmf_vector = Multiply()([user_embedding, place_embedding])
    mlp_vector = Concatenate()([user_embedding, place_embedding])
    
    for units in hidden_layers:
        mlp_vector = Dense(units, activation='relu')(mlp_vector)
        
    combined_vector = Concatenate()([gmf_vector, mlp_vector])
    output = Dense(1, activation='sigmoid')(combined_vector)
    
    model = Model(inputs=[user_input, place_input], outputs=output)
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    
    return model

def train_ncf_model(model, user_data, batch_size=32, epochs=15):
    if 'user_index' not in user_data.columns or 'place_index' not in user_data.columns or 'score' not in user_data.columns:
        raise ValueError("user_data must contain 'user_index', 'place_index', and 'score' columns.")

    user_indices = user_data['user_index'].values
    place_indices = user_data['place_index'].values
    interactions = user_data['score'].values

    model.fit(
        x=[user_indices, place_indices],
        y=interactions,
        batch_size=batch_size,
        epochs=epochs,
        validation_split=0.2
    )

    model.save('ncf_model.keras')

# Generate Recommendations
def recommend(input_features, model, place_data, k=20):
    input_dict = {
        'tags': tf.convert_to_tensor([input_features['tags']], dtype=tf.int32),
        'rating': tf.convert_to_tensor([input_features['rating']], dtype=tf.float32)
    }
    
    query_embedding = model.predict(input_dict)
    location_embeddings = model.predict({
        'tags': pad_sequences(place_data['tags'], padding='post'),
        'rating': place_data['rating'].values
    })
    
    similarities = cosine_similarity(query_embedding, location_embeddings)
    top_k_indices = similarities[0].argsort()[-k:][::-1]
    
    return top_k_indices

def ncf_recommend(user_id, model, place_data, user_id_to_index, k=10):
    if user_id not in user_id_to_index:
        raise KeyError(f"User ID {user_id} not found in user_id_to_index.")
    
    user_index = user_id_to_index[user_id]
    place_indices = np.arange(len(place_data))
    user_indices = np.full(len(place_data), user_index)
    
    scores = model.predict([user_indices, place_indices]).flatten()
    top_k_indices = scores.argsort()[-k:][::-1]
    top_k_places = place_data.iloc[top_k_indices]
    
    return top_k_places

def weighted_hybrid_recommend(input_features, user_id, content_model, cf_model, place_data, user_id_to_index, cb_weight=0.5, cf_weight=0.5, k=10, food_tags=[13,14,15,16]):
    # Get content-based recommendations
    cb_recommendations = recommend(input_features, content_model, place_data, k)
    
    # Get collaborative filtering recommendations
    try:
        cf_recommendations = ncf_recommend(user_id, cf_model, place_data, user_id_to_index, k)
        cf_scores = cf_model.predict([np.full((len(place_data),), user_id_to_index[user_id]), place_data.index.values])
        cf_scores = cf_scores.flatten()
    except KeyError:
        cf_recommendations = pd.DataFrame()
        cf_scores = np.zeros(len(place_data))

    # Combine and mark the recommendations
    all_recommendations = pd.concat([place_data.iloc[cb_recommendations], cf_recommendations])
    all_recommendations['source'] = ['content-based'] * len(cb_recommendations) + ['collaborative-filtering'] * len(cf_recommendations)

    if 'place_id' not in all_recommendations.columns:
        all_recommendations['place_id'] = all_recommendations['name'].apply(lambda name: place_data.loc[place_data['name'] == name, 'place_id'].iloc[0])

    all_recommendations = all_recommendations.drop_duplicates('place_id')

    # Normalize the scores
    scaler = MinMaxScaler()
    cb_recommendations = all_recommendations.index[all_recommendations['source'] == 'content-based']
    cf_recommendations = all_recommendations.index[all_recommendations['source'] == 'collaborative-filtering']

    all_recommendations['score'] = scaler.fit_transform(
        np.concatenate([
            cosine_similarity(content_model.predict({
                'tags': tf.convert_to_tensor([input_features['tags']], dtype=tf.int32),
                'rating': tf.convert_to_tensor([input_features['rating']], dtype=tf.float32)
            }), content_model.predict({
                'tags': pad_sequences([place_data.iloc[idx]['tags']], padding='post'),
                'rating': np.array([place_data.iloc[idx]['rating']])
            }))[0].reshape(-1, 1) for idx in cb_recommendations
        ] + [cf_scores[cf_recommendations].reshape(-1, 1)])
    )

    # Calculate the weighted scores
    all_recommendations['weighted_score'] = all_recommendations.apply(
        lambda row: row['score'] * cb_weight if row['source'] == 'content-based' else row['score'] * cf_weight,
        axis=1
    )

    # Sort and limit to top k recommendations
    top_recommendations = all_recommendations.sort_values('weighted_score', ascending=False).drop_duplicates('place_id').head(k)

    # Limit food-tagged places to a maximum of 3
    food_mask = top_recommendations['tags'].apply(lambda tags: any(tag in food_tags for tag in tags))
    food_places = top_recommendations[food_mask].head(3)
    non_food_places = top_recommendations[~food_mask]

    final_recommendations = pd.concat([non_food_places, food_places])

    # Ensure the final recommendations list has exactly 10 places
    if len(final_recommendations) < k:
        remaining_slots = k - len(final_recommendations)
        additional_non_food_places = all_recommendations[~all_recommendations.index.isin(final_recommendations.index) & ~all_recommendations['tags'].apply(lambda tags: any(tag in food_tags for tag in tags))].head(remaining_slots)
        final_recommendations = pd.concat([final_recommendations, additional_non_food_places])
    
    return final_recommendations.head(k)

# Main script
if __name__ == "__main__":
    # # Preprocess data
    whole_data, unique_tags = preprocess_data('data/whole_data_cleaned.xlsx')
    
    # # Create and train triplet model
    # triplet_model = create_triplet_model(unique_tags)
    # anchor_features, positive_features, negative_features = generate_triplets(whole_data)
    # train_triplet_model(triplet_model, anchor_features, positive_features, negative_features)
    
    # Load user data
    user_data = pd.read_excel('data/generated_user_data.xlsx')
    
    # Preprocess user_data
    user_data['user_id'] = user_data.index
    unique_user_ids = user_data['user_id'].unique()
    unique_place_ids = user_data['place_id'].unique()
    user_id_to_index = {user_id: index for index, user_id in enumerate(unique_user_ids)}
    place_id_to_index = {place_id: index for index, place_id in enumerate(unique_place_ids)}
    user_data['user_index'] = user_data['user_id'].map(user_id_to_index)
    user_data['place_index'] = user_data['place_id'].map(place_id_to_index)
    
    num_users = user_data['user_index'].nunique()
    num_places = user_data['place_index'].nunique()
    
    # # Create and train NCF model
    # ncf_model = create_ncf_model(num_users, num_places)
    # train_ncf_model(ncf_model, user_data)
    
    # Load trained models
    triplet_model = load_model('triplet_model.keras', custom_objects={'triplet_loss': triplet_loss})
    ncf_model = load_model('ncf_model.keras')
    
    # Example usage
    input_features = {
        'tags': [1,2,3,5,6,7,9,10,11,12,13,14],
        'rating': 4.5
    }
    user_id = 100  # Replace with actual user_id

    recommended_items = weighted_hybrid_recommend(input_features, user_id, triplet_model, ncf_model, whole_data, user_id_to_index, cb_weight=0.75, cf_weight=0.2, k=10)
    print(recommended_items)
