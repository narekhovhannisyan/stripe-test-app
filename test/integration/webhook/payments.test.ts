jest.setTimeout(1000 * 60 * 30)
import Bluebird from 'bluebird'

import { createSubscription } from '../../../src/libs/stripe.lib'
import { SubscriptionsModel } from '../../../src/models'

describe('Payments Webhook: ', () => {
  describe('./payments', () => {
    it('should be registered in database', () => {
      const customerId = 'cus_NJtBC3gxD4PpIY' // set correct one from stripe
      const subscriptionItemIds = [{
        price: 'price_1MZFOoDPtfpko4MFwT84dyNg' // set correct one from stripe
      }]
      const email = 'valid@mockmail.com' // mail should be attached to stripe user

      const expectedPrice = 1500

      return createSubscription(customerId, subscriptionItemIds)
        .then(() => Bluebird.delay(4000))
        .then(() => SubscriptionsModel.getByEmail(email))
        .then((response) => {
          const data = response[response.length - 1] // least added data

          expect(data.customerEmail).toBe(email)
          expect(data.subscriptionPlanPrice).toBe(expectedPrice)
        })
        .catch(console.error)
    })
  })
})
