import { Request, Response } from 'express'

import { SubscriptionsModel } from '../../models'

import CONFIG from '../../config'

const { STRIPE } = CONFIG
const { WEBHOOK_STATUSES } = STRIPE
const { SUBSCRIPTION_CREATED } = WEBHOOK_STATUSES

/**
 * Gets the signature sent by Stripe, then handles events send back from stripe.
 * Based on event type, appropriate handler is called.
 */
export const stripeWebhook = (request: Request, response: Response) => {
  const event = request.body

  event.data.object.customer_email

  if (event.type === SUBSCRIPTION_CREATED) {
    const { customer_email, plan } = event.data.object
    const { amount, nickname } = plan

    SubscriptionsModel.create({
      email: customer_email,
      subscriptionPlanName: nickname,
      subscriptionPlanPrice: amount
    })
      .catch(console.error)
  }

  response.send()
}
