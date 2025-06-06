'use client'
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServiceSection from "@/components/ServiceSection";
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';


export default function Home() {
   const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "0px 0px -100px 0px" });

  const marqueeRef = useRef(null);
  const isMarqueeInView = useInView(marqueeRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <>
   {/* Hero Section with Motion */}
        <HeroSection />
      {/* Marquee Section with Motion */}
      <motion.div
        ref={marqueeRef}
        initial={{ opacity: 0, x: -100, filter: "blur(8px)" }}
        animate={isMarqueeInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <MarqueeSection />
      </motion.div>
      {/* Service Section with Motion */}
      <motion.div
        // ref={marqueeRef}
        initial={{ opacity: 0, x: -100, filter: "blur(8px)" }}
        animate={isMarqueeInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <ServiceSection />
      </motion.div>
    </>
  );
}
