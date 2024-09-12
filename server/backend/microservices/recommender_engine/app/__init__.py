from flask import Flask

from app.configs.extensions import api

from app.routes.generate_trip import ns as generate_trip_ns
from app.routes.interact import ns as interact_ns

def create_app():
    app = Flask(__name__)
 
    api.add_namespace(generate_trip_ns)
    api.add_namespace(interact_ns)

    api.init_app(app)

    return app
