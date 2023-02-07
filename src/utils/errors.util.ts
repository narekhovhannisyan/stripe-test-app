interface CustomErrors {
  'DatabaseQueryError': ErrorConstructor
  'InputValidationError': ErrorConstructor
  'NoPermissionError': ErrorConstructor
  'PathNotFoundError': ErrorConstructor
  'ProcessEnvVariableError': ErrorConstructor
  'ResourceNotFoundError': ErrorConstructor
  'UnauthorizedError': ErrorConstructor
  'UserNotFoundError': ErrorConstructor
}

const CUSTOM_ERRORS = [
  'DatabaseQueryError',
  'InputValidationError',
  'NoPermissionError',
  'PathNotFoundError',
  'ProcessEnvVariableError',
  'ResourceNotFoundError',
  'UnauthorizedError',
  'UserNotFoundError'
]

export const ERRORS = CUSTOM_ERRORS.reduce((acc, className) => {
  acc = {
    ...acc,
    [className]: class extends Error {
      constructor (message: string) {
        super(message)
        this.name = this.constructor.name
      }
    }
  }

  return acc
}, {}) as CustomErrors
