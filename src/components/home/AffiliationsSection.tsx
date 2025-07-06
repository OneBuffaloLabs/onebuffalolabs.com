'use client';

import React from 'react';
import Image from 'next/image';

// --- Data for our partners ---
const partners = [
  {
    name: 'Silo City Labs',
    // Replace with actual logo URL when available
    logoUrl: 'https://placehold.co/400x200/FFFFFF/171717?text=Silo+City+Labs',
    websiteUrl: 'https://silocitylabs.com/',
  },
  {
    name: 'Tin Roof',
    // Replace with actual logo URL when available
    logoUrl: 'https://placehold.co/400x200/FFFFFF/171717?text=Tin+Roof',
    websiteUrl: 'https://tinroof.co/',
  },
  {
    name: 'Silo City Games',
    // Replace with actual logo URL when available
    logoUrl: 'https://placehold.co/400x200/FFFFFF/171717?text=Silo+City+Games',
    websiteUrl: 'https://silocitygames.com/',
  },
];

interface PartnerLogoProps {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

// --- Individual Partner Logo Component ---
const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logoUrl, websiteUrl }) => (
  <a
    href={websiteUrl}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={`Visit ${name}`}
    className='group block'>
    <div className='relative flex h-32 items-center justify-center rounded-lg bg-white/5 p-6 transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-[0_0_15px_var(--obl-blue)]'>
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

// --- Main Section Component ---
const AffiliationsSection = () => {
  return (
    <section id='partners' className='w-full bg-[var(--obl-dark-blue)] py-16 sm:py-24 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white'>
            Proud <span className='text-[var(--obl-blue)]'>Partners.</span>
          </h2>
          <p className='text-lg text-gray-400 mt-4 max-w-3xl mx-auto'>
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
