import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="hero h-[70vh] md:h-[85vh] lg:h-[85vh] relative m-0 p-0">
      <Image
        src="/Omagh.jpg"
        alt="Omagh town view - Tyrone Tax & VAT Specialists service area"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay bg-opacity-40 absolute inset-0 z-10"></div>
      <div className="hero-content text-neutral-content text-center relative z-20">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-4xl md:text-6xl font-bold">
            <div>Tyrone Tax & VAT</div>
            <div>Specialists</div>
          </h1>
          <p className="mb-5 text-lg">
            Helping local businesses and individuals with self-assessment, VAT returns, bookkeeping and more - delivered with a personal touch.
          </p>
          <Link href="/contact#contact-form" className="btn btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </div>  
    </div>
  )
}

export default Hero
