'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
    {
      name: "Robert D.",
      role: "Local Sole Trader",
      text: "Tyrone Tax helped me with my first Self-Assessment as a new Sole Trader. Thomas made the process simple, organised my books, and picked up expenses I would've missed. Friendly, reliable, and good value.",
    },
    {
      name: "Michael K.",
      role: "Local VAT Registered Sole Trader",
      text: "Thomas has been tremendous help keeping me on the straight and narrow with my books. He's always quick to respond to any questions and has made the whole process much easier than it was before.",
    },
    // Add more testimonials as needed
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const prevTestimonial = () =>
      setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const nextTestimonial = () =>
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  
    const { name, role, text } = testimonials[index];

    return (
        <section className="py-8 bg-gray-50">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-rose-900 mb-4">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-rose-900 mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
              <FaQuoteLeft className="text-4xl text-rose-900/20 mb-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                    {text}
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                    <p className="text-rose-900">{role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-rose-900/10 hover:bg-rose-900 hover:text-white transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-rose-900/10 hover:bg-rose-900 hover:text-white transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Testimonials
