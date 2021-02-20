"""empty message

Revision ID: 8efc8f7dc6bd
Revises: 
Create Date: 2021-02-18 21:20:02.353558

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8efc8f7dc6bd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_name', sa.String(length=120), nullable=False),
    sa.Column('web', sa.String(length=80), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('size', sa.String(length=6), nullable=False),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('check', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('product_name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('product')
    # ### end Alembic commands ###