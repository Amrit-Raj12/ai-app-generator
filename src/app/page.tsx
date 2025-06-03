'use client'
import { useTheme } from "@/components/contexts/ThemeContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(theme === 'dark')
  }, [theme])

   useEffect(() => {
    const script = document.createElement('script');
    script.src = '/finisher-header.es5.min.js';
    script.async = true;

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
          background: '#201e30',
          particles: ['#fbfcca', '#d7f3fe', '#ffd0a7']
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
  }, []);


  return (
    <>
      {/* This div is required for finisher-header */}
      <div className="finisher-header" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

      <h1 style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
        Hello from Next.js
      </h1>
    </>
  );
}
