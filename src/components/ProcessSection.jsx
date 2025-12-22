import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Scissors, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProcessSection() {
    const { t } = useLanguage();

    const steps = [
        {
            icon: <PenTool size={32} />,
            title: t.process.step1Title,
            description: t.process.step1Desc
        },
        {
            icon: <Scissors size={32} />,
            title: t.process.step2Title,
            description: t.process.step2Desc
        },
        {
            icon: <Truck size={32} />,
            title: t.process.step3Title,
            description: t.process.step3Desc
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-pink-600 font-medium tracking-widest uppercase mb-2 text-sm">{t.process.subtitle}</h2>
                    <h3 className="font-serif text-3xl font-bold text-stone-900">{t.process.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center group p-6 rounded-2xl hover:bg-cream-50 transition-colors"
                        >
                            <div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center text-stone-700 mb-6 group-hover:bg-pink-100 group-hover:text-pink-600 transition-all shadow-sm">
                                {step.icon}
                            </div>
                            <h4 className="text-xl font-serif font-bold text-stone-900 mb-3">{step.title}</h4>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
