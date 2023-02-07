import { Request, Response } from 'express'

/**
 * Gets the signature sent by Stripe, then handles events send back from stripe.
 * Based on event type, appropriate handler is called.
 */
export const stripeWebhook = (request: Request, response: Response) => {
  // const event = request.body

  response.send()
}
