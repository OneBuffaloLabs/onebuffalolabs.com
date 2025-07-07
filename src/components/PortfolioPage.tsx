'use client';

// --- React ---
import React, { useState, useMemo } from 'react';
// --- Next ---
import Image from 'next/image';
import Link from 'next/link';
// --- Icons ---
import { ArrowRight, Beaker } from 'lucide-react';
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
    <div className='bg-gray-50 font-sans'>
      <div className='max-w-7xl mx-auto px-8 py-16 pt-28'>
        {/* --- HEADER --- */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
            Our Client Work
          </h1>
          {/* The main description is now only shown if there are projects */}
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
            <Beaker className='w-16 h-16 text-[var(--obl-blue)] mb-4 mx-auto' />
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>Our Portfolio is Growing</h2>
            <p className='text-gray-600 max-w-lg mx-auto mb-6'>
              We&apos;re currently preparing our client success stories to share with you. In the
              meantime, you can see our passion for technology in our labs.
            </p>
            <Link
              href='/labs'
              className='inline-flex items-center !px-8 !py-3 bg-[var(--obl-red)] text-white !rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-[var(--obl-red)]/[.90] hover:scale-105'>
              Explore Our Labs <ArrowRight className='w-5 h-5 ml-2' />
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
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[var(--obl-red)] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}>
                  {category}
                </button>
              ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProjects.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className='group relative block w-full aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-[var(--obl-blue)]/30 hover:scale-105'>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent'></div>

                  <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                    <h3 className='text-xl font-bold'>{project.title}</h3>
                    <p className='text-sm text-gray-300 mb-4'>{project.client}</p>

                    <div className='opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out overflow-hidden'>
                      <p className='text-sm text-gray-200 mb-4'>{project.summary}</p>
                      <Link
                        href={project.link}
                        className='inline-flex items-center text-sm font-semibold text-white bg-[var(--obl-red)] px-4 py-2 rounded-full hover:bg-[var(--obl-red)]/80'>
                        View Case Study <ArrowRight className='w-4 h-4 ml-2' />
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
