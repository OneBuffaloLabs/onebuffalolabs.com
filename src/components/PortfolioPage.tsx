'use client';

// --- React ---
import React, { useState, useMemo } from 'react';
// --- Next ---
import Image from 'next/image';
import Link from 'next/link';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFlask } from '@fortawesome/free-solid-svg-icons';
// --- Data ---
import portfolioData from '@/data/portfolio.json';

interface Project {
  title: string;
  client: string;
  category: string;
  summary: string;
  tech: string[];
  imageUrl: string;
  link: string;
}

// Type the imported data to ensure TypeScript understands it.
const allProjects: Project[] = portfolioData;

const categories = ['All', 'Web Development', 'Mobile Apps', 'AI Integration', 'Redesigns'];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className='bg-white font-sans'>
      <div className='max-w-7xl mx-auto px-8 py-16 pt-28'>
        {/* --- HEADER --- */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
            Our Client Work
          </h1>
          {allProjects && allProjects.length > 0 && (
            <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>
              We partner with businesses of all sizes to deliver innovative solutions that drive
              growth, efficiency, and real-world results.
            </p>
          )}
        </div>

        {/* --- CONDITIONAL CONTENT --- */}
        {!allProjects || allProjects.length === 0 ? (
          // --- EMPTY STATE ---
          <div className='text-center'>
            {/* Replaced Beaker with faFlask */}
            <div className='w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[var(--obl-blue)]'>
              <FontAwesomeIcon icon={faFlask} className='text-6xl' />
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>Our Portfolio is Growing</h2>
            <p className='text-gray-600 max-w-lg mx-auto mb-6'>
              We&apos;re currently preparing our client success stories to share with you. In the
              meantime, you can see our passion for technology in our labs.
            </p>
            <Link
              href='/labs'
              className='inline-flex items-center !px-8 !py-3 bg-[var(--obl-red)] text-white !rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-[var(--obl-red)]/[.90] hover:scale-105'>
              Explore Our Labs <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5 ml-2' />
            </Link>
          </div>
        ) : (
          // --- PROJECTS GRID AND FILTERS ---
          <>
            <div className='flex justify-center flex-wrap gap-3 mb-12'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-[var(--obl-red)] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border'
                  }`}>
                  {category}
                </button>
              ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProjects.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className='group flex flex-col bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-[var(--obl-blue)] hover:-translate-y-1'>
                  {/* Image Container */}
                  <div className='relative w-full aspect-[4/3] bg-gray-100 p-4'>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-contain w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105'
                    />
                  </div>

                  {/* Content */}
                  <div className='p-6 flex flex-col flex-grow'>
                    <h3 className='text-xl font-bold text-gray-900'>{project.title}</h3>
                    <p className='text-sm text-gray-500 mb-4'>{project.client}</p>
                    <p className='text-sm text-gray-600 mb-4 flex-grow'>{project.summary}</p>
                    <div className='flex justify-between items-center mt-auto pt-4 border-t border-gray-200'>
                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className='bg-blue-100 text-[var(--obl-blue)] text-xs font-semibold px-2 py-1 rounded-full'>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center text-sm font-semibold text-[var(--obl-red)] hover:underline'>
                        View Site <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4 ml-1' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
