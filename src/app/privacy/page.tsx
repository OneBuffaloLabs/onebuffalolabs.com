// --- Next ---
import type { Metadata } from 'next';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Components ---
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description:
    'Learn how One Buffalo Labs collects, uses, and protects your personal information. Your privacy is important to us.',
  urlPath: '/privacy',
});

// --- PAGE COMPONENT ---
export default function PrivacyRoutePage() {
  return <PrivacyPolicyPage />;
}
