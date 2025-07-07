// --- Next ---
import type { Metadata } from 'next';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Components ---
import PortfolioPage from '@/components/PortfolioPage';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'Client Work & Portfolio',
  description:
    'Explore the complete portfolio of client projects by One Buffalo Labs, showcasing our expertise in web development, mobile apps, AI integration, and more.',
  keywords: [
    'portfolio',
    'client work',
    'case studies',
    'web development projects',
    'mobile app projects',
    'AI projects',
  ],
  urlPath: '/portfolio',
});

// --- PAGE COMPONENT ---
export default function PortfolioRoutePage() {
  return <PortfolioPage />;
}
