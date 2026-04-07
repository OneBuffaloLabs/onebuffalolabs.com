'use client';

// --- React ---
import React, { useState, useEffect } from 'react';

// --- Next ---
import Image from 'next/image';
import Link from 'next/link';

// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// --- Data ---
import portfolioData from '@/data/portfolio.json';

// --- Types ---
interface ProjectCardProps {
  client: string;
  summary: string;
  tech: string[];
  imageUrl: string;
  link: string;
}

// --- Components ---
export default function PortfolioSection() {
  const [featuredProjects, setFeaturedProjects] = useState<ProjectCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Defers the state update to the next tick, satisfying the strict linter rule
    // against synchronous setState calls within a useEffect block.
    const timer = setTimeout(() => {
      const shuffled = [...portfolioData].sort(() => 0.5 - Math.random()).slice(0, 3);

      setFeaturedProjects(shuffled);
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id='work'
      className='w-full bg-[var(--obl-dark-blue)] py-16 px-8'
      aria-labelledby='portfolio-title'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 id='portfolio-title' className='text-4xl sm:text-5xl font-bold text-white'>
            Client <span className='text-[var(--obl-blue)]'>Success.</span>
          </h2>
          <p className='text-lg text-gray-400 mt-4 max-w-2xl mx-auto'>
            We work with innovative clients to build robust digital solutions that drive real
            results.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => <ProjectCardSkeleton key={index} />)
            : featuredProjects.map((project) => (
                <ProjectCard
                  key={project.client}
                  client={project.client}
                  summary={project.summary}
                  tech={project.tech}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              ))}
        </div>

        <div className='text-center mt-16'>
          <Link
            href='/portfolio'
            className='inline-block px-10 py-4 bg-[var(--obl-red)] text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-[var(--obl-red)]/90 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--obl-dark-blue)]'>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Components ---
function ProjectCard({ client, summary, tech, imageUrl, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative block w-full aspect-square rounded-lg overflow-hidden shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--obl-blue)]'
      aria-label={`View project for ${client}`}>
      <div className='absolute inset-0 bg-white' />

      <Image
        src={imageUrl}
        alt={`${client} project showcase`}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-contain p-10 transition-transform duration-500 ease-in-out group-hover:scale-105'
      />

      <div className='absolute inset-0 bg-[var(--obl-dark-blue)]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10' />

      <div className='absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20'>
        <h3 className='text-2xl font-bold text-white mb-2 line-clamp-1'>{client}</h3>
        <p className='text-gray-300 text-sm mb-4 line-clamp-3'>{summary}</p>

        <div className='flex justify-between items-end'>
          <div className='flex flex-wrap gap-2'>
            {tech.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className='bg-[var(--obl-blue)] text-white text-xs font-semibold px-2 py-1 rounded-full'>
                {technology}
              </span>
            ))}
            {tech.length > 3 && (
              <span className='bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                +{tech.length - 3}
              </span>
            )}
          </div>

          <div className='flex items-center text-[var(--obl-red)] font-semibold shrink-0 ml-4'>
            <span className='text-sm'>Visit Site</span>
            <FontAwesomeIcon icon={faArrowRight} className='ml-2 text-[16px]' />
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full h-1 z-30'>
        <div className='bg-[var(--obl-red)] h-full w-0 group-hover:w-full transition-all duration-500 ease-in-out' />
      </div>
    </a>
  );
}

function ProjectCardSkeleton() {
  return (
    <div className='relative block w-full aspect-square rounded-lg overflow-hidden shadow-2xl bg-gray-800 animate-pulse'>
      <div className='absolute inset-0 p-6 flex flex-col justify-end'>
        <div className='w-3/4 h-8 bg-gray-700 rounded mb-4' />
        <div className='w-full h-4 bg-gray-700 rounded mb-2' />
        <div className='w-5/6 h-4 bg-gray-700 rounded mb-4' />
        <div className='flex gap-2'>
          <div className='w-16 h-6 bg-[var(--obl-blue)]/50 rounded-full' />
          <div className='w-20 h-6 bg-[var(--obl-blue)]/50 rounded-full' />
        </div>
      </div>
    </div>
  );
}
