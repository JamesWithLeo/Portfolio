import nodemailer from "nodemailer";
import 'dotenv/config'


export const sendEmail = async (from, cc, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.gmail,
      pass: process.env.password
    }

  })
  const mailOptions = {
    from,
    cc,
    to: process.env.gmail,
    subject,
    text,
  }
  try {
    const res = await transporter.sendMail(mailOptions);
    console.log('Email sent:' + res.response)
  } catch (error) {
    console.error("Error sending email: ", error)
  }
}