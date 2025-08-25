import React from 'react'

import SubPageHero from '../components/SubPageHero'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

const AboutUsPage = () => {
  return (
    
    <div>
      <SubPageHero
        title="About Us"
        subtitle="Professional accounting services for individuals and small businesses across Tyrone and surrounding areas."
        imageUrl="/aboutus.jpg"
        showButton={false}
      />
      <About
        title="About Tyrone Tax & VAT Specialists"
        paragraphs={[
          'At Tyrone Tax & VAT Specialists, we are a trusted Omagh-based accounting firm dedicated to supporting individuals, freelancers, and small businesses across Tyrone and the surrounding areas. Our mission is simple: to make managing your finances, accounting, and tax obligations straightforward, accurate, and stress-free, so you can focus on growing your business with confidence.',
          
          'We offer a comprehensive range of accounting and financial services, including Bookkeeping & Accounts, Self-Assessment Tax Returns, VAT compliance, and Business Support & Advisory. With years of experience, we combine technical expertise with a friendly, approachable service. We take the time to understand your business, answer your questions clearly, and deliver personalised accounting solutions tailored to your unique needs.',
          
          'Our approach is built on three core principles: transparency, trust, and technology. Using the latest accounting software and tools, we ensure your finances are managed efficiently and accurately, while keeping you fully informed every step of the way. Whether it\'s handling bookkeeping, preparing self-assessment tax returns, managing VAT submissions, or providing business advice, we help clients make confident, informed decisions.',
          
          'We understand that every client is unique. That\'s why we provide customised accounting and tax support, rather than one-size-fits-all solutions. Our goal is to demystify accounting and tax matters, helping you understand your finances and make smarter business decisions.',
          
          'At Tyrone Tax & VAT Specialists, we believe professional accounting services don\'t have to be complicated or intimidating. We are here to make accounting, tax, and financial management approachable, reliable, and tailored to you.',
          
          'Discover how our accounting services and solutions can simplify your finances, ensure compliance, and give you peace of mind, so you can focus on what you do best: running and growing your business.'
        ]}
        imageUrl="/about-us.jpg"
      />
      <Testimonials />
    </div>
  )
}

export default AboutUsPage
