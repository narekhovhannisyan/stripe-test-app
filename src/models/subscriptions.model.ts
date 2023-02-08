import { Subscriptions } from './definitions'

type CreateRecordParams = {
  subscriptionPlanName: string,
  subscriptionPlanPrice: number,
  email: string
}

/**
 * Creates subscription record.
 */
export const create = (params: CreateRecordParams) => Subscriptions.create(params)

/**
 * Gets subscription by given `email` param.
 */
export const getByEmail = (email: string) => {
  const withCriteria = {
    where: { customerEmail: email }
  }

  return Subscriptions.findOne(withCriteria)
    .then((response) => response?.get())
}
