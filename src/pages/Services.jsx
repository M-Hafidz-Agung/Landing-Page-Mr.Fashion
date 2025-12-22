import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Truck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: 1,
            slug: 'production',
            title: t.services.items.production.title,
            icon: <Factory size={48} />,
            description: t.services.items.production.desc,
            image: '/images/production.jpg'
        },
        {
            id: 2,
            slug: 'supply-chain',
            title: t.services.items.supply.title,
            icon: <Truck size={48} />,
            description: t.services.items.supply.desc,
            image: '/images/supply-chain.jpg'
        },
        {
            id: 3,
            slug: 'sourcing',
            title: t.services.items.sourcing.title,
            icon: <Layers size={48} />,
            description: t.services.items.sourcing.desc,
            image: '/images/sourcing.jpg'
        }
    ];

    return (
        <div className="pt-20 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-pink-600 font-medium tracking-widest uppercase mb-2">{t.services.subtitle}</h2>
                    <h3 className="font-serif text-4xl font-bold text-stone-900">{t.services.title}</h3>
                    <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
                        {t.services.desc}
                    </p>
                </div>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-pink-900/10 mix-blend-multiply z-10" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center text-pink-600 mb-6 font-bold">
                                    {service.icon}
                                </div>
                                <h4 className="text-3xl font-serif font-bold text-stone-900 mb-4">{service.title}</h4>
                                <p className="text-stone-600 text-lg leading-relaxed">
                                    {service.description}
                                </p>
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-block mt-8 px-6 py-3 border border-stone-300 rounded-full font-medium hover:bg-stone-900 hover:text-white transition-all"
                                >
                                    {t.services.cta}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
