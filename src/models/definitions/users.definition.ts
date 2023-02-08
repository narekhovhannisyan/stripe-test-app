import { DataTypes, ModelDefined } from 'sequelize'

import { SequelizeClient } from '../../storages'

import { UsersAttributes, UsersCreationAttributes } from '../../typings/models/users'

export const Users: ModelDefined<UsersAttributes, UsersCreationAttributes>= SequelizeClient.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subscriptionPlanName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subscriptionPlanPrice: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'users',
    underscored: true
  }
)
