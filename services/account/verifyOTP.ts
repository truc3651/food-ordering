import OTP from 'otp'
import { SERVER_ERROR_CODE } from 'utils/errors'
import { query } from '../query'
import { signJWT } from 'utils/jwt'

const queryUserByEmail = async (email: string) => {
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
  if (!users.length) throw new Error(SERVER_ERROR_CODE.CANNOT_FIND_USER)
  return users[0]
}

const handler = async (email: string, otp: string) => {
  const user = await queryUserByEmail(email)
  const otpInstance = new OTP({
    secret: user.access_secret_key!
  })
  const validOtp = otpInstance.totp(new Date().getTime())
  if (otp.length !== 6 || otp !== validOtp) {
    throw new Error(SERVER_ERROR_CODE.INVALID_OTP)
  }
  return signJWT(
    {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-default-role': 'user'
      }
    },
    user.access_secret_key!
  )
}

export default handler
