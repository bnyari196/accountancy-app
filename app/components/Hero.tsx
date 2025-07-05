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
                <span className="mb-5 text-5xl font-bold">Tyrone Tax & Vat Specialists</span>
                <p className="mb-5">
                    Tyrone based small, friendly tax and Vat Specialist offering Free Consulations
                </p>
                <button className="btn btn-primary">Book a Free Consultation</button>
            </div>
        </div>  
    </div>
  )
}

export default Hero
