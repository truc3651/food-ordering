import { generateId } from 'utils/common'
import sendMail, { MailPurposes } from 'utils/email'
import { SERVER_ERROR_CODE } from 'utils/errors'
import { query } from '../query'
import { queryUserByEmail } from '../queryUser'
import { updateUserById } from '../updateUser'

const handler = async (email: string) => {
  const user = await queryUserByEmail(email)

  if (!user || user.email !== email) throw new Error(SERVER_ERROR_CODE.CANNOT_FIND_USER)

  const resetPasswordToken = generateId()
  // sendMail({
  //   receivers: [email],
  //   subject: 'Reset password',
  //   text: `Click this link to reset your password: ${ENV.WEB_DOMAIN.RESET_PASSWORD} \\nInvalid in 30 minutes.`,
  //   object: MailPurposes.RESET_PASSWORD
  // })

  await Promise.all([
    // chỉ cần 1 device forgot, là disable hết toàn bộ device còn lại
    // nên nếu user nhớ lại password -> login -> nếu secret key chưa có thì phải tạo
    updateUserById(user.user_id, {
      forgot_password_token: resetPasswordToken,
      request_forgot_password_at: new Date(),
      access_secret_key: null
    }),
    sendMail({
      receivers: [email],
      subject: 'Reset password',
      text: `Here your hashed key to reset your password: ${resetPasswordToken} \\nInvalid in 30 minutes.`,
      object: MailPurposes.RESET_PASSWORD
    })
  ])
  return resetPasswordToken
}

export default handler
