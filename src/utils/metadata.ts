// --- Next ---
import type { Metadata } from 'next';

// Define the structure for page-specific metadata
interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  urlPath?: string;
  imageUrl?: string;
  robots?: Metadata['robots'];
}

// --- Base Metadata ---
const BASE_URL = 'https://onebuffalolabs.com';
const SITE_NAME = 'One Buffalo Labs';
const TWITTER_CREATOR = '@onebuffalolabs';
const DEFAULT_TITLE = "One Buffalo Labs | Powering Buffalo's Digital Future";
const DEFAULT_DESCRIPTION =
  'One Buffalo Labs is a cutting-edge tech agency specializing in web development, app development, AI integration, and SEO optimization. We design, develop, and optimize digital solutions for businesses in Buffalo and beyond, driving growth and efficiency.';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logos/one-buffalo-cartoon.jpg`;
const DEFAULT_KEYWORDS = [
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
];

/**
 * Generates metadata for a page, merging with site-wide defaults.
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  urlPath = '',
  imageUrl,
  robots,
}: PageMetadata = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageUrl = `${BASE_URL}${urlPath}`;
  const allKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])];

  // Determine which image to use: the specific page image or the default one.
  const ogImageUrl = imageUrl ? `${BASE_URL}${imageUrl}` : DEFAULT_OG_IMAGE;

  return {
    title: {
      template: `%s | ${SITE_NAME}`,
      default: DEFAULT_TITLE,
    },
    ...(title && { title: title }),
    description: pageDescription,
    keywords: allKeywords,
    ...(robots && { robots: robots }),
    manifest: '/manifest.json',
    appleWebApp: {
      title: SITE_NAME,
      capable: true,
      statusBarStyle: 'black-translucent',
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title || 'One Buffalo Labs'} - Digital Solutions`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: TWITTER_CREATOR,
      images: [ogImageUrl],
    },
    metadataBase: new URL(BASE_URL),
    other: {
      'google-adsense-account': 'ca-pub-9488377852201328',
    },
  };
}
