'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(5),
})

export async function HandleContactForm(formData: FormData): Promise<void> {
  // Extract data from FormData
  const name = formData.get('name')?.toString() || ''
  const email = formData.get('email')?.toString() || ''
  const message = formData.get('message')?.toString() || ''

  // Validate data with zod
  const result = contactSchema.safeParse({ name, email, message })
  if (!result.success) {
    throw new Error('Validation failed')
  }

  // Create nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,   
    replyTo: email,               
    subject: `New Contact Form Message from ${name}`,
    text: `Message from: ${name} <${email}>\n\n${message}`,
  }
  
  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}
