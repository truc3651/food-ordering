import { mergeResolvers } from '@graphql-tools/merge'
import register from './register'
import generateOTP from './generateOTP'
import verifyOTP from './verifyOTP'
import login from './login'
import forgotPassword from './forgotPassword'
import resetPassword from './resetPassword'

export default {
  ...mergeResolvers([register, verifyOTP, generateOTP, login, forgotPassword, resetPassword])
}
