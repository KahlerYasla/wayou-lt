from multiprocessing.managers import BaseManager

import tensorflow as tf
from keras._tf_keras.keras.models import Model, load_model

from multiprocessing import Lock

from app.utils.logger import Logger


# Triplet Loss
def triplet_loss(anchor, positive, negative, margin=1.0):
    positive_distance = tf.reduce_sum(tf.square(anchor - positive), axis=-1)
    negative_distance = tf.reduce_sum(tf.square(anchor - negative), axis=-1)
    loss = tf.maximum(positive_distance - negative_distance + margin, 0.0)
    return tf.reduce_mean(loss)


class TripletModel():
    def __init__(self):
        self.mutex = Lock()
        self.model = Model


    def load(self):
        """Initialize our model by loading it from disk."""
        self.model = load_model('./app/engines/models/triplet_model.keras', custom_objects={'triplet_loss': triplet_loss})
        global triplet_graph
        triplet_graph = tf.compat.v1.get_default_graph()
        Logger._("Triplet model loaded successfully", "g")


    def predict(self, arr):
        """Predict the embeddings for the given input."""
        with self.mutex:
            with triplet_graph.as_default():
                if self.model is None:
                    self.load()
                Logger._(f"Predicting for {arr}")
                return self.model.predict(arr)
        

    def summary(self):
        """Print a summary of the model."""
        with self.mutex:
            if self.model is None:
                self.load()
            return self.model.summary()
        


class TripletManager(BaseManager):
    pass

TripletManager.register('TripletModel', TripletModel)