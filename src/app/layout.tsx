// --- Next ---
import type { Metadata } from 'next';
import Script from 'next/script';
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

        {/* Google Analytics Scripts - Only loads in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy='afterInteractive'
              src='https://www.googletagmanager.com/gtag/js?id=G-BQSX9D3LMP'
            />
            <Script id='google-analytics' strategy='afterInteractive'>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BQSX9D3LMP');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
