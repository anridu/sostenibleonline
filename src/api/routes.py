"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/products', methods=['GET'])
def handle_products():

    products = Product.get_all_products()
    all_products = list(map(lambda product: product.serialize(), products))

    return jsonify(all_products), 
    
@api.route('/products', methods=['POST'])
def post_products():
    body=request.get_json()

    new_product = Product(product_name=['body'])
    
    return jsonify(all_products), 
    