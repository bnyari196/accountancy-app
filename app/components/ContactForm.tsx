import React from 'react'

import GoogleMaps from './GoogleMaps';


const ContactForm = () => {
  return (
<div className="flex flex-col md:flex-row p-6 gap-6 min-h-[600px]">
  <GoogleMaps />

{/* Contact Form Section - add outer div to the page itself */}
<div className="w-full md:w-1/2 h-full">
    <div className="p-6 bg-rose-900 text-white rounded-lg shadow-md h-full flex flex-col min-h-[700px]">
      <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
      
      {/* Form with full height and spacing */}
      <form className="flex flex-col flex-1 space-y-4">
        {/* Name Field */}
        <div>
          <label className="label" htmlFor="name">
            <span className="label-text text-white">Your Name</span>
          </label>
          <input
            type="text"
            id="name"
            required
            minLength={3}
            maxLength={100}
            placeholder="Enter your name"
            className="input input-bordered w-full text-black"
          />
        </div>

        {/* Email Field - Add general email template required */}
        <div>
          <label className="label" htmlFor="email">
            <span className="label-text text-white">Email Address</span>
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            className="input input-bordered w-full text-black"
          />
        </div>

        {/* Message Field - expands */}
        <div className="flex-1 flex flex-col">
          <label className="label" htmlFor="message">
            <span className="label-text text-white">Your Message</span>
          </label>
          <textarea
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
        <input type="checkbox" className="checkbox mt-1" required />
        <span className="text-white text-sm leading-snug break-words">
            By submitting your details you consent to their use in accordance with our <a href="/privacy" className="underline">Privacy Policy</a>.
        </span>
        </label>


        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-white text-rose-900 hover:bg-rose-800 hover:text-white transition-all self-start"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
  )
}



export default ContactForm
