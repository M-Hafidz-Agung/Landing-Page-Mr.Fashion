import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-cream-50 font-sans text-stone-800 selection:bg-pink-200">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
