import Stripe from 'stripe'

import { ConnectionLogger } from '../utils/connection-logger.util'

import CONFIG from '../config'

import {
  ConstructEventParams
} from '../typings/libs/stripe'

const { STRIPE, SERVICES } = CONFIG
const {
  SECRET_KEY,
  API_VERSION
} = STRIPE

const stripe = new Stripe(SECRET_KEY, {
  apiVersion: API_VERSION,
  typescript: true
})

const logger = ConnectionLogger(SERVICES.STRIPE)

/**
 * Check Stripe connection.
 */
stripe.accounts.list()
  .then(logger.logConnectionSuccess)
  .catch(logger.logConnectionFailure)

/**
 * Constructs event based on `body`, `signature` and `endpointSecret`.
 */
export const constructEvent = (params: ConstructEventParams) => {
  const { body, signature, endpointSecret } = params

  return stripe.webhooks.constructEvent(
    body,
    signature,
    endpointSecret
  )
}

/**
 * Get customer information based on `id`.
 */
export const getCustomerData = (id: string) => stripe.customers.retrieve(id)
