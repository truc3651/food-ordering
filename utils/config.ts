export const ENV = {
  HASURA_ENDPOINT: process.env['HASURA_ENDPOINT'],
  SERVICE_ID: process.env['SERVICE_ID'],
  SERVICE_SECRET: process.env['SERVICE_SECRET'],
  GOOGLE_AUTH_CLIENT_ID: process.env['GOOGLE_AUTH_CLIENT_ID'],
  GOOGLE_AUTH_SECRET: process.env['GOOGLE_AUTH_SECRET'],
  EMAIL_USER: process.env['EMAIL_USER'],
  EMAIL_PASSWORD: process.env['EMAIL_PASSWORD'],
  WEB_DOMAIN: {
    RESET_PASSWORD: 'http://localhost:3000/reset-password'
  }
} as const
