import axios from 'axios'

import CONFIG from '../../../src/config'

const { HOST } = CONFIG

const backendAPI = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/json'
  }
})

describe('Subscriptions API: ', () => {
  describe('GET ./subscriptions', () => {
    it(`should GET subscriptions in case of valid email.`, () => {
      const email = 'valid@mockmail.com'
      const resource = 'subscriptions'
      const path = `${resource}?email=${email}`

      const expectedStatusCode = 200
      const expectedMessage = 'OK'

      return backendAPI.get(path)
        .then((result) => {
          const response = result.data

          expect(response).toHaveProperty('status')
          expect(response).toHaveProperty('message')
          expect(response).toHaveProperty('data')

          expect(response.status).toBe(expectedStatusCode)
          expect(response.message).toBe(expectedMessage)
          expect(response.data instanceof Array).toBeTruthy()

          const item = response.data[0]

          if (item) {
            expect(item).toHaveProperty('id')
            expect(item).toHaveProperty('customerEmail')
            expect(item).toHaveProperty('subscriptionPlanName')
            expect(item).toHaveProperty('subscriptionPlanPrice')
          }
        })
        .catch(console.error)
    })

    it(`should GET empty array in case of invalid email.`, () => {
      const email = 'invalid@mockmail.com'
      const resource = 'subscriptions'
      const path = `${resource}?email=${email}`

      const expectedStatusCode = 200
      const expectedMessage = 'OK'
      const expectedData = [] as any[]

      return backendAPI.get(path)
        .then((result) => {
          const response = result.data

          expect(response).toHaveProperty('status')
          expect(response).toHaveProperty('message')
          expect(response).toHaveProperty('data')

          expect(response.status).toBe(expectedStatusCode)
          expect(response.message).toBe(expectedMessage)
          expect(response.data).toEqual(expectedData)
        })
        .catch(console.error)
    })
  })
})
