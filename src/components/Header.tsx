'use client'

import React, { useEffect, useState } from 'react';
import { X, Menu } from 'lucide-react';
import { useTheme } from '@/components/contexts/ThemeContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={` ${isDark ? 'bg-black text-white' : 'bg-white'}`}>

    <div className={`w-full max-w-[1440px] mx-auto ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='flex justify-between items-center py-4 px-4 md:px-8'>
        {/* Logo */}
        <div className='flex items-center w-[50%] md:w-[20%]'>
          <div className={`text-2xl font-bold cursor-pointer transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
            Logo
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center justify-center w-[60%]'>
          <nav className='flex space-x-8'>
            <a href="#pricing" className={`font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              Pricing
            </a>
            <a href="#browse-history" className={`font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              Browse History
            </a>
            <a href="#features" className={`font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>
              Features
            </a>
          </nav>
        </div>

        {/* Theme Toggle & Hamburger */}
        <div className='flex items-center justify-end space-x-4 w-[50%] md:w-[20%]'>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-7 rounded-full p-1 transition-all duration-300 ease-in-out ${isDark ? 'bg-gray-700' : 'bg-blue-200'} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer`}
            aria-label="Toggle theme"
          >
            <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-yellow-100'}`} />
            <div className={`relative w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ${isDark ? 'translate-x-7 bg-black' : 'translate-x-0 bg-white'} flex items-center justify-center`}>
              {/* Sun Icon */}
              <svg className={`w-3 h-3 text-yellow-500 absolute transition-all duration-300 ${isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`} fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z..."
                  clipRule="evenodd"
                />
              </svg>

              {/* Moon Icon */}
              <svg className={`w-3 h-3 text-blue-400 absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707..." />
              </svg>
            </div>

            {/* Decorative Stars */}
            <div className={`absolute top-1 right-2 w-1 h-1 bg-blue-300 rounded-full transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`absolute top-3 right-4 w-0.5 h-0.5 bg-blue-400 rounded-full transition-opacity duration-300 delay-100 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
          </button>

          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {menuOpen ? <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-700'}`} /> : <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-700'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-lg`}>
        <div className='p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700'>
          <div className={`text-lg font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Menu</div>
          <button onClick={toggleMenu}><X className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-700'}`} /></button>
        </div>
        <nav className='flex flex-col p-4 space-y-4'>
          <a href="#pricing" className={`font-medium ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Pricing</a>
          <a href="#browse-history" className={`font-medium ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Browse History</a>
          <a href="#features" className={`font-medium ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}>Features</a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-30" onClick={toggleMenu} />
      )}
    </div>
    </div>
  );
};

export default Header;
