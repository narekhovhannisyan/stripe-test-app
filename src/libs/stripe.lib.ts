import Bluebird from 'bluebird'
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

/**
 * Creates subscription for given `customer`.
 */
export const createSubscription = (customerId: string, items: any[]) => stripe.subscriptions.create({ customer: customerId, items })

/**
 * Gets from string Date format, then converts to seconds.
 */
const getEpochSecondsFromDate = (date: string) => {
  const dateFormat = new Date(date)

  return Math.floor(dateFormat.getTime() / 1000)
}

/**
 * Gets invoices between `dateStart` and `dateEnd`.
 */
const getInvoices = (dateStart: string, dateEnd: string) => {
  const startInSeconds = getEpochSecondsFromDate(dateStart)
  const endInSeconds = getEpochSecondsFromDate(dateEnd)
  const query = `created>=${startInSeconds} AND created<=${endInSeconds}`

  return stripe.invoices.search({ query })
}

/**
 * Pays invoice with given id.
 */
const payInvoice = (id: string) => stripe.invoices.pay(id)

/**
 * Pays `invoices` from given array.
 */
const payInvoices = (invoices: string[]) => Bluebird.map(invoices, payInvoice)

/**
 * Pays invoices from `dateStart` to `dateEnd`.
 */
export const payInvoicesFrom = (dateStart: string, dateEnd: string) => getInvoices(dateStart, dateEnd)
  .then((response) => {
    const invoiceIds = response.data
      .filter((invoice) => invoice.status === 'open')
      .map((invoice) => invoice.id)

    return payInvoices(invoiceIds)
  })
