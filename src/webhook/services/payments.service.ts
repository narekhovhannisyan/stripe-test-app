import { Request, Response } from 'express'

import { SubscriptionsModel } from '../../models'

import { getCustomerData } from '../../libs/stripe.lib'

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

  if (event.type === SUBSCRIPTION_CREATED) {
    const { customer, plan } = event.data.object
    const { amount, nickname } = plan // since there is no name parameter nickname was selected instead

    getCustomerData(customer)
      // @ts-ignore since wrong type declaration derrived from stripe
      .then((customerData) => customerData.email)
      .then((customerEmail) => SubscriptionsModel.create({
        customerEmail,
        subscriptionPlanName: nickname,
        subscriptionPlanPrice: amount
      }))
      .catch(console.error)
  }

  response.send()
}
