import nodemailer from 'nodemailer'
import { ENV } from 'utils/config'

type SendMail = {
  receivers: string[]
  subject: string
  text: string
}

const sendMail = async ({ receivers, subject, text }: SendMail) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: ENV.EMAIL_USER,
      pass: ENV.EMAIL_PASSWORD
    }
  })
  await transporter.sendMail({
    from: 'Bizzi Food Ordering',
    to: receivers.join(','),
    subject,
    text
  })
}

export default sendMail
