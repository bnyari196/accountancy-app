import React from 'react'

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-rose-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-rose-900 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Managing your finances and staying compliant with HMRC can feel overwhelming—but it 
            <span className="font-semibold text-rose-900"> doesn&apos;t have to be</span>. 
            At <span className="font-semibold text-rose-900">Tyrone Tax & VAT Specialists</span>, we provide expert, tailored support across 
            <span className="font-semibold text-rose-900"> tax, VAT, accounting, and more</span>, 
            helping individuals and small businesses stay 
            <span className="font-semibold text-rose-900"> organised, confident, and in control</span> of their finances.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
