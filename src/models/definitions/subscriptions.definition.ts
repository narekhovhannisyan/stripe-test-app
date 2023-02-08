import { DataTypes, ModelDefined } from 'sequelize'

import { SequelizeClient } from '../../storages'

import { SubscriptionsAttributes, SubscriptionsCreationAttributes } from '../../typings/models/subscriptions'

export const Subscriptions: ModelDefined<SubscriptionsAttributes, SubscriptionsCreationAttributes>= SequelizeClient.define(
  'subscriptions',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    customerEmail: {
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
    tableName: 'subscriptions',
    timestamps: false,
    underscored: true
  }
)
