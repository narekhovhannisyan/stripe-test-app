import { NextFunction, Response } from 'express'

import { SubscriptionsModel } from '../../../models'

import { handleGet } from '../../../utils/response-handler.util'

import { GetSubscriptionByEmailRequest } from '../../../typings/api/subscriptions'

/**
 * Gets subscription details by given email.
 */
export const getSubscriptionByEmail = (request: GetSubscriptionByEmailRequest, response: Response, next: NextFunction) => {
  const { email } = request.query

  SubscriptionsModel.getByEmail(email)
    .then(handleGet(response))
    .catch(next)
}
