"""empty message

Revision ID: c08c66ddd61d
Revises: 
Create Date: 2021-03-11 18:14:15.368937

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c08c66ddd61d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('certificate',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('role',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('business',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comercial_name', sa.String(length=80), nullable=False),
    sa.Column('tax_name', sa.String(length=80), nullable=False),
    sa.Column('address', sa.String(length=80), nullable=False),
    sa.Column('city', sa.String(length=80), nullable=False),
    sa.Column('region', sa.String(length=80), nullable=False),
    sa.Column('zip_code', sa.String(length=80), nullable=False),
    sa.Column('description', sa.String(length=400), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('designation',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('role_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['role.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('business_certificate',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=True),
    sa.Column('certificate_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['business.id'], ),
    sa.ForeignKeyConstraint(['certificate_id'], ['certificate.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_name', sa.String(length=120), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('size', sa.String(length=6), nullable=False),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['business_id'], ['business.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('product_name')
    )
    op.create_table('product_category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['category.id'], ),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('product_category')
    op.drop_table('product')
    op.drop_table('business_certificate')
    op.drop_table('designation')
    op.drop_table('business')
    op.drop_table('users')
    op.drop_table('role')
    op.drop_table('certificate')
    op.drop_table('category')
    # ### end Alembic commands ###
