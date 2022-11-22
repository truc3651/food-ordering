import register, { RegisterInput } from 'services/account/register'

const resolver = {
  Mutation: {
    register: (_parent: any, args: RegisterInput): Promise<boolean> => {
      return register(args)
    }
  }
}

export default resolver
