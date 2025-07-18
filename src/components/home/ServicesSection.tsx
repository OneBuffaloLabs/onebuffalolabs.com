'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Code, Search, Brain, LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  delay,
  href,
}) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

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

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <Link
      href={href}
      ref={cardRef}
      className={`
        group bg-white p-8 rounded-lg shadow-md border border-gray-200 transition-all duration-500 ease-in-out
        hover:shadow-xl hover:-translate-y-1 hover:border-[var(--obl-blue)] focus-within:outline-none focus-within:ring-2 focus-within:ring-[var(--obl-blue)]
        flex flex-col justify-between items-center text-center h-full
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${delay}ms` }}>
      <div>
        <div className='text-[var(--obl-blue)] mb-4 inline-block'>
          <Icon
            size={48}
            className='transition-colors duration-300 group-hover:text-[var(--obl-red)]'
          />
        </div>
        <h3 className='text-2xl font-semibold mb-3 text-gray-900'>{title}</h3>
        <p className='text-gray-600 leading-relaxed flex-grow'>{description}</p>
      </div>
      <div className='mt-6'>
        <span className='inline-flex items-center font-semibold text-[var(--obl-blue)]'>
          Learn More
          <ArrowRight className='ml-2 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
        </span>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Crafting custom websites, e-commerce solutions, and robust CMS platforms for a powerful online presence.',
      href: '/services/website',
    },
    // {
    //   icon: Smartphone,
    //   title: 'App Development',
    //   description:
    //     'Building intuitive mobile apps and cross-platform solutions that deliver exceptional user experiences.',
    //   href: '/services/apps',
    // },
    {
      icon: Search,
      title: 'Digital Strategy & SEO',
      description:
        'Optimizing your online visibility with comprehensive SEO audits, analytics, and growth strategies.',
      href: '/services/seo',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description:
        'Implementing intelligent chatbots, missed call automation, and custom machine learning solutions to drive efficiency.',
      href: '/services/ai-integration',
    },
  ];

  return (
    <section id='services' className='py-16 px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900'>
          Our <span className='text-[var(--obl-blue)]'>Expertise</span>
        </h2>
        <p className='text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12'>
          We deliver comprehensive digital solutions designed to elevate your brand, engage your
          audience, and drive growth.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 150}
              href={service.href}
            />
          ))}
        </div>
        {/* Added a link to the main services page */}
        <div className='text-center mt-16'>
          <Link
            href='/services'
            className='inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-[var(--obl-red)] rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'>
            View All Our Services
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
