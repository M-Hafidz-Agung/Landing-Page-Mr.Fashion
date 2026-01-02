import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const whatsappNumber = "6289656474322"; // Replace with actual number
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Mr.%20Fashion,%20I%20am%20interested%20in%20your%20services.`;

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-cream-100 min-h-screen pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                            Realize Your <br />
                            <span className="text-pink-600">Dream Style</span>
                        </h2>
                        <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                            Ready to elevate your look? Contact us for a consultation or discuss your custom clothing needs. We are here to bring your vision to life.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <MessageSquare size={20} />
                            Chat via WhatsApp
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all" placeholder="Tell us what you need..."></textarea>
                            </div>
                            <button className="w-full py-3 bg-stone-900 text-white rounded-lg font-bold hover:bg-stone-800 transition-colors">
                                Send Email
                            </button>
                            <p className="text-center text-xs text-stone-400 mt-4">
                                Or use the WhatsApp button for a faster response.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
