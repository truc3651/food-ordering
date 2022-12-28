import { query } from './query'

export const queryUserByEmail = async (email: string): Promise<Users | null> => {
  const QUERY_USER_BY_EMAIL = /* GraphQL */ `
    query userByEmail($email: String!) {
      users: users(where: { email: { _eq: $email } }) {
        user_id
        email
        access_secret_key
        verified_email
        password_hashed
        active
      }
    }
  `
  const {
    data: { users }
  } = await query<{
    data: { users: Users[] }
  }>(QUERY_USER_BY_EMAIL, {
    email
  })
  return users.length ? users[0] : null
}

export const queryUserById = async (id: number): Promise<Users | null> => {
  const QUERY_USER_BY_ID = /* GraphQL */ `
    query userById($id: number!) {
      users: users_by_pk(user_id: $id) {
        user_id
        access_secret_key
        verified_email
        password_hashed
        active
      }
    }
  `
  const {
    data: { users }
  } = await query<{
    data: { users: Users[] }
  }>(QUERY_USER_BY_ID, {
    id
  })
  return users.length ? users[0] : null
}

export const queryUserByForgotPasswordToken = async (token: string): Promise<Users | null> => {
  const QUERY_USER_BY_TOKEN = /* GraphQL */ `
    query userByToken($token: String!) {
      users: users(where: { forgot_password_token: { _eq: $token } }) {
        user_id
        request_forgot_password_at
      }
    }
  `
  const {
    data: { users }
  } = await query<{
    data: { users: Users[] }
  }>(QUERY_USER_BY_TOKEN, {
    token
  })
  console.log('>>>users', users)
  return users.length ? users[0] : null
}
