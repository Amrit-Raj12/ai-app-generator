'use client'
import { useTheme } from "@/components/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import CursorTrail from "@/components/CursorTrail";
import { ArrowUpRight } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useRouter } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";


export default function Home() {
  const { theme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsDark(theme === 'dark')
  }, [theme])

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/finisher-header.es5.min.js';
    script.async = true;

    const bg = isDark ? '#000000' : '#ffffff'
    const particlesBg = isDark ? '#ffffff' : '#814AC8'

    script.onload = () => {
      // @ts-ignore
      new FinisherHeader({
        count: 100,
        size: {
          min: 2,
          max: 8,
          pulse: 0
        },
        speed: {
          x: { min: 0, max: 0.4 },
          y: { min: 0, max: 0.6 }
        },
        colors: {
          background: bg,
          particles: [particlesBg]
        },
        blending: 'overlay',
        opacity: {
          center: 1,
          edge: 0
        },
        skew: -2,
        shapes: ['c']
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isDark]);


  return (
    <div className="custom-cursor">
      {/* This div is required for finisher-header */}
      <div className="finisher-header" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>
      <CustomCursor />
      <CursorTrail/>
      <div className="flex items-center flex-col justify-center text-center h-screen max-w-[900px] w-full mx-auto">
        <WordRotate words={["Prompt.", "Generate.", "Deliver."]} className={`text-4xl`} />
        <motion.h1
          initial={{ opacity: 0, x: -100, filter: "blur(8px)" }} // 👈 from left
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${isDark ? "text-white" : "text-black"} md:text-[70px] text-[45px] font-bold`}
        >
          Intelligent Automation for Modern Businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100, filter: "blur(8px)" }} // 👈 from left
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className={`${isDark ? "text-white" : "text-black"} md:text-[18px] text-[16px]`}
        >
          Xtract brings AI automation to your fingertips & streamline tasks.
        </motion.p>

        <motion.div 
        initial={{ opacity: 0, x: -100, filter: "blur(8px)" }} // 👈 from left
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="flex gap-[20px] lg:mt-[25px] mt-[15px]">
        {/* <ShimmerButton className="shadow-2xl flex itemms-center justify-center gap-2" isDark>
          <p className={`whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight ${isDark ? "text-white from-white to-slate-900/10" : "text-white"} lg:text-lg`}>
            Start Generate
          </p>
          <ArrowUpRight className="text-white"/>
        </ShimmerButton> */}
        <InteractiveHoverButton className={` bg-[#814AC8] ${isDark ? "text-white": "text-white"}`} onClick={()=> router.push("/generate")}>Start Generate</InteractiveHoverButton>
        <ShimmerButton className="shadow-2xl ">
          <span className={`whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight ${isDark ? "text-white from-white to-slate-900/10" : "text-white"} lg:text-lg`}>
            Services
          </span>
        </ShimmerButton>
        </motion.div>

      </div>
    </div>
  );
}
