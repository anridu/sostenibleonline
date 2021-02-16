from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
        

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(120), unique=True, nullable=False)
    web = db.Column(db.String(80), unique=False, nullable=False)
    quantity = db.Column(db.Integer, unique=False, nullable=False)
    size = db.Column(db.String(6), unique=False, nullable=False)  
    description = db.Column(db.String, unique=False, nullable=False)
    check = db.Column(db.Boolean(), unique=False, nullable=False)
     

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "product_name": self.product_name,
            "web": self.web,
            "quantity": self.quantity,
            "size": self.size,
            "description": self.description,
            "check": self.check,
            # do not serialize the password, its a security breach
        }

    def get_all_products():
        return Product.query.all()