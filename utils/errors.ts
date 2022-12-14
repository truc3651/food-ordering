export enum SERVER_ERROR_CODE {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  EMAIL_EXISTED = 'EMAIL_EXISTED',
  CANNOT_FIND_USER = 'CANNOT_FIND_USER',
  CANNOT_FIND_GROUP = 'CANNOT_FIND_GROUP',
  UNAUTHORIZED = 'UNAUTHORIZED',
  INVALID_INPUT = 'INVALID_INPUT',
  INVALID_OTP = 'INVALID_OTP',
  PASSWORD_TOO_SHORT = 'PASSWORD_TOO_SHORT',
  PASSWORD_NOT_MATCH = 'PASSWORD_NOT_MATCH',
  ALREADY_VERIFIED_EMAIL = 'ALREADY_VERIFIED_EMAIL',
  HAVE_NOT_VERIFIED_EMAIL = 'HAVE_NOT_VERIFIED_EMAIL',
  ACCOUNT_INACTIVE = 'ACCOUNT_INACTIVE',
  EXPIRED_TOKEN = 'EXPIRED_TOKEN'
}
