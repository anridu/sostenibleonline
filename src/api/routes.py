"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, Business, BusinessCertificate, Category, ProductCategory, Role, Designation
from api.seed_data import RoleSeedData, CategorySeedData
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

########################### SEED DATA - START ###########################################
@api.route("/seed_data", methods=["GET"])
def create_seed_data():
  RoleSeedData().seed()
  CategorySeedData().seed()

  return jsonify("Seed data executed"), 200

########################### SEED DATA - END ###########################################

########################### LOGIN RELATED ###########################################

@api.route("/sign_up", methods=["POST"])
def sign_up():

    body = request.get_json()
    hashed_password = generate_password_hash(body['password'], method='sha256')
    new_user = User(name=body['name'], last_name=body['last_name'], email=body['email'], password=hashed_password)
    
    print(new_user)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.serialize()), 200


@api.route("/sign_in", methods=["POST"])
def sign_in():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).one_or_none()
    if not user or not check_password_hash(user.password, password):
        return jsonify("Wrong email or password"), 401

    # Notice that we are passing in the actual sqlalchemy user object here
    access_token = create_access_token(identity=user.sign_in_serialize())       
    return jsonify(access_token= access_token, is_owner= user.is_owner())

@api.route("/me", methods=["GET"])
@jwt_required()
def protected():
    return jsonify(current_user(get_jwt_identity()).serialize())

@api.route("/me/get_business", methods=["GET"])
@jwt_required()
def get_business():
    user = get_jwt_identity()
    business = Business.get_business_by_user_id(user["id"])   
    return jsonify(list(map(lambda x: x.serialize(), business)))


######################################################################################    

@api.route('/users', methods=['GET'])
def handle_users():

    users = User.query.all()
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

@api.route('/products/<int:id>', methods=['GET'])
def handle_product(id):

    product = Product.query.get(id)
    if not product: 
        return jsonify ("product not found"), 404
    return jsonify(product.serialize()), 200

@api.route('/products/<int:id>', methods=['PUT'])
def modify_product(id):

    body = request.get_json()
    product = Product.query.get(id)
    if not product: 
        return jsonify ("Product not found"), 404
    product.product_name = body['product_name']
    db.session.commit()

    return jsonify(product.serialize()), 200

@api.route('/products', methods=['POST'])
def post_products():
    body = request.get_json()
    print(body)
    category = Category.query.filter_by(name=body["category"]).first()
    new_product = Product(product_name=body['productName'], quantity=body['quantity'], size=body['size'], description=body['description'], 
    price=body['price'], color=body['color'], business_id=body['business_id']
    )
    
    
    db.session.add(new_product)
    db.session.commit()
    db.session.flush()
    print(category)
    
    product_category = ProductCategory(product_id=new_product.id, category_id=category.id)

    db.session.add(product_category)
    db.session.commit()

    return jsonify(new_product.serialize()), 200




@api.route('/businesses', methods=['GET'])
def handle_businesses():

    businesses = Business.get_all_businesses()
    all_businesses = list(map(lambda business: business.serialize(), businesses))

    return jsonify(all_businesses), 200

@api.route('/businesses/<int:id>', methods=['GET'])
def handle_business(id):

    business = Business.query.get(id)
    if not business: 
        return jsonify ("Business not found"), 404
    return jsonify(business.serialize()), 200

@api.route('/businesses/<int:id>', methods=['PUT'])
def modify_business(id):

    body = request.get_json()
    business = Business.query.get(id)
    if not business: 
        return jsonify ("Product not found"), 404
    business.name = body['name']
    db.session.commit()

    return jsonify(business.serialize()), 200

@api.route('/businesses', methods=['POST'])
def post_businesses():
    body = request.get_json()
    hashed_password = generate_password_hash(body['password'], method='sha256')
    new_user = User(name=body['name'], last_name=body['last_name'], email=body['email'], password=hashed_password)
    
    
    db.session.add(new_user)
    db.session.commit()

    new_business = Business(comercial_name=body['comercial_name'], tax_name=body['tax_name'], address=body['address'], city=body['city'], region=body['region'], zip_code=body['zip_code'],description=body['description'],user_id=new_user.id)
    
   
    db.session.add(new_business)
    db.session.commit()
    print(new_business)
    return jsonify(new_business.serialize()), 200





@api.route('/categories', methods=['GET'])
def handle_categories():

    categories = Category.get_all_categories()
    all_categories = list(map(lambda category: category.serialize(), categories))

    return jsonify(all_categories), 200

@api.route('/categories/<int:id>', methods=['GET'])
def handle_category(id):

    category = Category.query.get(id)
    if not category: 
        return jsonify ("Category not found"), 404
    return jsonify(category.serialize()), 200

@api.route('/categories/<int:id>', methods=['PUT'])
def modify_category(id):

    body = request.get_json()
    category = Category.query.get(id)
    if not category: 
        return jsonify ("Category not found"), 404
    category.name = body['name']
    db.session.commit()

    return jsonify(category.serialize()), 200

@api.route('/categories', methods=['POST'])
def post_categories():
    body = request.get_json()

    new_category = Category(name=body['name'])
    
    print(new_category)
    db.session.add(new_category)
    db.session.commit()

    return jsonify(new_category.serialize()), 200


def current_user(identity):
  return User.query.filter_by(email=identity['email']).one_or_none()