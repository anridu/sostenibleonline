from api.models import db, User, Product, Business, BusinessCertificate, Category, ProductCategory, Role, Designation

class RoleSeedData:
  def seed(self):
    roles = ['admin', 'store_manager','client']
    for r in roles:
      new_role = Role(name=r)
      db.session.add(new_role)
      db.session.commit()

class CategorySeedData:
  def seed(self):
    categories = ['Sin categoria','Hombre', 'Mujer', 'Unisex']
    for category in categories:
      new_cat = Category(name=category)
      db.session.add(new_cat)
      db.session.commit()

class CertificateSeedData:
  pass
  


  