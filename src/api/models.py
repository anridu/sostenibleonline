from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp

db = SQLAlchemy()

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    users = db.relationship("User", secondary="designation")

    def __repr__(self):
        return f'<Role {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
          }

class User(db.Model):
  __tablename__ = 'users'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(120), unique=False, nullable=False)
  last_name = db.Column(db.String(120), unique=False, nullable=False)
  email = db.Column(db.String(120), unique=True, nullable=False)
  password = db.Column(db.String(80), unique=False, nullable=False)
  is_active = db.Column(db.Boolean(), unique=False, nullable=False, default = True)
  
  roles = db.relationship("Role", secondary="designation")
  businesses = db.relationship('Business', backref='user', lazy=True)
  
  def __repr__(self):
      return '<User %r>' % self.email

  def serialize(self):
      return {
          "id": self.id,
          "name": self.name,
          "lastName": self.last_name,
          "email": self.email,
          "isActive": self.is_active,
          "business": list(map(lambda x: x.serialize(), self.businesses))
        #   "role": self.roles
          # do not serialize the password, its a security breach
      }  

  def sign_in_serialize(self):
      return {
          "id": self.id,
          "email": self.email,
          # do not serialize the password, its a security breach
      }


  def check_password(self, password_param):
    return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))

  def is_owner(self):      
      return True if self.businesses else False

class Designation(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
  role = db.relationship("Role")
  user = db.relationship("User")

class Business(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comercial_name = db.Column(db.String(80), nullable=False)
    tax_name = db.Column(db.String(80), nullable=False)
    address = db.Column(db.String(80), nullable=False)
    city = db.Column(db.String(80), nullable=False)
    region = db.Column(db.String(80), nullable=False)
    zip_code = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    products = db.relationship("Product")
    certificates = db.relationship("Certificate", secondary="business_certificate")

    def __repr__(self):
        # return f'<Business {self.name}>'
        return '<Business %r>' % self.tax_name
    def get_business_by_user_id(user_id):
        return Business.query.filter_by(user_id=user_id).all()

    def serialize(self):
        return {
              "id": self.id,
              "comercialName": self.comercial_name,
              "taxName": self.tax_name,
              "address": self.address,
              "city": self.city,
              "region": self.region,
              "zipCode": self.zip_code,
              "description": self.description,
              "userId": self.user_id
            }

    def get_all_businesses():
         return Business.query.all()


class BusinessCertificate(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  business_id = db.Column(db.Integer, db.ForeignKey('business.id'))
  certificate_id = db.Column(db.Integer, db.ForeignKey('certificate.id'))

  certificate = db.relationship("Certificate")
  business = db.relationship("Business")




class Certificate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)

    business = db.relationship("Business", secondary="business_certificate")

    def __repr__(self):
        return f'<Certificate {self.name}>'

    def serialize(self):
        return {
              "id": self.id,
              "name": self.name
            }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(120), unique=False, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    size = db.Column(db.String(6), unique=False, nullable=False)  
    description = db.Column(db.String, unique=False, nullable=True)    
    price = db.Column(db.Integer, unique=False, nullable=False)
    color = db.Column(db.String(20), unique=False, nullable=False)
    image_url = db.Column(db.String, unique=False, nullable=False)
    image_public_id = db.Column(db.String, unique=False, nullable=False)

    business_id = db.Column(db.Integer, db.ForeignKey('business.id'), nullable=True)
    business = db.relationship("Business")
    categories = db.relationship("Category", secondary="product_category")

    def __repr__(self):
        return '<Product %r>' % self.product_name

    def serialize(self):
        serialized_categories = []
        for category in self.categories:
            serialized_categories.append(category.serialize())
        # serialized_categories = []
        return {
            "id": self.id,
            "product_name": self.product_name,
            "quantity": self.quantity,
            "size": self.size,
            "description": self.description,
            "price": self.price,
            "color": self.color,
            "category": serialized_categories,
            "imageUrl": self.image_url
            # do not serialize the password, its a security breach
        }

    def get_all_products():
         return Product.query.all()

class ProductCategory(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
  category_id = db.Column(db.Integer, db.ForeignKey('category.id'))

  category = db.relationship("Category")
  product = db.relationship("Product")

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)

    products = db.relationship("Product", secondary="product_category")

    def __repr__(self):
        return f'<Category {self.name}>'

    def serialize(self):
        return {
              "id": self.id,
              "name": self.name
            }

    def get_all_categories():
         return Category.query.all()
