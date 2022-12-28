import forgotPassword from 'services/account/forgotPassword'

const resolver = {
  Mutation: {
    forgotPassword: async (
      _parent: any,
      args: { email: string }
    ): Promise<{ resetPasswordToken: string }> => {
      const resetPasswordToken = await forgotPassword(args.email)
      return { resetPasswordToken }
    }
  }
}

export default resolver
