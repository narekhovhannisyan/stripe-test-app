import { Router } from 'express'

import * as SubscriptionsService from '../services/subscriptions.service'

import { SubscriptionsValidationMiddleware } from '../../../middleware'

const router = Router()

router.get('/',
  SubscriptionsValidationMiddleware.validateGetUserArgs,
  SubscriptionsService.getSubscriptionByEmail
)

export default router
