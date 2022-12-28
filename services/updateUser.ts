import { query } from './query'

export const updateUserById = async (userId: number, object: Record<string, any>) => {
  const UPDATE_USER = /* GraphQL */ `
    mutation updateUser($userId: Int!, $object: users_set_input!) {
      user: update_users_by_pk(pk_columns: { user_id: $userId }, _set: $object) {
        user_id
      }
    }
  `
  await query<{
    data: { user: Partial<Users> }
  }>(UPDATE_USER, {
    userId,
    object
  })
}
