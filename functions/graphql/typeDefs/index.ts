import { mergeTypeDefs } from '@graphql-tools/merge'
import root from './root.graphql'
import register from './register.graphql'
// import generateOTP from './generateOTP.graphql'
// import verifyOTP from './verifyOTP.graphql'
// import login from './login.graphql'

export default mergeTypeDefs([root, register])
