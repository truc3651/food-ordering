import pino from 'pino'
import { SERVER_ERROR_CODE } from 'utils/errors'

export const verifyEmail = (email: string) => {
  if (!/@bizzi.vn\s*$/.test(email)) {
    throw new Error(SERVER_ERROR_CODE.INVALID_INPUT)
  }
}

export const verifyImage = (url: string) => {
  if (
    !(
      url.startsWith('https://') &&
      (url.endsWith('png') || url.endsWith('jpg') || url.endsWith('jpeg'))
    )
  ) {
    throw new Error(SERVER_ERROR_CODE.INVALID_INPUT)
  }
}

export const logger = pino()
