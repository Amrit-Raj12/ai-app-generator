'use client'
import { useTheme } from "@/components/contexts/ThemeContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(theme === 'dark')
  }, [theme])


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900 transition-colors">
      <h1 className={`text-3xl font-bold text-center sm:text-5xl  ${isDark ? 'text-white' : 'text-blue-500'}`}>
        Ai
      </h1>

    </div>
  );
}
