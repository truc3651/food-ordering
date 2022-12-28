import got, { Response } from 'got'
import { ENV } from 'utils/config'
import { signJWT } from 'utils/jwt'

const request = got.extend({
  responseType: 'json'
})

const token = null

const requestServiceToken = async (): Promise<string> => {
  if (!!token) return token
  return signJWT({
    'admin': true,
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': ['admin'],
      'x-hasura-default-role': 'admin'
    }
  })
}

export const query = async <T>(query: string, variables?: Record<string, any>): Promise<T> => {
  const token = await requestServiceToken()
  const resp: Response<T> = await request.post<T>(`${ENV.HASURA_ENDPOINT}/v1/graphql`, {
    json: {
      query,
      variables
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  return resp.body
}
