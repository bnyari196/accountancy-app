import React from 'react'

import SubPageHero from '../components/SubPageHero'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

const AboutUsPage = () => {
  return (
    
    <div>
      <SubPageHero
        title="About Us"
        subtitle="Have a question or want to schedule a meeting? We'd love to hear from you."
        imageUrl="/aboutus.jpg"
        showButton={false}
      />
      <About
        title="About Tyrone Tax & Vat Specialists"
        paragraphs={[
          'Based in Omagh, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt porro beatae, quis natus doloremque dicta dolores totam. Porro perferendis, necessitatibus consequatur ratione quod rerum accusamus blanditiis ipsam qui iste.',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laboriosam quaerat repellendus quas nesciunt? Consectetur eum, amet fugit quo delectus eligendi voluptate itaque aperiam quae beatae a alias magnam excepturi!',
          'Transparency, trust, and technology are at the heart of everything we do.',
        ]}
        imageUrl="/about-us.jpg"
      />
      <Testimonials />
      </div>
  )
}

export default AboutUsPage
