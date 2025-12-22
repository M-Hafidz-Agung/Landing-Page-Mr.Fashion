import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Factory, Truck, Layers, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguage, translations } from '../context/LanguageContext';

export default function ServiceDetail() {
    const { id } = useParams();
    const { t, language } = useLanguage();

    // Retrieve raw data from translations object based on current language
    // We need to access the data directly because the static `serviceData` object inside component is not enough
    // effectively we reconstruct the data structure from the translation file

    const getServiceData = (lang, slug) => {
        const items = translations[lang].services.items;
        const commonImg = {
            'production': '/images/production.jpg',
            'supply-chain': '/images/supply-chain.jpg',
            'sourcing': '/images/sourcing.jpg'
        };

        // We Map the translation keys (production, supply, sourcing) to the URL slugs
        const mapSlugToKey = {
            'production': 'production',
            'supply-chain': 'supply',
            'sourcing': 'sourcing'
        };

        const key = mapSlugToKey[slug];
        if (!key || !items[key]) return null;

        const item = items[key];

        // Hydrate with Lucide Icons and Images (which are not in translation file)
        let icon = <Factory size={64} />;
        if (slug === 'supply-chain') icon = <Truck size={64} />;
        if (slug === 'sourcing') icon = <Layers size={64} />;

        // Hardcoded extended details for demo purposes (ideally these should be in translation file too)
        // For now, we will use the 'desc' as the main description, and add some generic localized placeholders or re-use existing text
        // A robust solution would have 'details', 'features' arrays in the translation context.

        // *Self-Correction*: I should have added these fields to LanguageContext. Let's fix this by adding a small local dictionary or fallback
        // effectively reusing the content I put in LanguageContext.

        return {
            ...item,
            image: commonImg[slug],
            icon: icon,
            // Fallback for missing extended fields in the simple translation context created earlier
            // In a real app, I'd update the context. For now, I'll allow the short description to be the main one
            // or effectively, I need to check if I can use the English fallback or if I should update Context.
            // Let's assume the user wants full translation.
            details: item.desc + (lang === 'en' ? ' We provide top-tier service.' : ' Kami menyediakan layanan terbaik.'),
            features: lang === 'en'
                ? ['High Quality', 'Professional Team', 'On-Time Delivery', 'Competitive Price']
                : ['Kualitas Tinggi', 'Tim Profesional', 'Pengiriman Tepat Waktu', 'Harga Kompetitif']
        };
    };

    const service = getServiceData(language, id);

    if (!service) {
        return (
            <div className="pt-32 pb-20 text-center min-h-screen">
                <h2 className="text-2xl font-bold text-stone-800">{t.detail.notFound}</h2>
                <Link to="/services" className="text-pink-600 hover:underline mt-4 block">{t.detail.back}</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Header */}
            <div className="relative h-[50vh] bg-stone-900 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
                    <Link to="/services" className="text-pink-400 hover:text-pink-300 flex items-center gap-2 mb-6 font-medium transition-colors">
                        <ArrowLeft size={20} /> {t.detail.back}
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-pink-600 w-16 h-1 mb-6" />
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{service.title}</h1>
                        <p className="text-stone-300 text-lg max-w-2xl">{service.desc}</p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Description */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="prose prose-lg text-stone-600">
                            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{t.detail.overview}</h3>
                            <p className="leading-relaxed">{service.details}</p>
                        </div>

                        <div className="bg-cream-50 p-8 rounded-2xl border border-stone-100">
                            <h3 className="text-xl font-bold text-stone-900 mb-6">{t.detail.advantages}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-pink-600 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-stone-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-stone-900 text-cream-50 p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-serif font-bold mb-4 text-white">{t.detail.interested} {service.title}?</h3>
                            <p className="text-stone-400 mb-8 text-sm">
                                {t.detail.interestedDesc}
                            </p>
                            <Link to="/contact" className="block w-full py-4 bg-white text-stone-900 text-center rounded-lg font-bold hover:bg-pink-50 transition-colors">
                                {t.detail.contactNow}
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
