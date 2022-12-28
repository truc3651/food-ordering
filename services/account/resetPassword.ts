import { hashPassword } from 'utils/common'
import { SERVER_ERROR_CODE } from 'utils/errors'
import { queryUserByForgotPasswordToken } from '../queryUser'
import { updateUserById } from '../updateUser'

export type ResetPasswordInput = {
  token: string
  newPassword: string
}

const handler = async (token: string, newPassword: string) => {
  const user = await queryUserByForgotPasswordToken(token)

  if (!user) throw new Error(SERVER_ERROR_CODE.CANNOT_FIND_USER)
  if (user.request_forgot_password_at > new Date()) throw new Error(SERVER_ERROR_CODE.EXPIRED_TOKEN)

  await updateUserById(user.user_id, {
    password_hashed: await hashPassword(newPassword),
    forgot_password_token: null,
    request_forgot_password_at: null
  })
  return true
}

export default handler
