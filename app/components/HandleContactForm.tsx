'use server'

import { z } from 'zod'

export async function HandleContactForm(formData: FormData) {
  const ContactFormSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(5).max(300),
  })

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    console.error(result.error.format())
    return
  }

  // Do something with validated result
  console.log('Valid:', result.data)
}