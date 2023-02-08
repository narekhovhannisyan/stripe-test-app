import { Optional } from 'sequelize/types'

export interface UsersAttributes {
  id: number,
  email: string,
  subscriptionPlanName: string,
  subscriptionPlanPrice: number
}

type UserOptionalColumns = 'id' | 'email' | 'subscriptionPlanName' | 'subscriptionPlanPrice'

export type UsersCreationAttributes = Optional<UsersAttributes, UserOptionalColumns>
