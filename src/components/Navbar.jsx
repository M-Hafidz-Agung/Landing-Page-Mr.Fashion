import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t, language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.services, path: '/services' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream-50/90 backdrop-blur-md border-b border-stone-200/50 shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* 1. LEFT: Logo */}
                    <div className="flex-shrink-0 flex items-center w-1/4">
                        <Link to="/" className="font-serif text-2xl font-bold text-stone-800 tracking-tighter hover:text-pink-600 transition-colors">
                            Mr. Fashion
                        </Link>
                    </div>

                    {/* 2. CENTER: Navigation Links */}
                    <div className="hidden md:flex justify-center w-2/4">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors duration-200 relative group ${location.pathname === link.path ? 'text-pink-600' : 'text-stone-600 hover:text-pink-600'
                                        }`}
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 3. RIGHT: Language Toggle + Mobile Menu Button */}
                    <div className="hidden md:flex w-1/4 justify-end">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-300 hover:border-pink-500 hover:text-pink-600 transition-colors text-sm font-medium text-stone-700"
                        >
                            <Globe size={16} />
                            <span>{language === 'en' ? 'EN' : 'ID'}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button - Right Aligned on Mobile */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-stone-300 text-xs font-medium text-stone-700"
                        >
                            <Globe size={14} />
                            <span>{language === 'en' ? 'EN' : 'ID'}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-pink-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream-50 border-b border-stone-200 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                            ? 'text-pink-600 bg-pink-50'
                                            : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50/50'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
