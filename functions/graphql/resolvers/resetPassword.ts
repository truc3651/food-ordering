import resetPassword, { ResetPasswordInput } from 'services/account/resetPassword'

const resolver = {
  Mutation: {
    resetPassword: async (_parent: any, args: ResetPasswordInput): Promise<boolean> => {
      return await resetPassword(args.token, args.newPassword)
    }
  }
}

export default resolver
