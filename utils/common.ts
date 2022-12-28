import pino from 'pino'
import pretty from 'pino-pretty'
import bcrypt from 'bcryptjs'
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

export const logger = pino(
  pretty({
    colorize: true
  })
)

export const generateId = (length: number = 30) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}
