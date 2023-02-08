import express from 'express'

import SubscriptionRoutes from './routes/subscriptions.route'

const app = express()

app.use('/subscriptions', SubscriptionRoutes)

export default app
