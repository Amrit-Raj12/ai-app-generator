'use client';

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useTheme } from './contexts/ThemeContext';
import { motion } from "framer-motion";

const MarqueeSection = () => {
     const { theme } = useTheme()
    const [isDark, setIsDark] = useState(false)
 
 const logos = [
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
    '/delta.png',
  ];

    useEffect(() => {
        setIsDark(theme === 'dark')
    }, [theme])

  return (
    <motion.div 
    initial={{ opacity: 0, x: -100, filter: "blur(8px)" }} // 👈 from left
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
    className=''>
    <section className={`relative ${isDark ? 'bg-black text-white' : 'bg-white text-black'} bg-black py-10 text-center overflow-hidden max-w-[900px] mx-auto`}>
      <h2 
      className="text-sm md:text-base font-medium mb-6 z-10 relative"
      >
        Over 50+ businesses trust us
      </h2>

      {/* Fade overlays */}
      <div className={`absolute top-0 left-0 w-24 h-full bg-gradient-to-r ${isDark ? 'from-black to-transparent' : 'from-white to-transparent'} z-20 pointer-events-none`} />
      <div className={`absolute top-0 right-0 w-24 h-full bg-gradient-to-l ${isDark ? 'from-black to-transparent' : 'from-white to-transparent'} z-20 pointer-events-none`} />

      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex items-center space-x-16 px-6 max-w-[1260px] mx-auto relative">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-36 h-12 relative grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={logo}
                alt={`Logo ${idx + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
    </motion.div>
  );
};

export default MarqueeSection;
