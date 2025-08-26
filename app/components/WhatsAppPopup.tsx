'use client'
import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Start animation shortly after making visible
      setTimeout(() => setIsAnimating(true), 50)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    // Hide after animation completes (increased to match new duration)
    setTimeout(() => setIsVisible(false), 500)
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447485731689?text=Hi, I have a question about your accounting services.', '_blank')
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-white rounded-lg shadow-lg border border-gray-200 p-3 relative transform transition-all duration-500 ease-out ${
        isAnimating 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0'
      }`}>
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 text-gray-500 transition-colors"
          aria-label="Close"
        >
          <FaTimes className="w-3 h-3" />
        </button>
        
        <div 
          onClick={handleWhatsAppClick}
          className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
        >
          <FaWhatsapp className="w-6 h-6 text-green-500" />
          <div className="w-0.5 h-6 bg-green-500"></div>
          <p className="text-sm text-gray-800 font-medium">Contact us</p>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppPopup