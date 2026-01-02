'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 border border-pink-300 rounded-full text-pink-700 text-sm font-medium tracking-wide bg-cream-50/50 backdrop-blur-sm mb-6">
                        {t.hero.subtitle}
                    </span>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 leading-tight mb-6">
                        {t.hero.title} <br />
                        <span className="text-pink-600 italic relative inline-block">
                            {t.hero.titleHighlight}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-pink-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg text-stone-600 mb-10 leading-relaxed font-light">
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all hover:scale-105 shadow-lg"
                        >
                            {t.hero.ctaServices}
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-pink-50 hover:border-pink-200 transition-all hover:scale-105 shadow-sm"
                        >
                            {t.hero.ctaContact}
                        </Link>
                    </div>

                </motion.div>
            </div>

        </section>
    );
}
