'use client';

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
                    desc: 'High-capacity manufacturing tailored to your specifications. From pattern making to final quality control, we ensure every piece meets international standards.',
                    longDesc: "We are a leading garment production partner ready to handle production of all scales, from exclusive boutiques to corporate mass production. Our facilities are equipped with modern machinery and supported by a skilled workforce dedicated to quality. We understand that every stitch reflects your brand's reputation, which is why we implement strict quality control systems at every stage of production. With flexible Minimum Order Quantities (MOQ) and competitive pricing, we are the ideal partner to grow your fashion business.",
                    processDescription: "Our production line is a masterpiece of efficiency and precision. Unlike traditional factories, we employ a lean manufacturing approach that minimizes waste and maximizes throughput without compromising quality. Every garment begins with a digital pattern ensuring 100% accuracy in sizing. Our cutting floor is automated for sharp, clean edges, while our sewing lines are organized by specialization—ensuring that complex details are handled only by experts. The result is a garment that not only looks premium but is built to last, delivered on time, every time.",
                    processImage: '/images/production-process.png',
                    extendedContent: [
                        {
                            title: 'Production Flexibility for Local Brands',
                            content: 'We understand the challenges faced by local brands and fashion startups in Indonesia: high stock and specific budget constraints. Therefore, Mr. Fashion offers highly friendly MOQ (Minimum Order Quantity). We are ready to serve production from small scales (starting from 2 dozen per design) to thousands of pcs for uniforms. Our team consists of local Bandung tailors who have inherited serving skills for generations, ensuring every stitch has a "feel" and neatness that full-automatic machines find hard to replicate.'
                        },
                        {
                            title: 'Product Specialization',
                            content: 'Bandung is the Paris van Java, a dynamic fashion hub. We have specialist teams for various categories:\n\n• Modest Fashion & Hijab: Our tailors deeply understand the nuances of cutting gamis, tunics, and modest yet stylish headscarves.\n• Streetwear & Distro: Experienced in plastisol printing, discharge, and 3D computer embroidery for distro-quality t-shirts and hoodies.\n• Uniforms & Shirts: Detailed workmanship for office uniforms, PDH/PDL, with fitting that is comfortable for all-day wear.'
                        },
                        {
                            title: 'Personal Quality Control',
                            content: 'At the MSME scale, we have an advantage that big factories lack: personal attention. Every piece of clothing is inspected directly by our production head (Supervisor) before folding. We ensure no loose threads (clean trimming), buttons are securely attached, and sizing matches the chart. If there are defects, we guarantee a 100% hassle-free repair. This is our commitment to maintaining your trust.'
                        }
                    ]
                },
                supply: {
                    title: 'Supply Chain Solutions',
                    desc: 'Seamless logistics and inventory management. We handle the complexities of distribution so you can focus on growing your brand.',
                    longDesc: "Managing fashion logistics can be complex and time-consuming. Our supply chain solutions are designed to free you from that burden. We integrate every step from factory to warehouse to your customer's hands (or retail partners). Our system ensures transparency and timeliness, reducing lead times and optimizing costs. Whether you are a local startup or an international brand, our network creates a streamlined path for your products.",
                    processDescription: "We don't just move boxes; we optimize flow. Our supply chain strategy relies on real-time data integration, allowing us to predict bottlenecks before they happen. By strategically locating our warehousing hubs and partnering with top-tier freight providers, we ensure that your products travel the most efficient route possible. Our strength lies in our adaptability—whether you need rapid air freight for a fashion week launch or cost-effective ocean freight for bulk seasonals, our system scales to your needs seamlessly.",
                    processImage: '/images/supply-process.png',
                    extendedContent: [
                        {
                            title: 'Warehousing & Fulfillment',
                            content: 'For MSMEs, renting a warehouse and hiring packing staff is a huge cost. Our fulfillment service in Bandung is here as a cost-effective solution. You simply send your finished stock to our location (secure and flood-free shophouse/ruko). When orders come in from Shopee, Tokopedia, or TikTok Shop, our team will pick the items, pack them neatly (we can add your brand\'s greeting cards/stickers), and hand them over to the courier. You focus on selling, let us handle the packing.'
                        },
                        {
                            title: 'Simple Stock Management',
                            content: 'No need for complex and expensive software. We provide weekly stock reports via WhatsApp or Google Sheets that are easy to understand. We will "nudge" you if best-seller stocks are running low, so you can restock production immediately. We take care of your stock like our own, arranged neatly on steel racks to prevent dampness or damage.'
                        },
                        {
                            title: 'Complete Expedition Support',
                            content: 'Our location is strategic in Bandung, close to various logistics outlets (JNE, J&T, SiCepat, Cargo Darat). For large shipments (kodian/bales) outside Java, we have partnerships with land and sea cargo that are much cheaper than regular expeditions, helping you suppress the selling price to resellers outside Java.'
                        }
                    ]
                },
                sourcing: {
                    title: 'Material Sourcing',
                    desc: 'Access to a global network of premium fabric suppliers. We source sustainable, high-quality materials that elevate your product line.',
                    longDesc: "Product quality starts with the raw materials. Our sourcing team has access to a global network of premium fabric suppliers, trims, and accessories. We help you find exactly what you envision, from organic cottons to technical performance fabrics. We negotiate the best prices and ensure continuity of supply, so your production never halts due to material shortages.",
                    processDescription: "Sourcing is an art of discovery and validation. We bypass the middlemen and go straight to the mills. Our team rigorously tests every fabric batch for colorfastness, shrinkage, and durability before it even reaches the cutting table. We pride ourselves on our ethical network—partnering only with suppliers who meet strict environmental and labor standards. This means when you choose our materials, you are not just choosing quality; you are choosing sustainability and responsibility as the foundation of your brand.",
                    processImage: '/images/sourcing-process.png',
                    extendedContent: [
                        {
                            title: 'Direct Access to Textile Hubs',
                            content: 'Our location in Bandung is a strategic advantage. We have daily access to the largest textile centers like Cigondewah, Tamim, and Otto Iskandardinata (Otista). Our team knows exactly which shop sells the best Cotton Combed, who has the most complete Linen stock, or where to find unique vintage lace. We scour the market to find fabric samples for you, sending physical sample books to your home so you can feel the handfeel directly before mass production.'
                        },
                        {
                            title: 'Fabric Customization (Dyeing & Knitting)',
                            content: 'Want a fabric color that isn\'t generic? We work with local dyeing factories in the Majalaya and Cimahi areas. You can request specific colors matching your brand\'s Pantone with a reasonable minimum order (usually looking at 1 roll or +/- 25kg). We can also help develop knitting fabrics with specific textures or patterns for those of you who want to stand out.'
                        },
                        {
                            title: 'Price & Quality Transparency',
                            content: 'Many manufacturers play with fabric prices. At Mr. Fashion, we are transparent. We give fabric grade options according to your budget: whether you want distro standard (Cotton 24s/30s Reactive) or economic standard (Carded/TC). We explain the pros and cons upfront—like shrinkage or color fading—so there are no disappointments later. We ensure the purchased fabric is Grade A, not rejects (BS items), unless specifically requested for a low budget.'
                        }
                    ]
                }
            },
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
                    desc: 'Manufaktur berkapasitas tinggi yang disesuaikan dengan spesifikasi Anda. Dari pembuatan pola hingga kontrol kualitas akhir, kami memastikan setiap potong memenuhi standar internasional.',
                    longDesc: "Kami adalah mitra produksi garmen terdepan yang siap menangani segala skala produksi, dari butik eksklusif hingga produksi massal korporat. Fasilitas kami dilengkapi dengan mesin-mesin modern dan didukung oleh tenaga kerja terampil yang berdedikasi pada kualitas. Kami memahami bahwa setiap jahitan mencerminkan reputasi brand Anda, itulah sebabnya kami menerapkan sistem kontrol kualitas yang ketat di setiap tahap produksi. Dengan Minimum Order Quantity (MOQ) yang fleksibel dan harga kompetitif, kami adalah partner ideal untuk mengembangkan bisnis fashion Anda.",
                    processDescription: "Lini produksi kami adalah mahakarya efisiensi dan presisi. Tidak seperti pabrik konvensional, kami menerapkan pendekatan lean manufacturing yang meminimalkan limbah dan mempercepat output tanpa mengorbankan kualitas. Setiap pakaian dimulai dengan pola digital yang memastikan akurasi ukuran 100%. Lantai pemotongan kami otomatis untuk hasil yang tajam dan bersih, sementara lini penjahitan kami diatur berdasarkan spesialisasi—memastikan detail rumit hanya ditangani oleh ahlinya. Hasilnya adalah pakaian yang tidak hanya terlihat premium tetapi juga tahan lama, dikirim tepat waktu, setiap saat.",
                    processImage: '/images/production-process.png',
                    extendedContent: [
                        {
                            title: 'Fleksibilitas Produksi untuk Brand Lokal',
                            content: 'Kami mengerti tantangan brand lokal dan startup fashion di Indonesia: stok menumpuk dan modal terbatas. Oleh karena itu, Mr. Fashion menawarkan fleksibilitas MOQ (Minimum Order Quantity) yang sangat bersahabat. Kami siap melayani produksi skala kecil (mulai dari 2 lusin per desain) hingga ribuan pcs untuk seragam. Tim penjahit kami adalah warga lokal Bandung yang telah mewarisi keahlian menjahit secara turun-temurun, memastikan setiap jahitan memiliki "rasa" dan kerapian yang sulit ditiru oleh mesin otomatis penuh.'
                        },
                        {
                            title: 'Spesialisasi Produk',
                            content: 'Bandung adalah paris van java, pusat mode yang dinamis. Kami memiliki tim spesialis untuk berbagai kategori:\n\n• Modest Fashion & Hijab: Penjahit kami sangat paham nuansa pemotongan gamis, tunik, dan kerudung yang syar\'i namun modis.\n• Streetwear & Distro: Sablon plastisol, discharge, hingga bordir komputer 3D untuk kaos dan hoodie kualitas distro.\n• Seragam & Kemeja: Pengerjaan detail untuk seragam kantor, PDH/PDL, dengan fitting yang pas dan nyaman dipakai bekerja seharian.'
                        },
                        {
                            title: 'Quality Control Personal',
                            content: 'Di skala UMKM, kami punya keunggulan yang tidak dimiliki pabrik besar: perhatian personal. Setiap potong pakaian diperiksa langsung oleh kepala produksi kami sebelum dilipat. Kami memastikan agar trimming bersih, kancing terpasang kuat, dan ukuran sesuai chart. Jika ada cacat, kami garansi perbaikan 100% secara langsung. Ini adalah komitmen kami untuk menjaga kepercayaan Anda.'
                        }
                    ]
                },
                supply: {
                    title: 'Solusi Rantai Pasok',
                    desc: 'Logistik dan manajemen inventaris yang mulus. Kami menangani kerumitan distribusi sehingga Anda dapat fokus mengembangkan merek Anda.',
                    longDesc: "Mengelola logistik fashion bisa menjadi rumit dan memakan waktu. Solusi rantai pasok kami dirancang untuk membebaskan Anda dari beban tersebut. Kami mengintegrasikan setiap langkah dari pabrik ke gudang hingga ke tangan pelanggan (atau mitra retail). Sistem kami memastikan transparansi dan ketepatan waktu, mengurangi lead-time dan mengoptimalkan biaya. Baik Anda startup lokal maupun brand internasional, jaringan kami menciptakan jalur yang efisien untuk produk Anda.",
                    processDescription: "Kami tidak hanya memindahkan kotak; kami mengoptimalkan aliran. Strategi rantai pasok kami bergantung pada integrasi data real-time, memungkinkan kami memprediksi hambatan sebelum terjadi. Dengan menempatkan hub pergudangan kami secara strategis dan bermitra dengan penyedia logistik tingkat atas, kami memastikan produk Anda menempuh rute seefisien mungkin. Kekuatan kami terletak pada kemampuan adaptasi—baik Anda membutuhkan pengiriman udara cepat untuk peluncuran fashion week atau pengiriman laut hemat biaya untuk barang musiman massal, sistem kami berskala sesuai kebutuhan Anda dengan mulus.",
                    processImage: '/images/supply-process.png',
                    extendedContent: [
                        {
                            title: 'Gudang & Pemenuhan Pesanan (Fulfillment)',
                            content: 'Bagi UMKM, menyewa gudang sendiri dan menggaji staf packing adalah biaya besar. Layanan fulfillment kami di Bandung hadir sebagai solusi hemat biaya. Ketika ada pesanan masuk dari Shopee, Tokopedia, atau TikTok Shop Anda, tim kami yang akan mengambil barang, mengemasnya dengan rapi (bisa tambah kartu ucapan/stiker brand Anda), dan menyerahkannya ke kurir. Anda fokus jualan, biar kami yang urus packing.'
                        },
                        {
                            title: 'Manajemen Stok Sederhana',
                            content: 'Tidak perlu sofware yang rumit dan mahal. Kami memberikan laporan stok mingguan via WhatsApp atau Google Sheets yang mudah dipahami. Kami akan memberitahu anda jika stok produk best seller sudah menipis, sehingga anda bisa segera restock produksi. Kami menjaga stok Anda layaknya barang milik sendiri, disusun rapi di rak besi agar tidak lembab atau rusak.'
                        },
                        {
                            title: 'Dukungan Ekspedisi Lengkap',
                            content: 'Lokasi kami strategis di Bandung, dekat dengan berbagai gerai logistik (JNE, J&T, SiCepat, Cargo Darat). Untuk pengiriman dalam jumlah besar ke luar pulau, kami punya rekanan kargo darat dan laut yang jauh lebih murah daripada ekspedisi reguler, membantu anda menekan harga jual ke reseller di luar Jawa.'
                        }
                    ]
                },
                sourcing: {
                    title: 'Pencarian Bahan',
                    desc: 'Akses ke jaringan global pemasok kain premium. Kami mencari bahan berkelanjutan dan berkualitas tinggi yang meningkatkan lini produk Anda.',
                    longDesc: "Kualitas produk dimulai dari bahan baku. Tim sourcing kami memiliki akses ke jaringan global pemasok kain premium, trims, dan aksesoris. Kami membantu Anda menemukan apa yang Anda bayangkan, dari katun organik hingga kain performa teknis. Kami menegosiasikan harga terbaik dan memastikan kontinuitas pasokan, sehingga produksi Anda tidak pernah terhenti karena kekurangan bahan.",
                    processDescription: "Pencarian bahan adalah seni penemuan dan validasi. Kami memintas perantara dan langsung ke pabrik tekstil. Tim kami menguji setiap batch kain secara ketat untuk ketahanan warna, penyusutan, dan daya tahan sebelum mencapai meja potong. Kami bangga dengan jaringan etis kami—hanya bermitra dengan pemasok yang memenuhi standar lingkungan dan tenaga kerja yang ketat. Ini berarti ketika Anda memilih bahan kami, Anda tidak hanya memilih kualitas; Anda memilih keberlanjutan dan tanggung jawab sebagai fondasi brand Anda.",
                    processImage: '/images/sourcing-process.png',
                    extendedContent: [
                        {
                            title: 'Akses Langsung ke Pusat Kain',
                            content: 'Lokasi kami di Bandung adalah keuntungan strategis. Kami memiliki akses harian ke pusat tekstil terbesar seperti Cigondewah, Tamim, dan Otto Iskandardinata (Otista). Tim kami tahu persis toko mana yang menjual Cotton Combed terbaik, siapa yang punya stok Linen terlengkap, atau di mana mencari renda vintage yang unik. Kami blusukan mencarikan sample kain untuk Anda, mengirimkan buku sample fisik ke rumah Anda agar Anda bisa memegang langsung handfeel-nya sebelum produksi massal.'
                        },
                        {
                            title: 'Kustomisasi Kain (Celup & Knitting)',
                            content: 'Ingin warna kain yang tidak pasaran? Kami bekerja sama dengan pabrik celup lokal di area Majalaya dan Cimahi. Anda bisa request warna khusus sesuai Pantone brand Anda dengan minimum order yang masuk akal. Kami juga bisa membantu develop kain rajut (knitting) dengan tekstur atau corak tertentu untuk Anda yang ingin tampil beda.'
                        },
                        {
                            title: 'Transparansi Harga & Kualitas',
                            content: 'Di Mr. Fashion, kami transparan, kami memberikan opsi grade kain sesuai budget Anda: apakah ingin standar distro (Cotton 24s/30s Reactive) atau standar ekonomis (Carded/TC). Kami jelaskan plus-minusnya di awal misalnya soal penyusutan atau ketahanan warna, agar tidak ada kekecewaan di belakang. Kami memastikan kain yang dibeli adalah grade A, bukan kain kiloan BS (barang sisa) kecuali memang permintaan budget rendah.'
                        }
                    ]
                }
            },
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
