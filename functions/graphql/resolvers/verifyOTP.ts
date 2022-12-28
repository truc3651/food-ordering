import verifyOTP from 'services/account/verifyOTP'

const resolver = {
  Mutation: {
    verifyOTP: async (
      _parent: any,
      args: { email: string; otp: string }
    ): Promise<boolean | null> => {
      const { email, otp } = args
      return await verifyOTP(email, otp)
    }
  }
}

export default resolver
