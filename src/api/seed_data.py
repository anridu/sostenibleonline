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
    categories = ['Hombre', 'Mujer', 'Unisex','']
    for category in categories:
      new_cat = Category(name=category)
      db.session.add(new_cat)
      db.session.commit()

class UserSeedData :
  def seed(self):
    name_user = ['Pepe', 'Juan']
    last_nameu = ['riv','dur']
    emailu=['ho@gmail.com', 'ho2@gmail.com']
    paswordu=['1234','1234']
    for x in range(2): 
      new_user = User(name=name_user[x], last_name=last_nameu[x], email=emailu[x] , password=paswordu[x])
     
      db.session.add(new_user)
      db.session.commit()

class BusinessSeedData :
  def seed(self):
    comercial_name = ['La tienda verde', 'Ropa sostenible 100%', 'EcoRopa']
    tax_name = ['tienda verde','ropa sostenible', 'ecoropa']
    address=['Calle Panamá, 24', 'Calle Pedraforca, 360', 'Calle Menorca, 455']
    city=['Barcelona','Madrid', 'Valencia']
    region=['Cataluña','Valencia', 'Andalucía']
    zip_code=['08523', '08080', '42052']
    description=['tienda pensada toda en verde', 'Ropa totalmente sostenible para hacer de este planeta un mundo mejor', 'Tienda de ropa de gran calidad, realizada de forma artesanal y con productos eco']

    for x in range(3): 
      new_business = Business(comercial_name=commercial_name[x], tax_name=tax_name[x], address=address[x], city=city[x], region=region[x], zip_code=zip_code[x], description=description[x])
     
      db.session.add(new_business)
      db.session.commit()
  

class ProductSeedData :
  def seed(self):
    product_name = ['Pantalón', 'Camisa', 'Chaqueta']
    quantity = ['2','3', '4']
    size=['L', 'M','S']
    description=['Pantalón vaquero','Último modelo de la temporada', 'Chaqueta de invierno']
    price=['45','25','30']
    color=['azul','blanca','verde']    
    image_url=['https://res.cloudinary.com/dzcttkqga/image/upload/v1617040915/knyvylgwy9b5wvfu82r9.jpg','https://res.cloudinary.com/dzcttkqga/image/upload/v1617040915/knyvylgwy9b5wvfu82r9.jpg','https://res.cloudinary.com/dzcttkqga/image/upload/v1617040915/knyvylgwy9b5wvfu82r9.jpg']
    

    for x in range(2): 
      new_user = User(name=product_name[x], quantity=quantity[x], size=size[x] , description=description[x],price=price[x], color=color[x])
     
      db.session.add(new_user)
      db.session.commit()

class CertificateSeedData:
  pass
  


  