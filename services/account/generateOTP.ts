import OTP from 'otp'
import { SERVER_ERROR_CODE } from 'utils/errors'
import { query } from '../query'

const queryUserByEmail = async (email: string): Promise<Partial<Users>> => {
  const QUERY_USER_BY_EMAIL = /* GraphQL */ `
    query userByEmail($email: String!) {
      users: users(where: { email: { _eq: $email } }) {
        user_id
        access_secret_key
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
  if (users.length === 0) throw new Error(SERVER_ERROR_CODE.EMAIL_EXISTED)
  return users[0]
}

const handler = async (email: string) => {
  const user = await queryUserByEmail(email)!
  const otp = new OTP({
    secret: user.access_secret_key!
  })
  return otp.totp(new Date().getTime())
}

export default handler
