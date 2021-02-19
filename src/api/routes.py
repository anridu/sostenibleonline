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

<<<<<<< HEAD
    return jsonify(all_products), 
    
@api.route('/products', methods=['POST'])
def post_products():
    body=request.get_json()

    new_product = Product(product_name=['body'])
    
    return jsonify(all_products), 
    
=======
    return jsonify(all_products), 200

@api.route('/products', methods=['POST'])
def post_products():
    body = request.get_json()

    new_product = Product(product_name=body['productName'], web=body['web'], quantity=body['quantity'], size=body['size'])
    
    print(new_product)
    db.session.add(new_product)
    db.session.commit()

    return jsonify("Hola"), 200

# @api.route('/product/<int:id>', methods=['DELETE'])
# def delete_products(id):
#     body = request.get_json(id)

#     product = Product.query.get(id)
#     print(product)

#     db.session.delete(product)
#     db.session.commit()

#     return jsonify("Borrado"), 200
>>>>>>> 1a675c17e81605b51fda502d767e5a441a1e190e
