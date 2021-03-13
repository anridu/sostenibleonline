"""empty message

Revision ID: 8e428361b049
Revises: c879b53d068f
Create Date: 2021-03-13 18:32:59.444109

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8e428361b049'
down_revision = 'c879b53d068f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('category', sa.String(length=80), nullable=False))
    op.drop_column('product', 'short_description')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('product', sa.Column('short_description', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
    op.drop_column('product', 'category')
    # ### end Alembic commands ###
