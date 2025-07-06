import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: "One Buffalo Labs | Powering Buffalo's Digital Future",
    template: '%s | One Buffalo Labs',
  },
  description:
    'One Buffalo Labs is a cutting-edge tech agency specializing in web development, app development, AI integration, and SEO optimization. We design, develop, and optimize digital solutions for businesses in Buffalo and beyond, driving growth and efficiency.',
  keywords: [
    'One Buffalo Labs',
    'Buffalo tech agency',
    'web development Buffalo',
    'app development Buffalo',
    'AI integration Buffalo',
    'SEO services Buffalo',
    'custom websites Buffalo',
    'mobile app development',
    'digital strategy',
    'e-commerce development',
    'CMS development',
    'machine learning solutions',
    'chatbots',
    'digital marketing Buffalo',
    'Next.js development',
    'React development',
  ],
  openGraph: {
    // Open Graph metadata for social media sharing
    title: "One Buffalo Labs | Powering Buffalo's Digital Future",
    description:
      'One Buffalo Labs is a cutting-edge tech agency specializing in web development, app development, AI integration, and SEO optimization. We design, develop, and optimize digital solutions for businesses in Buffalo and beyond, driving growth and efficiency.',
    url: 'https://www.onebuffalolabs.com',
    siteName: 'One Buffalo Labs',
    images: [
      {
        url: 'https://www.onebuffalolabs.com/logos/one-buffalo-cartoon.jpg',
        width: 1200,
        height: 630,
        alt: 'One Buffalo Labs - Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    // Twitter Card metadata
    card: 'summary_large_image',
    title: "One Buffalo Labs | Powering Buffalo's Digital Future",
    description:
      'One Buffalo Labs is a cutting-edge tech agency specializing in web development, app development, AI integration, and SEO optimization. We design, develop, and optimize digital solutions for businesses in Buffalo and beyond, driving growth and efficiency.',
    creator: '@onebuffalolabs',
    images: ['https://www.onebuffalolabs.com/logos/one-buffalo-cartoon.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
