import React from 'react'
import Image from 'next/image'
import Logo from './tyroneTaxVat.png';
import Link from 'next/link';
import { FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-rose-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="-mt-6">
              <Link href="/" className="inline-block mb-4">
                <div className="transition-all duration-200 hover:scale-105 transform">
                  <Image 
                    src={Logo}
                    alt="Tyrone Tax & VAT Specialists Logo"
                    width={200}
                    height={200}
                    className="mx-auto md:mx-0"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <FaPhone className="text-rose-300 mr-3" />
                <a href="tel:07485731689" className="hover:text-rose-300 transition-colors">
                  074 8573 1689
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-rose-300 mr-3" />
                <a href="mailto:tyronetax@outlook.com" className="hover:text-rose-300 transition-colors">
                  tyronetax@outlook.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="text-rose-300 mr-3" />
                <span>Omagh, County Tyrone</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaClock className="text-rose-300 mr-3" />
                <span>Mon - Sun: 8:30am - 5pm</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <div>
                <Link href="/" className="hover:text-rose-300 transition-colors block">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/about" className="hover:text-rose-300 transition-colors block">
                  About Us
                </Link>
              </div>
              <div>
                <Link href="/contact" className="hover:text-rose-300 transition-colors block">
                  Contact Us
                </Link>
              </div>
              <div>
                <Link href="/contact#contact-form" className="hover:text-rose-300 transition-colors block">
                  Book Consultation
                </Link>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.linkedin.com/in/tamas-nyari-38326326a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-rose-800 rounded-full hover:bg-rose-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
                <a 
                href="https://wa.me/447485731689" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-rose-800 rounded-full hover:bg-rose-700 transition-colors"
                aria-label="WhatsApp"
                >
                <FaWhatsapp className="w-5 h-5" />
                </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-rose-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-rose-200">
            <p className="mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Tyrone Tax & VAT Specialists. All rights reserved.
            </p>
            <Link 
              href="/privacy-policy" 
              className="hover:text-rose-300 transition-colors underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
