'use client'; // IMPORTANT: This directive must be at the very top

import React, { useRef, useEffect, useState } from 'react';
import { Code, Smartphone, Search, Brain, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay }) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        group bg-white p-8 rounded-lg shadow-md border border-gray-200 transition-all duration-500 ease-in-out
        hover:shadow-xl hover:-translate-y-1 hover:border-[var(--obl-blue)] focus-within:outline-hidden focus-within:ring-2 focus-within:ring-[var(--obl-blue)]
        flex flex-col justify-between items-center text-center h-full
        ${inView ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}>
      <div className='text-[var(--obl-blue)] mb-4'>
        <Icon
          size={48}
          className='transition-colors duration-300 group-hover:text-[var(--obl-red)]'
        />
      </div>
      <h3 className='text-2xl font-semibold mb-3 text-gray-900'>{title}</h3>
      <p className='text-gray-600 leading-relaxed flex-grow'>{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Crafting custom websites, e-commerce solutions, and robust CMS platforms for a powerful online presence.',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'Building intuitive mobile apps and cross-platform solutions that deliver exceptional user experiences.',
    },
    {
      icon: Search,
      title: 'Digital Strategy & SEO',
      description:
        'Optimizing your online visibility with comprehensive SEO audits, analytics, and growth strategies.',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description:
        'Implementing intelligent chatbots, automation tools, and machine learning solutions to drive efficiency.',
    },
  ];

  return (
    <section className='py-16 px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900'>
          Our <span className='text-[var(--obl-blue)]'>Expertise.</span>
        </h2>

        {/* Grid container for service cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center'>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
