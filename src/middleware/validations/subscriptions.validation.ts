import Joi from '@hapi/joi'
import { Response, NextFunction } from 'express'

import { validate } from '../../utils/validation.util'

import CONFIG from '../../config'
import REGEX from '../../config/regex'

import {
  GetSubscriptionByEmailRequest
} from '../../typings/api/subscriptions'

const { VALIDATIONS } = CONFIG
const { DB_MAX_STRING_VALUE } = VALIDATIONS
const { EMAIL } = REGEX

export const validateGetUserArgs = (request: GetSubscriptionByEmailRequest, response: Response, next: NextFunction) => {
  validate(request, { query: request.query },
    Joi.object({
      query: {
        email: Joi.string().max(DB_MAX_STRING_VALUE).regex(EMAIL).required()
      }
    }),
    next
  )
}
