import React from 'react'

const GoogleMaps = () => {
  return (
    <div className="w-full md:w-1/2">
    <div className="h-full w-full rounded-lg overflow-hidden shadow-md">
      {/* Replace the iframe src with your actual Google Maps embed link */}
      <iframe
        title="Based in Omagh"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18488.91395432409!2d-7.31246805!3d54.60197999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485e290ac4711359%3A0x7780b860fee6fdd0!2sOmagh!5e0!3m2!1sen!2suk!4v1751995193147!5m2!1sen!2suk"
        className="w-full h-[400px] md:h-full border-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  )
}

export default GoogleMaps
