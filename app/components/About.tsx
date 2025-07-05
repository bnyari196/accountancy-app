import React from 'react'

const About = () => {
  return (
<div className="flex flex-col md:flex-row p-5 gap-8 text-stone-100">
  {/* Left side - Text */}
  <div className="w-full md:w-1/2 text-left bg-rose-900 rounded-lg">
    <h2 className="text-3xl font-bold mb-4 mx-2">About Us</h2>
    <p className="mx-2 font-semibold text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ullam dolores expedita sed unde iste dolorem illo in voluptatum esse totam ipsam et possimus non fugit debitis necessitatibus, dolor cumque.
    </p>
    <br />
    <p className="mx-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla reiciendis pariatur velit ea dolor aliquam consequuntur sit nemo rerum nobis optio, ipsam consectetur animi cumque itaque aliquid dolorem! Velit!
    </p>
    <br />
    <p className="mx-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem adipisci deleniti, aliquam temporibus provident amet magni, natus molestiae qui porro? Iure illum nobis aperiam placeat magnam tempora quam facere.
    </p>
  </div>

  {/* Right side - Image or placeholder */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
    <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
      <span className="text-gray-600">Image of Company</span>
    </div>
  </div>
</div>
  )
}

export default About
