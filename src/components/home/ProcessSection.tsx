'use client';

import React, { useState, useEffect, useRef } from 'react';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faPenRuler,
  faCode,
  faRocket,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// --- TYPE-SAFE OPTIONS FOR THE HOOK ---
interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

// A simple hook to detect when an element is in view
const useInView = (options: UseInViewOptions) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Destructure our custom prop and pass the rest to the observer
    const { triggerOnce, ...observerOptions } = options;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Only unobserve if triggerOnce is true
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, observerOptions); // Use the standard options here

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]); // Dependency array is correct

  return [ref, inView] as const;
};

// --- Data for the process steps ---
const processSteps = [
  {
    icon: faCompass,
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your vision, goals, and audience to create a comprehensive project roadmap and strategy for success.',
  },
  {
    icon: faPenRuler,
    title: 'Design & Prototyping',
    description:
      'Our team designs intuitive, user-centric interfaces, creating interactive prototypes to refine the user experience before development begins.',
  },
  {
    icon: faCode,
    title: 'Development & Testing',
    description:
      'Using cutting-edge tech, we build your application with clean, scalable code. Rigorous testing ensures a flawless, bug-free launch.',
  },
  {
    icon: faRocket,
    title: 'Deployment & Launch',
    description:
      'We handle the entire deployment process, ensuring a smooth and seamless launch on a robust, scalable infrastructure.',
  },
  {
    icon: faChartSimple,
    title: 'Support & Growth',
    description:
      'Our partnership continues post-launch with ongoing support, performance monitoring, and data-driven strategies for future growth.',
  },
];

interface ProcessStepProps {
  icon: IconDefinition; // Changed from LucideIcon
  title: string;
  description: string;
  index: number;
}

// --- Individual Step Component ---
const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const isOdd = index % 2 !== 0;

  // Animation classes based on visibility and position
  const animationClasses = inView
    ? 'opacity-100 translate-x-0'
    : `opacity-0 ${isOdd ? 'md:translate-x-8' : 'md:-translate-x-8'}`;

  // Card positioning class for alternating sides
  const positionClass = isOdd ? 'md:ml-auto' : '';

  return (
    <div ref={ref} className='relative mb-12 md:mb-16'>
      {/* Timeline Node */}
      <div className='hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
        <div className='w-4 h-4 bg-[var(--obl-blue)] rounded-full border-4 border-[var(--obl-dark-blue)]'></div>
      </div>

      {/* Card container */}
      <div
        className={`relative w-full md:w-5/12 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl transition-all duration-700 ease-out ${animationClasses} ${positionClass}`}>
        {/* Number Badge */}
        <div
          className={`absolute top-5 w-12 h-12 bg-[var(--obl-red)] text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-lg ${
            isOdd ? 'md:-left-24' : 'md:-right-24'
          }`}>
          {index + 1}
        </div>

        {/* Card Content */}
        <div className='flex items-start'>
          {/* Replaced Icon with FontAwesomeIcon and text-[32px] size */}
          <FontAwesomeIcon
            icon={icon}
            className='text-[var(--obl-blue)] mr-4 mt-1 flex-shrink-0 text-[32px]'
          />
          <div>
            <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
            <p className='text-gray-400 leading-relaxed'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---
const ProcessSection = () => {
  return (
    <section id='process' className='w-full bg-[var(--obl-dark-blue)] py-16 px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white'>
            How We Bring <span className='text-[var(--obl-blue)]'>Ideas to Life.</span>
          </h2>
          <p className='text-lg text-gray-400 mt-4 max-w-2xl mx-auto'>
            Our structured, transparent process ensures your project is delivered on time and
            exceeds expectations.
          </p>
        </div>

        <div className='relative'>
          {/* The vertical timeline bar */}
          <div className='hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gray-700'></div>

          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
