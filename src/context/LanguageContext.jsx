import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            contact: 'Contact',
        },
        hero: {
            subtitle: 'Premium Custom Tailoring',
            title: 'Tailored to',
            titleHighlight: 'Perfection',
            desc: 'Experience the art of dressing with Mr. Fashion. We create exclusive high-quality garments designed specifically for your unique style and needs.',
            ctaServices: 'Our Services',
            ctaContact: 'Contact Us',
        },
        about: {
            title: 'About Mr. Fashion',
            heading: 'Trusted Professional Garment Partner in Bandung.',
            desc: 'Established in 2022, Mr. Fashion has grown to become one of the leading custom garment service providers in Bandung. We combine traditional expert tailoring skills with modern production management.',
            years: 'Years of',
            experience: 'Experience',
            points: [
                'Premium & Durable Materials',
                'Detailed & Precise Craftsmanship',
                'On-Time Production'
            ],
            cta: 'Free Consultation'
        },
        process: {
            subtitle: 'Our Workflow',
            title: 'From Sketch to Reality',
            step1Title: 'Design & Consultation',
            step1Desc: 'We translate your vision into detailed technical sketches, ensuring every style preference is met.',
            step2Title: 'Production & Tailoring',
            step2Desc: 'Our expert team cuts and sews selected fabrics with high precision, utilizing modern garment techniques.',
            step3Title: 'Delivery & Fitting',
            step3Desc: 'Finished garments are shipped securely. We also provide final fitting sessions to guarantee 100% satisfaction.',
        },
        services: {
            subtitle: 'Our Capabilities',
            title: 'Comprehensive Solutions',
            desc: 'End-to-end services designed to streamline your fashion business, from raw material to finished product.',
            cta: 'Learn More',
            items: {
                production: {
                    title: 'Garment Production',
                    desc: 'High-capacity manufacturing tailored to your specifications. From pattern making to final quality control, we ensure every piece meets international standards.'
                },
                supply: {
                    title: 'Supply Chain Solutions',
                    desc: 'Seamless logistics and inventory management. We handle the complexities of distribution so you can focus on growing your brand.'
                },
                sourcing: {
                    title: 'Material Sourcing',
                    desc: 'Access to a global network of premium fabric suppliers. We source sustainable, high-quality materials that elevate your product line.'
                }
            }
        },
        cta: {
            title: 'Ready to Realize Your Design?',
            desc: "Don't let your design ideas remain just sketches. We are ready to help you produce your dream clothing with the highest quality standards.",
            btnServices: 'View Services',
            btnContact: 'Contact Us',
        },
        contact: {
            heroTitle: 'Realize Your',
            heroTitleHighlight: 'Dream Style',
            heroDesc: 'Ready to elevate your look? Contact us for a consultation or discuss your custom clothing needs. We are here to bring your vision to life.',
            whatsapp: 'Chat via WhatsApp',
            formName: 'Name',
            formMessage: 'Message',
            formBtn: 'Send Email',
            formNote: 'Or use the WhatsApp button for a faster response.',
        },
        footer: {
            desc: 'Your professional garment partner in Bandung. We prioritize quality, timeliness, and customer satisfaction in every stitch.',
            quickLinks: 'Quick Links',
            services: 'Our Services',
            contact: 'Contact Us',
            copyright: 'All Rights Reserved.',
            serviceList: [
                'Office Uniform Production',
                'Mass Production (Garment)',
                'Fashion Design Consultation'
            ]
        },
        detail: {
            back: 'Back to Services',
            overview: 'In-Depth Overview',
            advantages: 'Key Advantages',
            interested: 'Interested in',
            interestedDesc: 'Discuss your specific requirements with our team and get a tailored quote.',
            contactNow: 'Contact Us Now',
            notFound: 'Service Not Found'
        }
    },
    id: {
        nav: {
            home: 'Beranda',
            services: 'Layanan',
            contact: 'Kontak',
        },
        hero: {
            subtitle: 'Penjahitan Kustom Premium',
            title: 'Dijahit dengan',
            titleHighlight: 'Sempurna',
            desc: 'Rasakan seni berpakaian bersama Mr. Fashion. Kami menciptakan pakaian eksklusif berkualitas tinggi yang dirancang khusus untuk gaya dan kebutuhan unik Anda.',
            ctaServices: 'Layanan Kami',
            ctaContact: 'Hubungi Kami',
        },
        about: {
            title: 'Tentang Mr. Fashion',
            heading: 'Mitra Garmen Profesional Terpercaya di Bandung.',
            desc: 'Didirikan pada tahun 2022, Mr. Fashion telah berkembang menjadi salah satu penyedia layanan garmen kustom terkemuka di Bandung. Kami menggabungkan keahlian menjahit tradisional dengan manajemen produksi modern.',
            years: 'Tahun',
            experience: 'Pengalaman',
            points: [
                'Bahan Premium & Tahan Lama',
                'Pengerjaan Detail & Presisi',
                'Produksi Tepat Waktu'
            ],
            cta: 'Konsultasi Gratis'
        },
        process: {
            subtitle: 'Alur Kerja Kami',
            title: 'Dari Sketsa ke Realitas',
            step1Title: 'Desain & Konsultasi',
            step1Desc: 'Kami menerjemahkan visi Anda menjadi sketsa teknis mendetail, memastikan setiap preferensi gaya terpenuhi.',
            step2Title: 'Produksi & Penjahitan',
            step2Desc: 'Tim ahli kami memotong dan menjahit kain pilihan dengan presisi tinggi, menggunakan teknik garmen modern.',
            step3Title: 'Pengiriman & Fitting',
            step3Desc: 'Pakaian jadi dikirim dengan aman. Kami juga menyediakan sesi fitting akhir untuk menjamin kepuasan 100%.',
        },
        services: {
            subtitle: 'Kapabilitas Kami',
            title: 'Solusi Komprehensif',
            desc: 'Layanan menyeluruh yang dirancang untuk memperlancar bisnis fashion Anda, dari bahan baku hingga produk jadi.',
            cta: 'Pelajari Lebih Lanjut',
            items: {
                production: {
                    title: 'Produksi Garmen',
                    desc: 'Manufaktur berkapasitas tinggi yang disesuaikan dengan spesifikasi Anda. Dari pembuatan pola hingga kontrol kualitas akhir, kami memastikan setiap potong memenuhi standar internasional.'
                },
                supply: {
                    title: 'Solusi Rantai Pasok',
                    desc: 'Logistik dan manajemen inventaris yang mulus. Kami menangani kerumitan distribusi sehingga Anda dapat fokus mengembangkan merek Anda.'
                },
                sourcing: {
                    title: 'Pencarian Bahan',
                    desc: 'Akses ke jaringan global pemasok kain premium. Kami mencari bahan berkelanjutan dan berkualitas tinggi yang meningkatkan lini produk Anda.'
                }
            }
        },
        cta: {
            title: 'Siap Mewujudkan Desain Anda?',
            desc: "Jangan biarkan ide desain Anda hanya menjadi sketsa. Kami siap membantu Anda memproduksi pakaian impian dengan standar kualitas tertinggi.",
            btnServices: 'Lihat Layanan',
            btnContact: 'Hubungi Kami',
        },
        contact: {
            heroTitle: 'Wujudkan',
            heroTitleHighlight: 'Gaya Impianmu',
            heroDesc: 'Siap untuk meningkatkan penampilan Anda? Hubungi kami untuk konsultasi atau mendiskusikan kebutuhan pakaian kustom Anda. Kami di sini untuk mewujudkan visi Anda.',
            whatsapp: 'Chat via WhatsApp',
            formName: 'Nama',
            formMessage: 'Pesan',
            formBtn: 'Kirim Email',
            formNote: 'Atau gunakan tombol WhatsApp untuk respon lebih cepat.',
        },
        footer: {
            desc: 'Mitra garmen profesional Anda di Bandung. Kami memprioritaskan kualitas, ketepatan waktu, dan kepuasan pelanggan dalam setiap jahitan.',
            quickLinks: 'Tautan Cepat',
            services: 'Layanan Kami',
            contact: 'Hubungi Kami',
            copyright: 'Hak Cipta Dilindungi.',
            serviceList: [
                'Produksi Seragam Kantor',
                'Produksi Massal (Garmen)',
                'Konsultasi Desain Fashion'
            ]
        },
        detail: {
            back: 'Kembali ke Layanan',
            overview: 'Tinjauan Mendalam',
            advantages: 'Keunggulan Utama',
            interested: 'Tertarik dengan',
            interestedDesc: 'Diskusikan kebutuhan spesifik Anda dengan tim kami dan dapatkan penawaran yang disesuaikan.',
            contactNow: 'Hubungi Kami Sekarang',
            notFound: 'Layanan Tidak Ditemukan'
        }
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'id' : 'en');
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
