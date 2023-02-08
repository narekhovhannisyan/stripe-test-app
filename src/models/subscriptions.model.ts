import { Subscriptions } from './definitions'

import { CreateRecordParams } from '../typings/models/subscriptions'

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

  return Subscriptions.findAll(withCriteria)
    .then((responses) => responses.map((response) => response.get()))
}
