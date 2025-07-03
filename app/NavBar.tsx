import React from 'react'

import Image from 'next/image'
import Logo from './tyroneTaxVat.jpg';

import Link from 'next/link'

/* Import router doesnt work */

const NavBar = () => {

  return (
    <nav>
<div className="navbar bg-base-100 shadow-sm bg-rose-900">
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
  <Link className = "hover:text-white transition-colors" href="/contact">Contact Us</Link>

    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/">Homepage</Link></li>
        <li><Link href="/contact"></Link><a>Contact Us</a></li>
        <li><a>About</a></li>
      </ul>
  </div> */}
  </div>
</div>
    </nav>
  )
}

export default NavBar
