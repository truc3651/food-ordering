import SES from 'aws-sdk/clients/ses'

const { EMAIL_FROM } = process.env
export enum MailPurposes {
  REGISTER = 'register',
  RESET_PASSWORD = 'reset_password'
}

type SendMail = {
  receivers: string[]
  subject: string
  text: string
  object: MailPurposes
}

const ses = new SES()

const sendMail = async ({ receivers, subject, text, object }: SendMail) => {
  ses.sendEmail(
    {
      Source: EMAIL_FROM!,
      Destination: {
        ToAddresses: receivers
      },
      Message: {
        Body: {
          Text: {
            Data: text,
            Charset: 'utf-8'
          }
        },
        Subject: {
          Data: `[Bizzi Food Ordering] ${subject}`,
          Charset: 'utf-8'
        }
      },
      Tags: [
        {
          Name: 'object',
          Value: object
        }
      ]
    },
    function (error, data) {
      if (error) console.error('sendMail::', error)
      console.log('sendMail::', data)
    }
  )
}

export default sendMail
