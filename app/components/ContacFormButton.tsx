'use client'

import { useFormStatus } from 'react-dom'
import React from 'react'

const ContactFormButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn bg-white text-rose-900 hover:bg-rose-800 hover:text-white transition-all self-start ${
        pending ? 'opacity-70 cursor-not-allowed' : ''
      }`}
    >
      {pending ? 'Sending...' : 'Submit'}
    </button>
  )
}

export default ContactFormButton
