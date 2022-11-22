import login from 'services/account/login'

const resolver = {
  Mutation: {
    login: async (
      _parent: any,
      args: {
        email: string
        password: string
      }
    ): Promise<{ accessToken: string }> => {
      const { email, password } = args
      const accessToken = await login(email, password)
      return { accessToken }
    }
  }
}

export default resolver
