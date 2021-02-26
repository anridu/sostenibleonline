from flask_sqlalchemy import SQLAlchemy

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
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    roles = db.relationship("Role", secondary="designation")
    businesses = db.relationship('Business', backref='user', lazy=True)
<<<<<<< HEAD

    businesses = db.relationship('Business', backref='user', lazy=True)
    roles = db.relationship("Role", secondary="designation")
=======
>>>>>>> origin

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

<<<<<<< HEAD
    def get_all_users():
        return User.query.all()


=======
>>>>>>> origin
class Designation(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
  role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
<<<<<<< HEAD
  role = db.relationship("Role")
  user = db.relationship("User")
=======
>>>>>>> origin

class Business(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

<<<<<<< HEAD
    products = db.relationship("Product")
    certificates = db.relationship("Certificate", secondary="business_certificate")

=======
>>>>>>> origin
    def __repr__(self):
        return f'<Business {self.name}>'

    def serialize(self):
        return {
              "id": self.id,
              "name": self.name
<<<<<<< HEAD
            }

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
    product_name = db.Column(db.String(120), unique=True, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    size = db.Column(db.String(6), unique=False, nullable=False)  
    description = db.Column(db.String, unique=False, nullable=True)

    business_id = db.Column(db.Integer, db.ForeignKey('business.id'), nullable=False)
    business = db.relationship("Business")
    categories = db.relationship("Category", secondary="product_category")

    def __repr__(self):
        return '<Product %r>' % self.product_name

    def serialize(self):
        return {
            "id": self.id,
            "product_name": self.product_name,
            "quantity": self.quantity,
            "size": self.size,
            "description": self.description,
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

=======
            }
>>>>>>> origin
