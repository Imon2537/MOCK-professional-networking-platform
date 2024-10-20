"""removed organisations.contact_info

Revision ID: 2f7be77e740a
Revises: c788500dc1b1
Create Date: 2024-10-15 09:45:33.732003

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2f7be77e740a'
down_revision = 'c788500dc1b1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('jobs', schema=None) as batch_op:
        batch_op.drop_constraint('fk_jobs_organization_id_organizations', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_jobs_organization_id_organizations'), 'organizations', ['organization_id'], ['id'], ondelete='CASCADE')

    with op.batch_alter_table('organizations', schema=None) as batch_op:
        batch_op.drop_column('contact_info')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('organizations', schema=None) as batch_op:
        batch_op.add_column(sa.Column('contact_info', sa.VARCHAR(), nullable=True))

    with op.batch_alter_table('jobs', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_jobs_organization_id_organizations'), type_='foreignkey')
        batch_op.create_foreign_key('fk_jobs_organization_id_organizations', 'organizations', ['organization_id'], ['id'])

    # ### end Alembic commands ###
