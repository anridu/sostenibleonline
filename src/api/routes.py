"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Business, BusinessCertificate, Category, ProductCategory, Role, Designation
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def handle_users():

    users = User.get_all_users()
    all_users = list(map(lambda user: user.serialize(), users))

    return jsonify(all_users), 200

@api.route('/users/<int:id>', methods=['GET'])
def handle_user(id):

    user = User.query.get(id)
    if not user: 
        return jsonify ("user not found"), 404
    return jsonify(user.serialize()), 200

@api.route('/users', methods=['POST'])
def post_users():
    body = request.get_json()

    new_user = User(email=body['email'], password=body['password'], is_active=body['is_active'])
    
    print(new_user)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.serialize()), 200

@api.route('/users/<int:id>', methods=['PUT'])
def modify_user(id):


    body = request.get_json()
    user = User.query.get(id)
    if not user: 
        return jsonify ("user not found"), 404
    user.email = body['email']
    db.session.commit()

    return jsonify(user.serialize()), 200


@api.route('/products', methods=['GET'])
def handle_products():

    products = Product.get_all_products()
    all_products = list(map(lambda product: product.serialize(), products))

    return jsonify(all_products), 200

@api.route('/products', methods=['POST'])
def post_products():
    body = request.get_json()

    new_product = Product(product_name=body['productName'], web=body['web'], quantity=body['quantity'], size=body['size'])
    
    print(new_product)
    db.session.add(new_product)
    db.session.commit()

    return jsonify("Hola"), 200