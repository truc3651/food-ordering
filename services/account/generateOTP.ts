import { SERVER_ERROR_CODE } from 'utils/errors'
import { generateOTP } from 'utils/otp'
import { queryUserByEmail } from '../queryUser'

const handler = async (email: string) => {
  const user = await queryUserByEmail(email)!

  if (user.verified_email) throw new Error(SERVER_ERROR_CODE.ALREADY_VERIFIED_EMAIL)

  return generateOTP()
}

export default handler
