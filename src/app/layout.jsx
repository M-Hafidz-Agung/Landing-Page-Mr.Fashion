import { Providers } from './providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
    title: 'Mr. Fashion',
    description: 'Premium Custom Tailoring in Bandung',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-cream-50 font-sans text-stone-800 selection:bg-pink-200">
                <Providers>
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-grow pt-16">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
