import React from 'react'

import SubPageHero from '../components/SubPageHero'

const AboutUsPage = () => {
  return (
    
    <div>
      <SubPageHero
        title="About Us"
        subtitle="Have a question or want to schedule a meeting? We'd love to hear from you."
        imageUrl="/aboutus.jpg"
        showButton={false}
      />
      <span className="text-5xl">Hello World</span>
      </div>
  )
}

export default AboutUsPage
