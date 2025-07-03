import React from 'react'

const Hero = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(/Omagh.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Tyrone Tax & Vat Specialists</h1>
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
