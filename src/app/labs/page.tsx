// --- Next ---
import type { Metadata } from 'next';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Components ---
import OpenSourcePage from '@/components/OpenSourcePage';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'Labs & Open Source Initiatives',
  description:
    'Explore the passion projects, experimental tech, and open-source contributions from the team at One Buffalo Labs. Discover our commitment to innovation and community.',
  keywords: [
    'open source',
    'labs',
    'tech incubator',
    'experimental projects',
    'SiloCityLabs',
    'Next.js projects',
    'React projects',
    'AI experiments',
  ],
  urlPath: '/labs',
});

// --- PAGE COMPONENT ---
export default function LabsRoutePage() {
  return <OpenSourcePage />;
}
