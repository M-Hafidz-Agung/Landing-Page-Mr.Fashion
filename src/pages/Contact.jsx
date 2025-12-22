import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen pt-20 pb-16 bg-cream-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Text & Key Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                            {t.contact.heroTitle} <br />
                            <span className="text-pink-600">{t.contact.heroTitleHighlight}</span>
                        </h1>
                        <p className="text-xl text-stone-500 mb-10 max-w-lg">
                            {t.contact.heroDesc}
                        </p>

                        <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100">
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20Mr.Fashion,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-200"
                            >
                                <MessageCircle size={24} />
                                {t.contact.whatsapp}
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form (Visual Only) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.formName}</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all placeholder-stone-400"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all placeholder-stone-400"
                                    placeholder="jane@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.formMessage}</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all placeholder-stone-400"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold text-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                {t.contact.formBtn}
                            </button>
                            <p className="text-center text-xs text-stone-400 mt-4">
                                *{t.contact.formNote}
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
