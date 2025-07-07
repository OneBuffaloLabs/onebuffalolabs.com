'use client';

// --- React ---
import React from 'react';
// --- Next ---
import Image from 'next/image';

// --- Data for our partners ---
const partners = [
  {
    name: 'Silo City Labs',
    logoUrl: 'https://placehold.co/400x200/171717/FFFFFF?text=Silo+City+Labs', // Updated placeholder for better contrast
    websiteUrl: 'https://silocitylabs.com/',
  },
  {
    name: 'Tin Roof',
    logoUrl: '/partners/tin-roof.webp',
    websiteUrl: 'https://tinroof.co/',
  },
  {
    name: 'Silo City Games',
    logoUrl: 'https://placehold.co/400x200/171717/FFFFFF?text=Silo+City+Games', // Updated placeholder for better contrast
    websiteUrl: 'https://silocitygames.com/',
  },
];

interface PartnerLogoProps {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

// --- Individual Partner Logo Component (Updated Styling) ---
const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logoUrl, websiteUrl }) => (
  <a
    href={websiteUrl}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={`Visit ${name}`}
    className='group block'>
    {/* Updated card styling for light background */}
    <div className='relative flex h-32 items-center justify-center rounded-lg bg-white p-6 border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-transparent hover:shadow-[var(--obl-blue)]/20 hover:-translate-y-1'>
      <Image
        src={logoUrl}
        alt={`${name} logo`}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-contain transition-all duration-300 ease-in-out filter grayscale group-hover:grayscale-0'
      />
    </div>
  </a>
);

// --- Main Section Component (Updated Styling) ---
const AffiliationsSection = () => {
  return (
    // Changed background to bg-gray-50
    <section id='partners' className='w-full bg-gray-50 py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          {/* Updated text colors for light background */}
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900'>
            Proud <span className='text-[var(--obl-blue)]'>Partners.</span>
          </h2>
          <p className='text-lg text-gray-600 mt-4 max-w-3xl mx-auto'>
            We believe in the power of collaboration. Our partnerships with these innovative local
            organizations strengthen our ecosystem and drive shared success.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;
