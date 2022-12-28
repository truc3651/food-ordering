import { authenticator } from 'otplib'

const OTP_SECRET = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'
export const OTP_EXPIRES_IN_SECONDS = 120
authenticator.options = { digits: 6, step: OTP_EXPIRES_IN_SECONDS, window: [1, 1] }

export const generateOTP = () => {
  return authenticator.generate(OTP_SECRET)
}

export const verifyOTP = (otp: string) => {
  // authenticator.timeRemaining() <= OTP_EXPIRES_IN_SECONDS
  return authenticator.verify({ token: otp, secret: OTP_SECRET })
}
