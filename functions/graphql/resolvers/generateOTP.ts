import generateOTP from 'services/account/generateOTP'

const resolver = {
  Mutation: {
    generateOTP: async (_parent: any, args: { email: string }): Promise<{ otp: string }> => {
      const otpVerifiedEmail = await generateOTP(args.email)
      return { otp: otpVerifiedEmail }
    }
  }
}

export default resolver
