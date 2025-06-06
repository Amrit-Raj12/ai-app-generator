'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import Link from 'next/link';
import ToggleButton from './ToggleButton';
import { ArrowRightToLine } from 'lucide-react';
import ToggleButtonMobile from './ToggleButtonMobile';
import { motion } from 'framer-motion';

export default function NewHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const { theme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(theme === 'dark');
    }, [theme]);

    // Animation variants
    const fadeDownVariant = {
        hidden: { opacity: 0, y: -30 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <header className={`${isDark ? 'bg-[#000000]' : 'bg-white'} shadow-lg py-4 sticky top-0 z-50`}>
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    variants={fadeDownVariant}
                >
                    <Link href="/" className={`${isDark ? 'text-gray-100' : 'text-[#814AC8]'} flex items-center`}>
                        <svg className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707.707m12.728 0l.707.707M6.343 17.657l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <span className="text-2xl font-bold">MyBrand</span>
                    </Link>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={fadeDownVariant}
                    className="md:hidden flex justify-center gap-2.5 items-center"
                >
                    <ToggleButtonMobile />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`${isDark ? 'text-gray-100' : 'text-[#814AC8]'} focus:outline-none transition-colors duration-300`}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className={`${isDark ? 'text-gray-100' : 'text-[#000000]'} flex items-center space-x-8`}>
                        {['Home', 'Generate', 'Pricing', 'Browse History', 'Contact'].map((item, index) => (
                            <motion.li
                                key={item}
                                initial="hidden"
                                animate="visible"
                                custom={index + 3}
                                variants={fadeDownVariant}
                            >
                                <Link
                                    href={`/${item === 'Home' ? '' : item.toLowerCase().replace(/\s+/g, '')}`}
                                    className="hover:text-[#814AC8] transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            </motion.li>
                        ))}

                        {/* Services Dropdown */}
                        <motion.li
                            className="group relative"
                            initial="hidden"
                            animate="visible"
                            custom={8}
                            variants={fadeDownVariant}
                        >
                            <Link href="/services" className="hover:text-[#814AC8] transition-colors duration-300">Services</Link>
                            <ul className={`${isDark ? 'text-gray-100' : 'text-[#000000]'} absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 rounded-md w-48 transition-all duration-300`}>
                                {['Service 1', 'Service 2', 'Service 3'].map((service, i) => (
                                    <li key={i}>
                                        <Link href="#" className="text-[#000000] block px-4 py-2 hover:text-[#814AC8] hover:bg-gray-100">{service}</Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.li>

                        {/* Sign In button */}
                        <motion.li
                            initial="hidden"
                            animate="visible"
                            custom={9}
                            variants={fadeDownVariant}
                        >
                            <Link href="/login" className="bg-[#814AC8] text-white px-4 py-2 rounded-md flex gap-2.5 items-center">
                                <ArrowRightToLine size={16} /> Sign In
                            </Link>
                        </motion.li>

                        {/* Theme toggle */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={10}
                            variants={fadeDownVariant}
                        >
                            <ToggleButton />
                        </motion.div>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu */}
            {
                mobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`${isDark ? 'text-gray-100 bg-transparent' : 'text-[#000000]'} hover:text-[#814AC8] md:hidden bg-gray-50 border-t border-gray-200 transition-all duration-300`}
                    >
                        <ul className="px-4 py-2">
                            <li><Link href="#" className="block py-2 hover:text-[#814AC8]">Home</Link></li>
                            <li><Link href="#" className="block py-2 hover:text-[#814AC8]">About</Link></li>
                            <li>
                                <button
                                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                    className="block w-full text-left py-2 hover:text-[#814AC8] focus:outline-none"
                                >
                                    Services
                                </button>
                                {servicesDropdownOpen && (
                                    <ul className="pl-4">
                                        <li><Link href="#" className="block py-2 hover:text-[#814AC8]">Service 1</Link></li>
                                        <li><Link href="#" className="block py-2 hover:text-[#814AC8]">Service 2</Link></li>
                                        <li><Link href="#" className="block py-2 hover:text-[#814AC8]">Service 3</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link href="#" className="block py-2 hover:text-[#814AC8]">Contact</Link></li>
                            <li>
                                <Link href="#" className="bg-[#814AC8] py-2 text-white rounded-md text-center transition-colors duration-300 flex justify-center gap-2.5 items-center">
                                    <ArrowRightToLine size={16} /> Sign In
                                </Link>
                            </li>
                        </ul>
                    </motion.nav>
                )
            }
        </header>
    );
}
