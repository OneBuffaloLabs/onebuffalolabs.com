'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ArrowRight } from 'lucide-react';

// --- Data for Featured Projects ---
// Added filameter.com to the array
const featuredProjects = [
  {
    title: 'SiloCityPages',
    description:
      'A lightweight, zero-config static site generator designed for speed and simplicity, perfect for documentation.',
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop', // Abstract tech image
    githubUrl: 'https://github.com/SiloCityLabs/SiloCityPages',
    label: 'Open Source',
  },
  {
    title: 'codrcg.com',
    description:
      'An interactive coding challenge platform with real-time feedback and a competitive leaderboard to sharpen skills.',
    imageUrl:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070&auto=format&fit=crop', // Abstract code image
    githubUrl: 'https://github.com/SiloCityLabs/codrcg.com',
    label: 'Concept Project',
  },
  {
    title: 'filameter.com',
    description:
      'A utility for 3D printing enthusiasts to calculate filament usage and costs for their projects.',
    imageUrl:
      'https://images.unsplash.com/photo-1611606024846-646906518064?q=80&w=2070&auto=format&fit=crop', // Abstract 3D printing image
    githubUrl: 'https://github.com/SiloCityLabs/filameter.com',
    label: 'Open Source',
  },
];

const LabsAndConceptsSection = () => {
  return (
    <section id='labs-concepts' className='w-full bg-[var(--obl-dark-blue)] py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white'>
            Our Labs & <span className='text-[var(--obl-blue)]'>Innovations.</span>
          </h2>
          <p className='text-lg text-gray-400 mt-4 max-w-2xl mx-auto'>
            Here`&apos;s a glimpse into our passion for technology. We`&apos;re constantly exploring
            new ideas and contributing to the open-source community.
          </p>
        </div>

        {/* Featured Projects Grid - Updated for 3 columns on large screens */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className='group relative bg-white/5 border border-white/10 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--obl-blue)]/20'>
              <div className='relative w-full h-56'>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
              </div>

              <div className='p-6'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-2xl font-bold text-white'>{project.title}</h3>
                  <span className='text-xs font-semibold bg-[var(--obl-blue)] text-white px-3 py-1 rounded-full flex-shrink-0'>
                    {project.label}
                  </span>
                </div>
                <p className='text-gray-400 leading-relaxed mb-6'>{project.description}</p>
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center font-semibold text-gray-300 transition-colors hover:text-[var(--obl-red)]'>
                  <Github className='w-5 h-5 mr-2' />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA to full labs page */}
        <div className='text-center mt-16'>
          <Link
            href='/labs'
            className='inline-flex items-center !px-10 !py-4 bg-[var(--obl-red)] text-white !rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-[var(--obl-red)]/[.90] hover:scale-105'>
            View All Labs Projects <ArrowRight className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LabsAndConceptsSection;
