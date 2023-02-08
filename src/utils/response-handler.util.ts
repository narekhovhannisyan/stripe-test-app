import { Response } from 'express'

const HTTP_CODE_CONSTANTS = {
  SUCCESS_200: { STATUS: 200, MESSAGE: 'OK' }
}

type StatusCode = {
  STATUS: number,
  MESSAGE: string
}

/**
 * Sends response with given HTTP code constant.
 */
const _sendResponse = (res: Response, code: StatusCode, data?: any) => {
  const response = {
    status: code.STATUS,
    message: code.MESSAGE,
    ...data && { data }
  }

  res.status(response.status).json(response)
}

/**
 * Handles get method requests.
 */
export const handleGet = (response: Response) => (result: any) =>
  _sendResponse(response, HTTP_CODE_CONSTANTS.SUCCESS_200, result || null)
