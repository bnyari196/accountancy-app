import React from 'react'

import SubPageHero from '../components/SubPageHero';
import ContactInfo from '../components/ContactInfo';
import GoogleMaps from '../components/GoogleMaps';
import ContactForm from '../components/ContactForm';


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
      <div className="flex flex-col md:flex-row p-6 gap-6 min-h-[600px]">
      <GoogleMaps />
      <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
