# app/engines/models/ncf_model.py

import tensorflow as tf
from keras._tf_keras.keras.models import Model, load_model

from multiprocessing import Lock

from app.utils.logger import Logger

from multiprocessing.managers import BaseManager


class NCFModel():
    def __init__(self):
        self.mutex = Lock()
        self.model = Model


    def load(self):
        """Initialize our model by loading it from disk."""
        self.model = load_model('./app/engines/models/ncf_model.keras')
        global ncf_graph
        ncf_graph = tf.compat.v1.get_default_graph()
        Logger._("NCF model loaded successfully", "g")


    def predict(self, arr):
        """Predict the embeddings for the given input."""
        with self.mutex:
            with ncf_graph.as_default():
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
        

class NCFManager(BaseManager):
    pass

NCFManager.register('NCFModel', NCFModel)