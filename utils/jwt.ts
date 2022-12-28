import jwt, { Algorithm } from 'jsonwebtoken'
import publicKeyRS256 from 'keys/publicKey'
import privateKeyRS256 from 'keys/privateKey'

export const verifyJWT = (
  token: string,
  publicKey = publicKeyRS256,
  algorithms = ['RS256'] as jwt.Algorithm[]
) =>
  jwt.verify(token, publicKey, {
    algorithms
  })

export const signJWT = (
  payload: Record<string, any>,
  privateKey = privateKeyRS256,
  algorithm: Algorithm = 'RS256'
) =>
  jwt.sign(payload, privateKey, {
    expiresIn: '1d',
    algorithm
  })

export const getBearerToken = ({ headers }: any) => {
  const Authorization: string = headers.Authorization || headers.authorization
  const XAuthorization: string = headers['X-Authorization'] || headers['x-authorization']

  if (!Authorization && !XAuthorization) {
    throw new Error('No authorization')
  }
  return (Authorization || XAuthorization).split('Bearer ')[1]
}

export const verifyJWTFromRequest = (req: any) => {
  const token = getBearerToken(req)
  if (!token) return
  return verifyJWT(token) as jwt.JwtPayload
}
