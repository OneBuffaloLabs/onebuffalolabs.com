// --- Next ---
import type { Metadata } from 'next';

// Define the structure for page-specific metadata
interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[]; // Always treat keywords as an array for easier merging
  urlPath?: string; // The path of the page, e.g., "/labs"
}

// --- Base Metadata ---
const BASE_URL = 'https://www.onebuffalolabs.com';
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
 * @param pageMeta - Page-specific metadata overrides.
 * @returns A Next.js Metadata object.
 */
export function generateMetadata({
  title,
  description,
  keywords = [], // Default to an empty array
  urlPath = '',
}: PageMetadata = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageUrl = `${BASE_URL}${urlPath}`;

  // Combine default and page-specific keywords, ensuring no duplicates
  const allKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])];

  return {
    title: {
      template: `%s | ${SITE_NAME}`,
      default: DEFAULT_TITLE,
    },
    ...(title && { title: title }),
    description: pageDescription,
    keywords: allKeywords,

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
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
      images: [DEFAULT_OG_IMAGE],
    },
    metadataBase: new URL(BASE_URL),
    // Add the Google AdSense meta tag here within the 'other' property
    other: {
      'google-adsense-account': 'ca-pub-9488377852201328',
    },
  };
}
