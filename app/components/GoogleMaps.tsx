import React from 'react'

const GoogleMaps = () => {
  return (
    <div className="w-full md:w-1/2">
    <div className="h-full w-full rounded-lg overflow-hidden shadow-md">
      {/* Replace the iframe src with your actual Google Maps embed link */}
      <iframe
        title="Based in Omagh"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d556.7519164864761!2d-7.305707528202867!3d54.600546721666696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1751915500694!5m2!1sen!2suk" // Replace this with your map embed
        className="w-full h-[400px] md:h-full border-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  )
}

export default GoogleMaps
