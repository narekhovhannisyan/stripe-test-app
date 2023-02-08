import { Request } from 'express'

export interface GetSubscriptionByEmailRequest extends Request {
  query: {
    email: string
  }
}
