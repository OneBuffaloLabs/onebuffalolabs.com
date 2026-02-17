// --- Next ---
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCube,
  faCloud,
  faEnvelope,
  faScrewdriverWrench,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'One Buffalo Prints | Open-Source 3D Models',
  description:
    'Free, open-source 3D models and parametric OpenSCAD designs from One Buffalo Labs. Built in the 716.',
  keywords: [
    '3d printing',
    'open source',
    'openscad',
    'parametric design',
    'stl files',
    'maker',
    'buffalo ny',
  ],
  urlPath: '/labs/one-buffalo-prints',
});

// --- PAGE COMPONENT ---
export default function OneBuffaloPrintsPage() {
  return (
    <div className='w-full bg-[var(--obl-dark-blue)] text-white font-sans min-h-screen'>
      <div className='relative max-w-5xl mx-auto px-8 py-16 pt-28'>
        {/* Background Gradients to match the Labs page */}
        <div
          className='absolute inset-0 z-0 opacity-10 pointer-events-none'
          style={{
            background:
              'radial-gradient(circle at 20% 20%, var(--obl-blue) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--obl-red) 0%, transparent 40%)',
          }}
        />

        <main className='relative z-10'>
          {/* --- HERO SECTION --- */}
          <div className='text-center mb-16'>
            <div className='max-w-3xl mx-auto mb-8 bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/labs/one-buffalo-prints-banner.webp'
                alt='One Buffalo Prints Banner'
                width={1280}
                height={400}
                className='w-full h-auto'
                priority
              />
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Heavy Accumulation. Free Downloads.
            </h1>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
              Whether it&apos;s a perfectly toleranced bracket to fix a broken tool, a weird desk
              toy, or a massive statue, we are constantly pushing plastic through the extruders.
              Instead of hoarding these files, we&apos;re dropping them all right here for you to
              download, print, and remix.
            </p>
          </div>

          {/* --- THE PHILOSOPHY --- */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            <div className='bg-white/5 border border-white/10 p-8 rounded-lg'>
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className='text-3xl text-[var(--obl-blue)] mb-4'
              />
              <h2 className='text-2xl font-bold mb-3'>The OpenSCAD Philosophy</h2>
              <p className='text-gray-400 leading-relaxed'>
                Sharing an STL file is great, but it&apos;s like sharing a baked cake without the
                recipe. Whenever possible, we provide the original, parametric OpenSCAD source code.
                This gives you the power to tweak dimensions, adjust tolerances for your specific
                printer, and adapt the parts to fit your exact needs.
              </p>
            </div>

            <div className='bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col justify-center'>
              <h2 className='text-2xl font-bold mb-6 text-center'>Where to get the files</h2>
              <div className='flex flex-col gap-4'>
                <a
                  href='https://github.com/OneBuffaloLabs/one-buffalo-prints'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-between p-4 bg-black/30 border border-white/10 rounded hover:border-[var(--obl-blue)] transition-colors'>
                  <span className='flex items-center text-lg font-semibold'>
                    <FontAwesomeIcon icon={faGithub} className='text-2xl mr-3' />
                    GitHub Repository
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className='text-gray-500' />
                </a>

                <a
                  href='https://makerworld.com/en/@Bana0615'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-between p-4 bg-black/30 border border-white/10 rounded hover:border-[#00E59B] transition-colors'>
                  <span className='flex items-center text-lg font-semibold'>
                    <FontAwesomeIcon icon={faCube} className='text-2xl mr-3' />
                    MakerWorld Profile
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className='text-gray-500' />
                </a>

                <a
                  href='https://www.crealitycloud.com/user/2867011039'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-between p-4 bg-black/30 border border-white/10 rounded hover:border-[#1E90FF] transition-colors'>
                  <span className='flex items-center text-lg font-semibold'>
                    <FontAwesomeIcon icon={faCloud} className='text-2xl mr-3' />
                    Creality Cloud Profile
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className='text-gray-500' />
                </a>
              </div>
            </div>
          </div>

          {/* --- COMMERCIAL / CUSTOM WORK CTA --- */}
          <div className='mt-20 p-8 md:p-12 bg-gradient-to-br from-black/60 to-black/30 border border-[var(--obl-red)]/30 rounded-2xl text-center'>
            <h2 className='text-3xl font-bold mb-4'>Need something custom?</h2>
            <p className='text-gray-300 max-w-2xl mx-auto mb-8 text-lg'>
              All of our open-source models are licensed under CC BY-NC-SA 4.0, which means they are
              strictly for non-commercial use. If you want to sell physical prints of our designs,
              or if you need a proprietary 3D part engineered from scratch for your business, we can
              help.
            </p>
            <Link
              href='/#contact'
              className='inline-flex items-center px-8 py-3 bg-[var(--obl-red)] hover:bg-red-700 text-white font-bold rounded transition-colors text-lg'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
              Contact the Lab
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
