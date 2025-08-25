import React from 'react'
import { TbPhoneCall } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  const contactCards = [
    {
      icon: <TbPhoneCall className="w-12 h-12 text-rose-900 mb-4" />,
      title: "Call Us Today",
      description: "Ready to help with your accounting needs. Just a phone call away.",
      contact: "074 8573 1689",
      href: "tel:07485731689",
      linkText: "Call Now"
    },
    {
      icon: <TfiEmail className="w-12 h-12 text-rose-900 mb-4" />,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries or document sharing.",
      contact: "tyronetax@outlook.com",
      href: "mailto:tyronetax@outlook.com",
      linkText: "Send Email"
    },
    {
      icon: <FaWhatsapp className="w-12 h-12 text-rose-900 mb-4" />,
      title: "WhatsApp Chat",
      description: "Quick questions? Send us a message on WhatsApp for instant support.",
      contact: "Chat with us",
      href: "https://wa.me/447485731689",
      linkText: "Start Chat"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rose-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-rose-900 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col w-full border rounded-xl shadow-lg bg-white border-gray-200 hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="flex flex-col items-center text-center flex-grow">
                {card.icon}
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-rose-900">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-lg mb-4 flex-grow">
                  {card.description}
                </p>
                <p className="text-rose-900 font-semibold mb-6">
                  {card.contact}
                </p>
                <a
                  href={card.href}
                  target={card.href.startsWith('https') ? '_blank' : '_self'}
                  rel={card.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-rose-900 rounded-lg hover:bg-rose-800 transition-colors duration-300"
                >
                  {card.linkText}
                  <svg
                    className="w-4 h-4 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
