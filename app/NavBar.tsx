'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from './tyroneTaxVat2.png';
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-stone-100 text-rose-900 shadow md:sticky top-[40px] z-40">
      <div className="navbar-start md:navbar-center">
        <Link className="hover" href="/"> 
          <div className="p-1 rounded-full transition-all duration-200 hover:ring-2 hover:ring-rose-500 hover:ring-offset-2 hover:scale-95 transform">
            <Image 
              src={Logo}
              alt="Logo"
              width={160}
              height={160}
                          />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-end gap-x-5 hidden md:flex">
        <Link className="relative font-medium hover:text-rose-600 transition-colors duration-200 group" href="/">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link className="relative font-medium hover:text-rose-600 transition-colors duration-200 group" href="/about">
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link className="relative font-medium hover:text-rose-600 transition-colors duration-200 group" href="/contact">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="navbar-end md:hidden">
        <button
          className="p-2 rounded-lg hover:bg-rose-100 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`absolute top-full right-0 w-48 bg-stone-100 shadow-lg md:hidden z-50 rounded-bl-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-60 opacity-100 visible transform translate-y-0' 
          : 'max-h-0 opacity-0 invisible transform -translate-y-2'
      }`}>
        <div className="py-4 space-y-2 px-4">
          <Link 
            className="block px-4 py-3 hover:bg-rose-100 hover:text-rose-600 transition-colors duration-200 rounded-lg transform transition-transform duration-200 hover:translate-x-1" 
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            className="block px-4 py-3 hover:bg-rose-100 hover:text-rose-600 transition-colors duration-200 rounded-lg transform transition-transform duration-200 hover:translate-x-1" 
            href="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            className="block px-4 py-3 hover:bg-rose-100 hover:text-rose-600 transition-colors duration-200 rounded-lg transform transition-transform duration-200 hover:translate-x-1" 
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
