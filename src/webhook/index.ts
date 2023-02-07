import express from 'express'

import PaymentsWebhook from './routes/payments.routes'

const app = express()

app.use('/payments', PaymentsWebhook)

export default app
