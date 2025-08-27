import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
        className="hero h-[70vh] md:h-[85vh] lg:h-[85vh] bg-cover bg-center m-0 p-0"
        style={{
            backgroundImage: "url(/Omagh.jpg)",
        }}
        >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-2xl">
            <div className="mb-5 text-4xl md:text-6xl font-bold">
                    <div>Tyrone Tax & VAT</div>
                    <div>Specialists</div>
                </div>
                <p className="mb-5">
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
