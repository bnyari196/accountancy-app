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
      icon: <CiAlarmOn className="text-lg" />,
      text: 'Mon - Sun: 8:30am - 5pm',
      href: null, // No link for business hours
      clickable: false,
    },
    {
      icon: <TbPhoneCall className="text-lg" />,
      text: '074 8573 1689',
      href: 'tel:07485731689',
      clickable: true,
    },
    {
      icon: <TfiEmail className="text-lg" />,
      text: 'tyronetax@outlook.com',
      href: 'mailto:tyronetax@outlook.com',
      clickable: true,
    },
    {
      icon: <FaWhatsapp className="text-lg" />,
      text: 'WhatsApp',
      href: 'https://wa.me/447485731689', // Replace with your actual WhatsApp number
      clickable: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  interface BannerItemProps {
    item: {
      icon: React.ReactNode;
      text: string;
      href: string | null;
      clickable: boolean;
    };
    className?: string;
  }

  const BannerItem = ({ item, className = "" }: BannerItemProps) => {
    const content = (
      <span className={`flex items-center ${item.clickable ? 'hover:text-rose-200 transition-colors duration-200 cursor-pointer' : ''} ${className}`}>
        <span className="flex items-center justify-center bg-rose-700 p-1.5 rounded-full mr-2">
          {item.icon}
        </span>
        {item.text}
      </span>
    );

    if (item.clickable && item.href) {
      return (
        <a 
          href={item.href}
          target={item.href.startsWith('https') ? '_blank' : '_self'}
          rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
          className="block"
        >
          {content}
        </a>
      );
    }

    return content;
  };

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
            <BannerItem 
              item={items[currentIndex]} 
              className="text-center justify-center w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop view (static items) */}
      <div className="hidden md:flex items-center justify-center gap-6">
        {items.map((item, index) => (
          <BannerItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
