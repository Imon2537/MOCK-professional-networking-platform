"""updated code

Revision ID: b0f85b8229f7
Revises: 9ce1d5933e72
Create Date: 2024-10-15 10:42:07.711040

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b0f85b8229f7'
down_revision = '9ce1d5933e72'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('hourlogs', schema=None) as batch_op:
        batch_op.add_column(sa.Column('volunteer_id', sa.Integer(), nullable=False))
        batch_op.drop_constraint('fk_hourlogs_user_id_volunteers', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_hourlogs_volunteer_id_volunteers'), 'volunteers', ['volunteer_id'], ['id'])
        batch_op.drop_column('user_id')

    with op.batch_alter_table('job_applications', schema=None) as batch_op:
        batch_op.add_column(sa.Column('volunteer_id', sa.Integer(), nullable=False))
        batch_op.drop_constraint('fk_job_applications_user_id_volunteers', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_job_applications_volunteer_id_volunteers'), 'volunteers', ['volunteer_id'], ['id'])
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('job_applications', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.INTEGER(), nullable=False))
        batch_op.drop_constraint(batch_op.f('fk_job_applications_volunteer_id_volunteers'), type_='foreignkey')
        batch_op.create_foreign_key('fk_job_applications_user_id_volunteers', 'volunteers', ['user_id'], ['id'])
        batch_op.drop_column('volunteer_id')

    with op.batch_alter_table('hourlogs', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.INTEGER(), nullable=False))
        batch_op.drop_constraint(batch_op.f('fk_hourlogs_volunteer_id_volunteers'), type_='foreignkey')
        batch_op.create_foreign_key('fk_hourlogs_user_id_volunteers', 'volunteers', ['user_id'], ['id'])
        batch_op.drop_column('volunteer_id')

    # ### end Alembic commands ###
