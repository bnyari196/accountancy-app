import React from 'react'

import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div>
      <div>
        <span className="text-5xl p-5">Contact Us</span>
      </div>
      <ContactInfo />
      <ContactForm />
    </div>
  )
}

export default ContactPage
