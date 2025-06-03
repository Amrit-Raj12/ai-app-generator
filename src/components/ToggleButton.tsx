'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

type ToggleOptionsType = 'light' | 'dark';

const TOGGLE_CLASSES =
  'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 cursor-pointer';

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const [selected, setSelected] = useState<ToggleOptionsType>('light');

  useEffect(() => {
    setSelected(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  const handleToggle = (option: ToggleOptionsType) => {
    if (option !== selected) {
      toggleTheme();
      setSelected(option);
    }
  };

  return (
    <div className="relative flex w-fit items-center rounded-full border border-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 overflow-hidden">
      <motion.div
        layout
        className={`absolute z-0 h-full w-1/2 bg-[#814AC8] rounded-full`}
        initial={false}
        animate={{ x: selected === 'dark' ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <button
        className={`${TOGGLE_CLASSES} ${selected === 'light' ? 'text-white' : 'text-gray-800 dark:text-slate-300'}`}
        onClick={() => handleToggle('light')}
      >
        <FiSun className="relative z-10" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selected === 'dark' ? 'text-white' : 'text-gray-800 dark:text-slate-300'}`}
        onClick={() => handleToggle('dark')}
      >
        <FiMoon className="relative z-10" />
        <span className="relative z-10">Dark</span>
      </button>
    </div>
  );
};

export default ToggleButton;
