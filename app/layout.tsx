import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Nunito } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'PrimeCare RCM Solutions',
  description: 'US-focused medical billing and revenue cycle management services from PrimeCare RCM Solutions.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-[var(--bg-soft)] text-[var(--navy)] antialiased font-body">
        <div className="relative overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
