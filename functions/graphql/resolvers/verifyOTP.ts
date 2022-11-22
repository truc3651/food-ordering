import verifyOTP from 'services/account/verifyOTP'

const resolver = {
  Mutation: {
    verifyOTP: async (
      _parent: any,
      args: { email: string; otp: string }
    ): Promise<{ accessToken: string }> => {
      const { email, otp } = args
      const accessToken = await verifyOTP(email, otp)
      return { accessToken }
    }
  }
}

export default resolver
