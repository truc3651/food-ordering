import bcrypt from 'bcrypt'
import { query } from '../query'
import { SERVER_ERROR_CODE } from 'utils/errors'
import { verifyEmail } from 'utils/common'
import { signJWT } from 'utils/jwt'

const checkExistUser = async (email: string) => {
  const QUERY_USER_BY_EMAIL = /* GraphQL */ `
    query userByEmail($email: String!) {
      users: users(where: { email: { _eq: $email } }) {
        user_id
        access_secret_key
        password_hashed
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

const updateUserVerifiedEmail = async (userId: number) => {
  const UPDATE_USER = /* GraphQL */ `
    mutation updateUser($user_id: uuid!) {
      user: update_users_by_pk(pk_columns: { user_id: $user_id }, _set: { verified_email: true }) {
        user_id
      }
    }
  `
  const {
    data: { user }
  } = await query<
    {
      data: { user: Partial<Users> }
    },
    { userId: number }
  >(UPDATE_USER, {
    userId
  })
  if (!user.user_id) throw new Error(SERVER_ERROR_CODE.INTERNAL_SERVER_ERROR)
}

const handler = async (email: string, password: string) => {
  {
    // validate payload
    verifyEmail(email)
  }
  const user = await checkExistUser(email)!

  const passwordMatched = bcrypt.compareSync(password, user.password_hashed!)
  if (!passwordMatched) {
    throw new Error(SERVER_ERROR_CODE.PASSWORD_NOT_MATCH)
  }

  await updateUserVerifiedEmail(user.user_id!)
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
