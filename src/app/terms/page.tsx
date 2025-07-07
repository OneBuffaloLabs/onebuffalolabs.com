// --- Next ---
import type { Metadata } from 'next';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Components ---
import TermsPage from '@/components/TermsPage';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'Terms and Conditions',
  description: 'Read the terms and conditions for using the One Buffalo Labs website and services.',
  urlPath: '/terms',
});

// --- PAGE COMPONENT ---
export default function TermsRoutePage() {
  return <TermsPage />;
}
