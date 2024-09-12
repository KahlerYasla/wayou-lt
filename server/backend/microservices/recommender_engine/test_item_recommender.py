# ./test_item_recommender.py

from threading import Thread

# app packages
from app.engines.item_recommender_engine import recommend_places
from app.engines.models.ncf_model import NCFManager
from app.engines.models.triplet_model import TripletManager

# utils
from app.utils.logger import Logger

ncf_graph = None
triplet_graph = None

def main():
    # Load the NCF and Triplet models
    NCFManager_instance = NCFManager()
    NCFManager_instance.start()
    ncf_model = NCFManager_instance.NCFModel()
    ncf_model.load()

    TripletManager_instance = TripletManager()
    TripletManager_instance.start()      
    triplet_model = TripletManager_instance.TripletModel()
    triplet_model.load()

    user_id = 100
    Logger._(f"User ID: {user_id}")

    recommend_places(user_id, ncf_model, triplet_model)

if __name__ == '__main__':
    import multiprocessing
    multiprocessing.freeze_support()
    main()
