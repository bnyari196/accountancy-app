'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiAlarmOn } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  const items = [
    {
      icon: <CiAlarmOn className="mr-2" />,
      text: 'Mon - Sun: 8:30am - 5pm',
    },
    {
      icon: <TbPhoneCall className="mr-2" />,
      text: '074 8573 1689',
    },
    {
      icon: <TfiEmail className="mr-2" />,
      text: 'tamas.nyari04@gmail.com',
    },
    {
      icon: <FaWhatsapp className="mr-2" />,
      text: 'WhatsApp',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="p-2 bg-rose-900 text-white overflow-hidden md:sticky top-0 z-50">
      {/* Mobile view (animated) */}
      <div className="flex justify-center items-center h-10 md:hidden relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute flex items-center justify-center w-full"
          >
            <span className="flex items-center justify-center text-center">
              {items[currentIndex].icon}
              {items[currentIndex].text}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop view (static items) */}
      <div className="hidden md:flex items-center justify-center gap-6">
        {items.map((item, index) => (
          <span key={index} className="flex items-center">
            {item.icon}
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
