export default {
  MODE: process.env.MODE || 'development',
  PORT: process.env.PORT && parseInt(process.env.PORT) || 3010,
  REQUIRED_VARIABLES: [],
  RETRY_AFTER_HEADER: process.env.RETRY_AFTER_HEADER || 2 * 60 * 60
}
