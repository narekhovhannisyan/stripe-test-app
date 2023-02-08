import { Options, Sequelize } from 'sequelize'

import CONFIG from '../config'

import { ConnectionLogger } from '../utils/connection-logger.util'

const { DATABASE_URL } = CONFIG

const SERVICE_NAME = 'Sequelize'
const logger = ConnectionLogger(SERVICE_NAME)

/**
 * Options for new Sequelize instance.
 */
const OPTIONS: Options = {
  logging: false,
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  }
}

export const SequelizeClient = new Sequelize(DATABASE_URL, OPTIONS)

SequelizeClient.sync()
SequelizeClient.authenticate(OPTIONS)
  .then(logger.logConnectionSuccess)
  .catch(logger.logConnectionFailure)
