import bcrypt from 'bcryptjs'
import { queryUserByEmail } from '../queryUser'
import { query } from '../query'
import { SERVER_ERROR_CODE } from 'utils/errors'
import { verifyEmail, generateId } from 'utils/common'
import { signJWT } from 'utils/jwt'

const updateSecretAccessToken = async (userId: number, accessSecretToken: string) => {
  const UPDATE_ACCESS_SECRET_TOKEN = /* GraphQL */ `
    mutation updateSecretAccessToken($userId: Int!, $accessSecretToken: String!) {
      user: update_users_by_pk(
        pk_columns: { user_id: $userId }
        _set: { access_secret_key: $accessSecretToken }
      ) {
        user_id
      }
    }
  `
  await query<{
    data: { user: Partial<Users> }
  }>(UPDATE_ACCESS_SECRET_TOKEN, {
    userId,
    accessSecretToken
  })
}

const handler = async (email: string, password: string) => {
  {
    // validate payload
    verifyEmail(email)
  }
  const user = await queryUserByEmail(email)!
  if (!user) throw new Error(SERVER_ERROR_CODE.CANNOT_FIND_USER)
  if (!user.verified_email) throw new Error(SERVER_ERROR_CODE.HAVE_NOT_VERIFIED_EMAIL)
  if (!user.active) throw new Error(SERVER_ERROR_CODE.ACCOUNT_INACTIVE)

  const passwordMatched = bcrypt.compareSync(password, user.password_hashed!)
  if (!passwordMatched) {
    throw new Error(SERVER_ERROR_CODE.PASSWORD_NOT_MATCH)
  }
  if (!user.access_secret_key) {
    const accessSecretToken = generateId()
    await updateSecretAccessToken(user.user_id, accessSecretToken)
    user.access_secret_key = accessSecretToken
  }

  return signJWT(
    {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-default-role': 'user'
      }
    },
    user.access_secret_key,
    'HS256'
  )
}

export default handler
