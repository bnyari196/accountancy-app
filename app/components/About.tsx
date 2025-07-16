import React from 'react'
import Image from 'next/image'

type AboutProps = {
  title: string
  paragraphs: string[]
  imageUrl?: string
}

const About: React.FC<AboutProps> = ({ title, paragraphs, imageUrl = '/images/about-us.jpg' }) => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Left side - Text with rose background */}
      <div className="w-full md:w-1/2 bg-rose-900 text-stone-100 px-8 py-10 md:pl-5 md:pr-10">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        {paragraphs.map((para, idx) => (
          <p key={idx} className="mb-4 text-lg">
            {para}
          </p>
        ))}
      </div>

      {/* Right side - Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end items-center">
      <div className="relative w-full h-[400px] -ml-2">
          <Image
            src={imageUrl}
            alt="About"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default About
