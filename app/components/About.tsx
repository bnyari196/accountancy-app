import React from 'react'
import Image from 'next/image'

type AboutProps = {
  title: string
  paragraphs: string[]
  imageUrl?: string
}

const About: React.FC<AboutProps> = ({ title, paragraphs, imageUrl = '/images/about-us.jpg' }) => {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-[600px]">
      {/* Left side - Text with rose background */}
      <div className="w-full md:w-1/2 bg-rose-900 text-stone-100 px-8 py-16 md:px-12 lg:px-16">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 leading-tight">{title}</h2>
          <div className="space-y-6">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-lg leading-relaxed opacity-90 hover:opacity-100 transition-opacity">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="md:w-1/2 relative">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="About Us"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  )
}

export default About
