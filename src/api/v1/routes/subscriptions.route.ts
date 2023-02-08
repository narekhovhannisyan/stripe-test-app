import { Router } from 'express'

import * as SubscriptionsService from '../services/subscriptions.service'

const router = Router()

router.get('/',
  SubscriptionsService.getSubscriptionByEmail
)

export default router
