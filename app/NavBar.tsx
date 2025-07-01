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
  <div className="navbar-center">
    <a className="btn btn-ghost">
        <Image 
        src={Logo}
        alt= "Logo"
        width={50}
        height={50}
        />
    </a>
  </div>

  <div className="navbar-end">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/">Homepage</Link></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
</div>
    </nav>
  )
}

export default NavBar
