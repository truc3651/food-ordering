import bcrypt from 'bcrypt'
import OTP from 'otp'
import { query } from '../query'
import { SERVER_ERROR_CODE } from 'utils/errors'
import { verifyEmail, logger } from 'utils/common'
import sendMail from 'utils/email'

export type RegisterInput = {
  email: string
  password: string
  displayedName: string
  avatar?: string
}

const checkExistUser = async (email: string) => {
  const QUERY_USER_BY_EMAIL = /* GraphQL */ `
    query userByEmail($email: String!) {
      users: users(where: { email: { _eq: $email } }) {
        user_id
      }
    }
  `
  const {
    data: { users }
  } = await query<
    {
      data: { users: Partial<Users>[] }
    },
    { email: string }
  >(QUERY_USER_BY_EMAIL, {
    email
  })
  if (users.length) throw new Error(SERVER_ERROR_CODE.EMAIL_EXISTED)
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
  } = await query<
    {
      data: { user: Partial<Users> }
    },
    { object: Partial<Users> }
  >(INSERT_USER, {
    object
  })
  if (!user.email) throw new Error(SERVER_ERROR_CODE.INTERNAL_SERVER_ERROR)
}

const handler = async ({ email, password, displayedName, avatar }: RegisterInput) => {
  try {
    {
      // validate payload
      verifyEmail(email)
      // verifyImage(avatar)
      if (password.length < 6) throw new Error(SERVER_ERROR_CODE.PASSWORD_TOO_SHORT)
    }
    await checkExistUser(email)

    const accessSecretKey = Math.random().toString(36).slice(2)
    await insertUser({
      email,
      password_hashed: await bcrypt.hash(password, 10),
      access_secret_key: accessSecretKey,
      displayed_name: displayedName,
      changed_displayed_name_manually: !!displayedName,
      avatar,
      changed_avatar_manually: !!avatar,
      active: false
    })
    const otpInstance = new OTP({
      secret: accessSecretKey
    })
    const otp = otpInstance.totp(new Date().getTime())
    sendMail({
      receivers: [email],
      subject: 'Verify email',
      text: `Here your otp: ${otp}. This otp lives in 30s`
    })
    return true
  } catch (error) {
    logger.error(error)
    return false
  }
}

export default handler
