'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

type ToggleOptionsType = 'light' | 'dark';

const ICON_BUTTON_CLASSES =
  'p-2 md:p-2.5 transition-colors relative z-10 cursor-pointer text-lg';

const ToggleButtonMobile = () => {
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
        className="absolute z-0 h-full w-1/2 bg-[#814AC8] rounded-full"
        initial={false}
        animate={{ x: selected === 'dark' ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <button
        className={`${ICON_BUTTON_CLASSES} ${selected === 'light' ? 'text-white' : 'text-gray-800 dark:text-slate-300'}`}
        onClick={() => handleToggle('light')}
        aria-label="Switch to light mode"
      >
        <FiSun className="relative z-10" />
      </button>
      <button
        className={`${ICON_BUTTON_CLASSES} ${selected === 'dark' ? 'text-white' : 'text-gray-800 dark:text-slate-300'}`}
        onClick={() => handleToggle('dark')}
        aria-label="Switch to dark mode"
      >
        <FiMoon className="relative z-10" />
      </button>
    </div>
  );
};

export default ToggleButtonMobile;
