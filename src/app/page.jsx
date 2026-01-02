'use client';

import React from 'react';
import Hero from '../components/Hero';
import ThreeBackground from '../components/ThreeBackground';
import ProcessSection from '../components/ProcessSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="relative">
            <ThreeBackground />

            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Company Profile (About Us) - Expanded */}
            <section className="py-12 bg-cream-50 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Image/Visual Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/hero-about.jpg"
                                    alt="Tailoring Workshop"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-stone-100 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-serif font-bold text-pink-600">3+</div>
                                    <div className="text-sm font-medium text-stone-600">
                                        {t.about.years}<br />{t.about.experience}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-pink-600 font-medium tracking-widest uppercase mb-3 text-sm">{t.about.title}</h2>
                            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-stone-900 mb-5 leading-tight">
                                {t.about.heading}
                            </h3>
                            <p className="text-stone-600 text-base leading-relaxed mb-5">
                                {t.about.desc}
                            </p>
                            <div className="space-y-3 mb-8">
                                {t.about.points.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-green-600" size={18} />
                                        <span className="text-stone-700 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contact"
                                className="inline-block px-6 py-3 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-800 transition-colors text-sm"
                            >
                                {t.about.cta}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <ProcessSection />

            {/* 4. CTA / Featured Preview */}
            <section className="py-16 bg-pink-900 text-cream-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
                    <p className="text-pink-100 text-base mb-8 max-w-2xl mx-auto">
                        {t.cta.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/services"
                            className="px-6 py-3 bg-cream-50 text-pink-900 rounded-full font-bold hover:bg-white transition-colors text-sm"
                        >
                            {t.cta.btnServices}
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 border border-pink-200 text-cream-50 rounded-full font-bold hover:bg-pink-800 transition-colors text-sm"
                        >
                            {t.cta.btnContact}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
