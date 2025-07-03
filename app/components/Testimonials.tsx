'use client'
import React, { useState } from 'react'

const testimonials = [
    {
      name: "Holden Caulfield",
      role: "Senior Product Designer",
      text: `Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard.`,
    },
    {
      name: "Jane Doe",
      role: "Marketing Manager",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: "John Smith",
      role: "CEO",
      text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ];

const Testimonials = () => {

    const [index, setIndex] = useState(0);

    const prevTestimonial = () =>
      setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const nextTestimonial = () =>
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  
    const { name, role, text } = testimonials[index];

    return (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center relative">
              <h1 className="pb-5 text-5xl">Testimonials</h1>
    
              {/* Quote icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
    
              {/* Testimonial Text */}
              <p className="leading-relaxed text-lg">{text}</p>
    
              <span className="inline-block h-1 w-10 rounded bg-rose-900 mt-8 mb-6"></span>
    
              {/* Name & Role */}
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                {name}
              </h2>
              <p className="text-gray-500">{role}</p>
    
              {/* Navigation buttons */}
              <div className="flex justify-center mt-8 space-x-6">
                <button
                  onClick={prevTestimonial}
                  className="bg-rose-900 text-white px-4 py-2 rounded hover:bg-rose-700 transition"
                >
                  Previous
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-rose-900 text-white px-4 py-2 rounded hover:bg-rose-700 transition"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }

export default Testimonials
