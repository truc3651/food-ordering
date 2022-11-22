import { mergeResolvers } from '@graphql-tools/merge'
import register from './register'
// import generateOTP from './generateOTP'
// import verifyOTP from './verifyOTP'
// import login from './login'

export default {
  ...mergeResolvers([register])
}
