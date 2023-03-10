export default {
  DATABASE_URL: process.env.DATABASE_URL || '',
  HOST: 'http://127.0.0.1:3010/api/v1',
  MODE: process.env.MODE || 'development',
  PORT: process.env.PORT && parseInt(process.env.PORT) || 3010,
  REQUIRED_VARIABLES: [
    'DATABASE_URL',
    'STRIPE_PUBLISHABLE_KEY',
    'STRIPE_SECRET_KEY',
    'STRIPE_WEBHOOK_SECRET'
  ],
  RETRY_AFTER_HEADER: process.env.RETRY_AFTER_HEADER || 2 * 60 * 60,
  STRIPE: {
    PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY || '',
    SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
    WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',
    API_VERSION: '2022-11-15' as const,
    WEBHOOK_STATUSES: {
      SUBSCRIPTION_CREATED: 'customer.subscription.created'
    }
  },
  SERVICES: {
    STRIPE: 'Stripe',
    SEQUELIZE: 'Sequelize'
  },
  VALIDATIONS: {
    DEFAULT_OPTIONS: {
      abortEarly: true,
      allowUnknown: false,
      convert: true
    },
    DB_MAX_INTEGER_VALUE: 21474836,
    DB_MAX_STRING_VALUE: 250,
    DB_MAX_TEXT_VALUE: 400
  }
}
