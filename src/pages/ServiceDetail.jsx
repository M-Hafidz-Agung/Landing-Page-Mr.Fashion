import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Factory, Truck, Layers, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage, translations } from '../context/LanguageContext';

export default function ServiceDetail() {
    const { id } = useParams();
    const { t, language } = useLanguage();

    const getServiceData = (lang, slug) => {
        const items = translations[lang].services.items;
        const commonImg = {
            'production': '/images/production.jpg',
            'supply-chain': '/images/supply-chain.jpg',
            'sourcing': '/images/sourcing.jpg'
        };

        const mapSlugToKey = {
            'production': 'production',
            'supply-chain': 'supply',
            'sourcing': 'sourcing'
        };

        const key = mapSlugToKey[slug];
        if (!key || !items[key]) return null;

        const item = items[key];

        let icon = <Factory size={64} />;
        if (slug === 'supply-chain') icon = <Truck size={64} />;
        if (slug === 'sourcing') icon = <Layers size={64} />;

        return {
            ...item,
            image: commonImg[slug],
            icon: icon,
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
            <div className="relative h-[60vh] bg-stone-900 overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
                <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
                    <Link to="/services" className="text-pink-400 hover:text-pink-300 flex items-center gap-2 mb-8 font-medium transition-colors w-fit">
                        <ArrowLeft size={20} /> {t.detail.back}
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-pink-600 w-20 h-1.5 mb-8 rounded-full" />
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">{service.title}</h1>
                        <p className="text-stone-200 text-xl max-w-2xl leading-relaxed font-light">{service.desc}</p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Detailed Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg text-stone-600 max-w-none"
                        >
                            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">{t.detail.overview}</h3>
                            <p className="leading-relaxed whitespace-pre-line text-lg">{service.longDesc}</p>
                        </motion.div>

                        {/* Process Section - Narrative */}
                        {service.processDescription && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-cream-50 p-8 md:p-12 rounded-3xl border border-stone-100">
                                <div className="order-2 md:order-1">
                                    <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                                        {language === 'en' ? 'Why Choose Our Process?' : 'Mengapa Memilih Proses Kami?'}
                                    </h3>
                                    <div className="bg-pink-600 w-16 h-1 mb-6 rounded-full" />
                                    <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-line">
                                        {service.processDescription}
                                    </p>
                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                        <img
                                            src={service.processImage || service.image}
                                            alt="Process"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 to-transparent mix-blend-multiply" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Extended Details Section */}
                        {service.extendedContent && (
                            <div className="space-y-12">
                                {service.extendedContent.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />

                                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                            <div className="md:w-1/3">
                                                <h3 className="text-2xl font-serif font-bold text-stone-900 leading-tight">
                                                    {section.title}
                                                </h3>
                                                <div className="h-1 w-12 bg-pink-200 mt-4 rounded-full" />
                                            </div>
                                            <div className="md:w-2/3">
                                                <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-line">
                                                    {section.content}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Key Features / Advantages - Grid */}
                        {service.keyFeatures && (
                            <div className="bg-cream-50 p-10 rounded-3xl border border-stone-100">
                                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">{t.detail.advantages}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                    {service.keyFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex flex-col gap-3">
                                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-pink-600 mb-2">
                                                <CheckCircle size={24} />
                                            </div>
                                            <h4 className="font-bold text-stone-900">{feature.title}</h4>
                                            <p className="text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-stone-900 text-cream-50 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                                <h3 className="text-2xl font-serif font-bold mb-4 text-white relative z-10">{t.detail.interested} {service.title}?</h3>
                                <p className="text-stone-400 mb-8 text-sm relative z-10 leading-relaxed">
                                    {t.detail.interestedDesc}
                                </p>
                                <Link to="/contact" className="group block w-full py-4 bg-white text-stone-900 text-center rounded-xl font-bold hover:bg-pink-50 transition-all relative z-10 flex items-center justify-center gap-2">
                                    {t.detail.contactNow}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Additional Service Navigation (Optional) */}
                            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                                <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider text-opacity-50">
                                    {language === 'en' ? 'Other Services' : 'Layanan Lainnya'}
                                </h4>
                                <nav className="flex flex-col gap-3">
                                    {['production', 'supply-chain', 'sourcing'].map(s => {
                                        if (s === id) return null; // Don't show current
                                        const label = s === 'production' ? (language === 'en' ? 'Garment Production' : 'Produksi Garmen') :
                                            s === 'supply-chain' ? (language === 'en' ? 'Supply Chain' : 'Rantai Pasok') :
                                                (language === 'en' ? 'Material Sourcing' : 'Pencarian Bahan');
                                        return (
                                            <Link key={s} to={`/services/${s}`} className="text-stone-600 hover:text-pink-600 font-medium transition-colors flex items-center justify-between group">
                                                {label}
                                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-pink-400" />
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
