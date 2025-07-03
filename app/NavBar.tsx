import React from 'react'

import Image from 'next/image'
import Logo from './tyroneTaxVat.jpg';

import Link from 'next/link'

const NavBar = () => {

  return (
    <nav>
      <div className="navbar bg-stone-100 text-rose-900 shadow">
        <div className="navbar-start">
          <p className="text-lg">Mon - Sun : 8:30am - 5pm</p>

        </div>
        <Link className="hover" href="/"> 
        <div className="p-1 rounded-full transition-all duration-200 hover:ring-2 hover:ring-rose-500 hover:ring-offset-2 hover:scale-95 transform">
            <Image 
            src={Logo}
            alt= "Logo"
            width={60}
            height={60}
            />
        </div>
        </Link>

        <div className="navbar-end">
        <Link className = "hover:text-rose-400 transition-colors" href="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
