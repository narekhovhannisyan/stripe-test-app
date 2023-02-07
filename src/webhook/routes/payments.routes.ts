import express, { Router } from 'express'

import * as PaymentsService from '../services/payments.service'

import { AuthorizationMiddleware } from '../../middleware'

const router = Router()

/**
 * Initalize Express raw for Stripe Webhook.
 * Stripe event constructor needs raw request.
 */
router.use(express.raw({ type: 'application/json' }))

router.post('/',
  AuthorizationMiddleware.authorizeStripeWebhook,
  PaymentsService.stripeWebhook
)

export default router
