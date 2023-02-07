export default {
  MODE: process.env.MODE || 'development',
  PORT: process.env.PORT && parseInt(process.env.PORT) || 3010,
  REQUIRED_VARIABLES: [],
  RETRY_AFTER_HEADER: process.env.RETRY_AFTER_HEADER || 2 * 60 * 60,
  STRIPE: {
    PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY || '',
    SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
    WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',
    API_VERSION: '2022-11-15' as const
  },
  SERVICES: {
    STRIPE: 'Stripe',
    SEQUELIZE: 'Sequelize'
  }
}
