import { mergeTypeDefs } from '@graphql-tools/merge'
import root from './root.graphql'
import register from './register.graphql'
import generateOTP from './generateOTP.graphql'
import verifyOTP from './verifyOTP.graphql'
import login from './login.graphql'
import forgotPassword from './forgotPassword.graphql'
import resetPassword from './resetPassword.graphql'

export default mergeTypeDefs([
  root,
  register,
  verifyOTP,
  generateOTP,
  login,
  forgotPassword,
  resetPassword
])
