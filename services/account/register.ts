import { hashPassword, verifyEmail } from 'utils/common'
import sendMail, { MailPurposes } from 'utils/email'
import { SERVER_ERROR_CODE } from 'utils/errors'
import { generateOTP, OTP_EXPIRES_IN_SECONDS } from 'utils/otp'
import { query } from '../query'
import { queryUserByEmail } from '../queryUser'

export type RegisterInput = {
  sex: boolean
  email: string
  password: string
  displayedName: string
  avatar?: string
}

const insertUser = async (object: Partial<Users>) => {
  const INSERT_USER = /* GraphQL */ `
    mutation insertUser($object: users_insert_input!) {
      user: insert_users_one(object: $object) {
        email
      }
    }
  `
  const {
    data: { user }
  } = await query<{
    data: { user: Partial<Users> }
  }>(INSERT_USER, {
    object
  })
  if (!user.email) throw new Error(SERVER_ERROR_CODE.INTERNAL_SERVER_ERROR)
}

const handler = async ({ sex, email, password, displayedName, avatar }: RegisterInput) => {
  {
    // validate payload
    verifyEmail(email)
    if (password.length < 6) throw new Error(SERVER_ERROR_CODE.PASSWORD_TOO_SHORT)

    const user = await queryUserByEmail(email)
    if (user) throw new Error(SERVER_ERROR_CODE.EMAIL_EXISTED)
  }

  const otp = generateOTP()
  await insertUser({
    sex,
    email,
    password_hashed: await hashPassword(password),
    displayed_name: displayedName,
    changed_displayed_name_manually: false,
    avatar,
    changed_avatar_manually: false,
    active: false
  })
  sendMail({
    receivers: [email],
    subject: 'Verify email',
    text: `Here your otp: ${otp}. This otp lives in ${OTP_EXPIRES_IN_SECONDS / 60} seconds`,
    object: MailPurposes.REGISTER
  })

  return true
}

export default handler
