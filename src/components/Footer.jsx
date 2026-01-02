'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-stone-900 text-stone-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* 1. Brand & Description */}
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-white mb-6">Mr. Fashion</h3>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6">
                            {t.footer.desc}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t.footer.quickLinks}</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-pink-500 transition-colors">{t.nav.home}</Link></li>
                            <li><Link href="/services" className="hover:text-pink-500 transition-colors">{t.nav.services}</Link></li>
                            <li><Link href="/contact" className="hover:text-pink-500 transition-colors">{t.nav.contact}</Link></li>
                        </ul>
                    </div>

                    {/* 3. Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t.footer.services}</h4>
                        <ul className="space-y-3 text-sm text-stone-400">
                            {t.footer.serviceList.map((service, i) => (
                                <li key={i}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t.footer.contact}</h4>
                        <ul className="space-y-4 text-sm text-stone-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 text-pink-500" />
                                <span>Jl. Galaxy VI no.87<br />West Java, Indonesia 40115</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-pink-500" />
                                <span>089656474322</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-pink-500" />
                                <span>rahmatfashionapparel@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-500">
                    &copy; {new Date().getFullYear()} Mr. Fashion. {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
