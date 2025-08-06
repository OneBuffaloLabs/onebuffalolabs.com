'use client';

// --- React ---
import React from 'react';
// --- Next ---
import Link from 'next/link';
import Image from 'next/image';
// --- Icons ---
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
// --- Data ---
import featuredProjects from '@/data/home/labs.json';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';

const LabsAndConceptsSection = () => {
  return (
    <section id='labs-concepts' className='w-full bg-[var(--obl-dark-blue)] py-16 sm:py-24 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white'>
            Our Labs & <span className='text-[var(--obl-blue)]'>Innovations.</span>
          </h2>
          <p className='text-lg text-gray-400 mt-4 max-w-2xl mx-auto'>
            Here&apos;s a glimpse into our passion for technology. We&apos;re constantly exploring
            new ideas and contributing to the open-source community.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className='group relative flex flex-col bg-white/5 border border-white/10 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--obl-blue)]/20'>
              {/* Image Container */}
              <div className='relative w-full h-56'>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover'
                  onError={(e) => {
                    e.currentTarget.srcset = `https://placehold.co/600x400/010123/FFFFFF?text=${project.title}`;
                  }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
              </div>

              {/* Content Container */}
              <div className='p-6 flex flex-col flex-grow'>
                <div className='flex-grow'>
                  <div className='flex justify-between items-start mb-3'>
                    <h3 className='text-2xl font-bold text-white'>{project.title}</h3>
                    <span className='text-xs font-semibold bg-[var(--obl-blue)] text-white px-3 py-2 rounded-full flex-shrink-0'>
                      {project.label}
                    </span>
                  </div>
                  <p className='text-gray-400 leading-relaxed mb-6'>{project.description}</p>
                </div>

                {/* Action buttons */}
                <div className='mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-4'>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    // --- ANALYTICS EVENT FOR GITHUB CLICK ---
                    onClick={() =>
                      logEvent('labs_section_home', 'github_link_click', project.title)
                    }
                    className='inline-flex items-center font-semibold text-gray-300 transition-colors hover:text-[var(--obl-red)]'>
                    <Github className='w-5 h-5 mr-2' />
                    GitHub
                  </a>

                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      // --- ANALYTICS EVENT FOR VIEW SITE CLICK ---
                      onClick={() =>
                        logEvent('labs_section_home', 'view_site_link_click', project.title)
                      }
                      className='inline-flex items-center font-semibold text-gray-300 transition-colors hover:text-[var(--obl-red)]'>
                      View Site
                      <ExternalLink className='w-5 h-5 ml-2' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA to full labs page */}
        <div className='text-center mt-16'>
          <Link
            href='/labs'
            onClick={() => logEvent('labs_section_home', 'cta_click', 'View All Labs Projects')}
            className='inline-flex items-center !px-10 !py-4 bg-[var(--obl-red)] text-white !rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-[var(--obl-red)]/[.90] hover:scale-105'>
            View All Labs Projects <ArrowRight className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LabsAndConceptsSection;
