import React from 'react'

import ContactFormButton from './ContacFormButton';
import {HandleContactForm} from '../api/contact/HandleContactForm';

const ContactForm = () => {
  return (

<div className="w-full md:w-1/2 h-full">
    <div className="p-6 bg-rose-900 text-white rounded-lg shadow-md h-full flex flex-col min-h-[700px]">
      <span className="text-2xl font-bold mb-4">Send us a message</span>
      
      {/* Form with full height and spacing */}
      <form action={HandleContactForm} className="flex flex-col flex-1 space-y-4">
        {/* Name Field */}
        <div>
          <label className="label" htmlFor="name">
            <span className="label-text text-white">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            minLength={3}
            maxLength={100}
            placeholder="Connor Murphy"
            className="input input-bordered w-full text-black"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="label" htmlFor="email">
            <span className="label-text text-white">Email Address</span>
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="ConnorMurphy@gmail.com"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            className="input input-bordered w-full text-black"
            title="Please enter a valid email address"
          />
        </div>

        {/* Message Field */}
        <div className="flex-1 flex flex-col">
          <label className="label" htmlFor="message">
            <span className="label-text text-white">Your Message</span>
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Type your message here"
            minLength={5}
            maxLength={300}
            className="textarea textarea-bordered w-full flex-1 text-black"
          ></textarea>
        </div>

        {/* CheckBox */}
        <label className="flex items-start gap-2 w-full">
        <input type="checkbox" name="agreed" className="checkbox mt-1" required />
        <span className="text-white text-sm leading-snug break-words">
            By submitting your details you consent to their use in accordance with our <a href="/privacy" className="underline">Privacy Policy</a>.
        </span>
        </label>


        {/* Submit Button */}
        <ContactFormButton />
      </form>
    </div>
</div>
  )
}



export default ContactForm
