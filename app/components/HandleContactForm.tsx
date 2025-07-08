'use server'

export async function HandleContactForm(formData: FormData): Promise<void> {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  console.log('Form data:', { name, email, message })

  // Add actual handling logic here (e.g., send email, store in DB, etc.)
}
