// --- Next ---
import type { Metadata } from 'next';
// --- Components ---
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// --- Fonts ---
import { Geist, Geist_Mono } from 'next/font/google';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Styles ---
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
