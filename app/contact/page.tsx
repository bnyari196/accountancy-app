import React from 'react'

import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import SubPageHero from '../components/SubPageHero';

const ContactPage = () => {
  return (
    <div>
      <SubPageHero
        title="Get In Touch"
        subtitle="Have a question or want to schedule a meeting? We'd love to hear from you."
        imageUrl="/ContactHero.jpg"
        showButton={false}
      />
      <ContactInfo />
      <ContactForm />
    </div>
  )
}

export default ContactPage
