import { SERVER_ERROR_CODE } from 'utils/errors'
import { verifyOTP } from 'utils/otp'
import { query } from '../query'
import { queryUserByEmail } from '../queryUser'

const updateVerifiedEmail = async (userId: number) => {
  const UPDATE_VERIFIED_EMAIL = /* GraphQL */ `
    mutation updateVerifiedEmail($userId: Int!) {
      user: update_users_by_pk(
        pk_columns: { user_id: $userId }
        _set: { verified_email: true, active: true }
      ) {
        user_id
      }
    }
  `
  await query<{
    data: { user: Partial<Users> }
  }>(UPDATE_VERIFIED_EMAIL, {
    userId
  })
}

const handler = async (email: string, otp: string) => {
  const user = await queryUserByEmail(email)
  if (!user) throw new Error(SERVER_ERROR_CODE.CANNOT_FIND_USER)

  if (otp.length !== 6 || !verifyOTP(otp)) return null

  await updateVerifiedEmail(user.user_id!)

  return true
}

export default handler
