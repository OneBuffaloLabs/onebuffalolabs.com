'use client';

import React from 'react';
import Image from 'next/image';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faGem, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// --- Data for the company values ---
const values = [
  {
    icon: faLightbulb,
    title: 'Innovation',
    description:
      'We push the boundaries of technology to deliver creative and effective solutions.',
  },
  {
    icon: faUsers,
    title: 'Community',
    description:
      'Deeply rooted in Buffalo, we are committed to fostering local growth and collaboration.',
  },
  {
    icon: faGem,
    title: 'Quality',
    description: 'We uphold the highest standards in every line of code and every pixel designed.',
  },
  {
    icon: faBullseye,
    title: 'Client-Centric',
    description: 'Your success is our ultimate goal. We build partnerships, not just projects.',
  },
];

interface ValuePillProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

// --- Individual Value Component ---
const ValuePill: React.FC<ValuePillProps> = ({ icon, title, description }) => (
  <div className='flex items-start'>
    <div className='flex-shrink-0'>
      <div className='flex items-center justify-center h-12 w-12 rounded-full bg-[var(--obl-blue)]/10 text-[var(--obl-blue)] transition-transform duration-300 hover:scale-110'>
        <FontAwesomeIcon icon={icon} className='h-12 w-12 text-xl' />
      </div>
    </div>
    <div className='ml-4'>
      <h4 className='text-lg font-bold text-gray-900'>{title}</h4>
      <p className='mt-1 text-gray-600'>{description}</p>
    </div>
  </div>
);

// --- Main Section Component ---
const AboutSection = () => {
  return (
    <section id='about' className='w-full bg-gray-50 py-16 px-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* Text Content Column */}
        <div className='space-y-8'>
          <div>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900'>
              Forged in <span className='text-[var(--obl-blue)]'>Buffalo.</span>
            </h2>
            <p className='mt-4 text-lg text-gray-600 leading-relaxed'>
              One Buffalo Labs was born from a passion for technology and a deep love for our city.
              We believe in Buffalo&lsquo;s resurgence and are dedicated to powering its digital
              future. By combining{' '}
              <span className='font-bold text-[var(--obl-red)]'>cutting-edge AI</span> with
              practical web and app development, we build custom solutions designed to help local
              and national businesses grow and succeed.
            </p>
            <p className='mt-4 text-lg text-gray-600 leading-relaxed'>
              Our mission is to be more than a tech agency; we are your strategic partner in
              innovation, committed to building a stronger, more connected community through
              technology.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4'>
            {values.map((value) => (
              <ValuePill key={value.title} {...value} />
            ))}
          </div>
        </div>

        {/* Image Content Column */}
        <div className='relative h-96 lg:h-full min-h-[400px]'>
          {/* Decorative Background SVG */}
          <div className='absolute inset-0 z-0 opacity-50'>
            <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <pattern
                  id='a'
                  patternUnits='userSpaceOnUse'
                  width='40'
                  height='40'
                  patternTransform='scale(2) rotate(45)'>
                  <rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)' />
                  <path
                    d='M1-5.64V5.64M-5.64 1H5.64'
                    strokeLinecap='square'
                    strokeWidth='1'
                    stroke='hsla(220, 90%, 50%, 0.1)'
                    fill='none'
                  />
                </pattern>
              </defs>
              <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' />
            </svg>
          </div>

          {/* Main Image */}
          <div className='relative z-10 w-full h-full rounded-lg shadow-2xl overflow-hidden'>
            <Image
              src='/images/misc/about.webp'
              alt='One Buffalo Labs team collaborating'
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
