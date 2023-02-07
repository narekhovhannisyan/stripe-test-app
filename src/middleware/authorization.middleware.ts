import { NextFunction, Request, Response } from 'express'

import { constructEvent } from '../libs/stripe.lib'

import CONFIG from '../config'

const { STRIPE } = CONFIG
const { WEBHOOK_SECRET } = STRIPE

/**
 * Checks stripe webhook signature.
 */
export const authorizeStripeWebhook = (request: Request, response: Response, next: NextFunction) => {
  if (WEBHOOK_SECRET) {
    try {
      request.body = constructEvent({
        body: request.body,
        signature: request.headers['stripe-signature'] as string,
        endpointSecret: WEBHOOK_SECRET
      })

      return next()
    } catch (error) {
      return response.sendStatus(400)
    }
  }
}
