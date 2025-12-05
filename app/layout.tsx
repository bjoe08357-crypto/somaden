import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Soma Den | Culinary Web3 Experience',
  description:
    'Soma Den blends modern fine dining with SOMA ($SOMA), a utility token for exclusive real-world experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-night text-white antialiased">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          {/* Ambient Background Glows */}
          <div className="fixed -top-40 -left-40 h-96 w-96 rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
          <div className="fixed top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
          
          <Navbar />
          <main className="flex-1 pt-28 pb-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
