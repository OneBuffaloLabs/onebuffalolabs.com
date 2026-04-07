'use client';

// --- React ---
import { useState, useEffect } from 'react';
// --- Next ---
import Link from 'next/link';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
// --- Data ---
import labsData from '@/data/labs.json';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';

// --- Types ---
interface LabProjectProps {
  title: string;
  description: string;
  tech?: string[];
  githubUrl: string;
  link?: string | null;
  label?: string;
  imageUrl?: string;
}

// --- Components ---
export default function LabsAndConceptsSection() {
  const [featuredProjects, setFeaturedProjects] = useState<LabProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const shuffled = [...labsData].sort(() => 0.5 - Math.random()).slice(0, 3);

      setFeaturedProjects(shuffled);
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='labs-concepts' className='w-full bg-[var(--obl-dark-blue)] py-16 sm:py-24 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white'>
            Our Labs & <span className='text-[var(--obl-blue)]'>Innovations.</span>
          </h2>
          <p className='text-lg text-gray-400 mt-4 max-w-2xl mx-auto'>
            Here&apos;s a glimpse into our passion for technology. We&apos;re constantly exploring
            new ideas and contributing to the open-source community.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => <LabProjectCardSkeleton key={index} />)
            : featuredProjects.map((project) => (
                <LabProjectCard key={project.title} project={project} />
              ))}
        </div>

        <div className='text-center mt-16'>
          <Link
            href='/labs'
            onClick={() => logEvent('labs_section_home', 'cta_click', 'View All Labs Projects')}
            className='inline-flex items-center px-10 py-4 bg-[var(--obl-red)] text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-[var(--obl-red)]/[.90] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--obl-dark-blue)]'>
            View All Labs Projects
            <FontAwesomeIcon icon={faArrowRight} className='text-[20px] ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Sub-Components ---
function LabProjectCard({ project }: { project: LabProjectProps }) {
  const displayLabel = project.label || (project.tech && project.tech[0]) || 'Lab';

  return (
    <div className='group relative flex flex-col bg-white/5 border border-white/10 border-t-4 border-t-[var(--obl-blue)] rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--obl-blue)]/20'>
      <div className='p-8 flex flex-col flex-grow'>
        <div className='flex-grow'>
          <div className='flex justify-between items-start mb-4 gap-4'>
            <h3 className='text-2xl font-bold text-white leading-tight'>{project.title}</h3>
            <span className='text-xs font-semibold bg-[var(--obl-blue)] text-white px-3 py-2 rounded-full flex-shrink-0 shadow-sm'>
              {displayLabel}
            </span>
          </div>
          <p className='text-gray-400 leading-relaxed mb-8'>{project.description}</p>
        </div>

        <div className='mt-auto pt-5 border-t border-white/10 flex items-center justify-between gap-4'>
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => logEvent('labs_section_home', 'github_link_click', project.title)}
            className='inline-flex items-center font-semibold text-gray-300 transition-colors hover:text-[var(--obl-red)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--obl-red)] rounded-md'>
            <FontAwesomeIcon icon={faGithub} className='text-[20px] mr-2' />
            GitHub
          </a>

          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => logEvent('labs_section_home', 'view_site_link_click', project.title)}
              className='inline-flex items-center font-semibold text-gray-300 transition-colors hover:text-[var(--obl-red)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--obl-red)] rounded-md'>
              View Site
              <FontAwesomeIcon icon={faUpRightFromSquare} className='text-[20px] ml-2' />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function LabProjectCardSkeleton() {
  return (
    <div className='flex flex-col bg-white/5 border border-white/10 border-t-4 border-t-[var(--obl-blue)] rounded-lg shadow-lg overflow-hidden animate-pulse min-h-[320px]'>
      <div className='p-8 flex flex-col flex-grow'>
        <div className='flex-grow'>
          <div className='flex justify-between items-start mb-4 gap-4'>
            <div className='w-2/3 h-8 bg-white/20 rounded' />
            <div className='w-16 h-8 bg-[var(--obl-blue)]/50 rounded-full shrink-0' />
          </div>
          <div className='w-full h-4 bg-white/10 rounded mb-3' />
          <div className='w-5/6 h-4 bg-white/10 rounded mb-3' />
          <div className='w-4/5 h-4 bg-white/10 rounded mb-8' />
        </div>

        <div className='mt-auto pt-5 border-t border-white/10 flex items-center justify-between gap-4'>
          <div className='w-24 h-6 bg-white/20 rounded' />
          <div className='w-28 h-6 bg-white/20 rounded' />
        </div>
      </div>
    </div>
  );
}
