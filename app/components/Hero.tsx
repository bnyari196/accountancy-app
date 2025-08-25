import React from 'react'

const Hero = () => {
  return (
    <div
        className="hero min-h-screen bg-cover bg-center m-0 p-0"
        style={{
            backgroundImage:
            "url(/Omagh.jpg)",
        }}
        >
        <div className="hero-overlay top-0"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <span className="mb-5 text-6xl font-bold">Tyrone Tax & VAT Specialists</span>
                <p className="mb-5">
                    Helping local businesses and individuals with self-assessment, VAT returns, bookkeeping and more - delivered with a personal touch.
                </p>
                <button className="btn btn-primary">Book a Free Consultation</button>
            </div>
        </div>  
    </div>
  )
}

export default Hero
