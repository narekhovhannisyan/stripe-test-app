import { Optional } from 'sequelize/types'

export interface SubscriptionsAttributes {
  id: number,
  customerEmail: string,
  subscriptionPlanName: string,
  subscriptionPlanPrice: number
}

type SubscriptionsOptionalColumns = 'id' | 'customerEmail' | 'subscriptionPlanName' | 'subscriptionPlanPrice'

export type SubscriptionsCreationAttributes = Optional<SubscriptionsAttributes, SubscriptionsOptionalColumns>
