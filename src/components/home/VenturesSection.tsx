// --- React ---
import React from 'react';

// --- Next ---
import Link from 'next/link';
import Image from 'next/image';

// --- Types ---
interface Venture {
  id: string;
  name: string;
  description: string;
  ctaText: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  isExternal?: boolean;
}

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

// --- Constants ---
const VENTURES: Venture[] = [
  {
    id: 'snap-hinge',
    name: 'Snap Hinge Studios',
    description:
      'Building immersive digital experiences, interactive games, and pushing the boundaries of creative technical execution.',
    ctaText: 'Play the Games',
    href: 'https://snaphingestudios.com/',
    imageSrc: '/images/ventures/shs-logo.svg',
    imageAlt: 'Snap Hinge Studios Brand Logo',
    isExternal: true,
  },
  {
    id: '1bflo-prints',
    name: '1BfloPrints',
    description:
      'Our open-source 3D modeling division. Like a 716 lake-effect storm, we drop heavy, consistent, and free customizable designs for the 3D printing community.',
    ctaText: 'Explore the Lab',
    href: '/labs/1BfloPrints/',
    imageSrc: '/images/ventures/1bfloprints.webp',
    imageAlt: '1BfloPrints Brand Logo',
  },
];

const PARTNERS: Partner[] = [
  {
    id: 'silo-city-labs',
    name: 'Silo City Labs',
    logoUrl: '/images/partners/silocitylabs.png',
    websiteUrl: 'https://silocitylabs.com/',
  },
  {
    id: 'tin-roof',
    name: 'Tin Roof',
    logoUrl: '/images/partners/tin-roof.webp',
    websiteUrl: 'https://tinroof.co/',
  },
  {
    id: 'crate',
    name: 'Crate',
    logoUrl: '/images/partners/cratecc.webp',
    websiteUrl: 'https://crate.cc/',
  },
];

// --- Components ---
export default function VenturesSection() {
  return (
    <section className='bg-white py-24 sm:py-32' aria-labelledby='ventures-title'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2
            id='ventures-title'
            className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our Ecosystem
          </h2>
          <p className='mt-4 text-lg leading-8 text-gray-600'>
            We operate as a Venture Studio. We build and scale our own internal IP while deeply
            aligning with the best partners in our community.
          </p>
        </div>

        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          {VENTURES.map((venture) => (
            <div
              key={venture.id}
              className='group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 p-8 transition-shadow hover:shadow-lg sm:p-10'>
              <div>
                <div className='mb-6 relative flex h-16 w-16 items-center justify-center rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5'>
                  <Image
                    src={venture.imageSrc}
                    alt={venture.imageAlt}
                    fill
                    className='object-contain p-2'
                    sizes='64px'
                  />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>{venture.name}</h3>
                <p className='mt-4 text-base leading-7 text-gray-600'>{venture.description}</p>
              </div>

              <div className='mt-8'>
                <Link
                  href={venture.href}
                  target={venture.isExternal ? '_blank' : undefined}
                  rel={venture.isExternal ? 'noopener noreferrer' : undefined}
                  className='inline-flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md'>
                  {venture.ctaText}
                  <svg
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none'>
          <h3 className='text-center text-lg font-semibold leading-8 text-gray-900'>
            Proudly aligned with trusted partners and friends
          </h3>
          <div className='mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:max-w-xl sm:gap-x-16 lg:mx-0 lg:max-w-none'>
            {PARTNERS.map((partner) => (
              <Link
                key={partner.id}
                href={partner.websiteUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative flex justify-center grayscale transition-all duration-300 hover:grayscale-0 opacity-60 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-2'
                aria-label={`Visit ${partner.name} website`}>
                <div className='relative h-12 w-32 sm:h-16 sm:w-40'>
                  <Image
                    src={partner.logoUrl}
                    alt={`${partner.name} logo`}
                    fill
                    className='object-contain'
                    sizes='(max-width: 768px) 128px, 160px'
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
