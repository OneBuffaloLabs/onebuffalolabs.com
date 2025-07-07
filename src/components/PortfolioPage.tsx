'use client';

// --- React ---
import React, { useState, useMemo } from 'react';
// --- Next ---
import Image from 'next/image';
import Link from 'next/link';
// --- Icons ---
import { ArrowRight } from 'lucide-react';
// --- Data ---
import allProjects from '@/data/portfolio.json';

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
        <div className='text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
            Our Client Work
          </h1>
          <p className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'>
            We partner with businesses of all sizes to deliver innovative solutions that drive
            growth, efficiency, and real-world results. Explore our complete portfolio below.
          </p>
        </div>

        {/* --- FILTER CONTROLS --- */}
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

        {/* --- PROJECTS GRID --- */}
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

                {/* This content is hidden by default and appears on hover */}
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
      </div>
    </div>
  );
};

export default PortfolioPage;
