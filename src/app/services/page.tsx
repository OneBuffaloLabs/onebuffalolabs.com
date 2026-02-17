// --- Next ---
import type { Metadata } from 'next';
import Link from 'next/link';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faChartSimple,
  faBrain,
  faArrowRight,
  faWandMagicSparkles,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'Our Services | One Buffalo Labs',
  description:
    'Explore the comprehensive digital solutions offered by One Buffalo Labs: web design, app development, digital strategy & SEO, AI integration, and custom 3D printing.',
  keywords: [
    'Buffalo digital solutions',
    'tech services Buffalo',
    'web development services',
    'app development services',
    'SEO services',
    'AI integration services',
    'custom software Buffalo',
    '3D printing Buffalo',
    'rapid prototyping',
  ],
  urlPath: '/services',
});

// --- Constants for content and styles ---
const companyColors = {
  red: 'var(--obl-red)',
  blue: 'var(--obl-blue)',
  darkBlue: 'var(--obl-dark-blue)',
};

const serviceCategories = [
  {
    link: '/services/website',
    icon: faCode,
    title: 'Website Design & Development',
    description:
      'We build stunning, high-performance websites that capture your brand, engage your audience, and drive business growth.',
    subServices: ['Custom Websites', 'E-commerce', 'Website Redesigns', 'CMS Integration'],
    ctaText: 'Explore Our Web Services',
  },
  {
    link: '/services/seo',
    icon: faChartSimple,
    title: 'Digital Strategy & SEO',
    description:
      'A beautiful website is just the beginning. We help customers find you on Google and turn traffic into tangible results.',
    subServices: ['Local SEO', 'Technical Audits', 'On-Page Optimization', 'Analytics'],
    ctaText: 'Boost Your Visibility',
  },
  // {
  //   link: '/services/app-development',
  //   icon: faMobileScreenButton, // Example if you uncomment this later
  //   title: 'Custom App Development',
  //   description:
  //     "When off-the-shelf isn't enough, we design and build custom software and mobile applications tailored to your unique business needs.",
  //   subServices: ['Mobile Apps', 'Cross-Platform Development', 'Internal Business Tools'],
  //   ctaText: 'Build Your Application',
  // },
  {
    link: '/services/ai-integration',
    icon: faBrain,
    title: 'AI & Automation Solutions',
    description:
      'Leverage the power of artificial intelligence to enhance customer experiences, streamline operations, and unlock new efficiencies.',
    subServices: [
      'AI-Powered Chatbots',
      'Missed Call Automation',
      'Business Process Automation',
      'Machine Learning Models',
    ],
    ctaText: 'Integrate AI Solutions',
  },
  {
    link: '/services/3d-printing',
    icon: faCubes,
    title: 'Custom 3D Printing',
    description:
      'From rapid prototyping to custom replacement parts, we offer high-quality 3D printing services to bring your digital designs into the physical world.',
    subServices: [
      'Rapid Prototyping',
      'Custom Parts & Fixes',
      'Small Batch Production',
      'One Buffalo Prints Catalog',
    ],
    ctaText: 'Explore 3D Printing',
  },
];

// --- PAGE COMPONENT ---
export default function ServicesPage() {
  return (
    <div className='min-h-screen bg-gray-50 font-sans text-gray-800'>
      {/* 1. Hero Section */}
      <section
        id='hero'
        className='relative min-h-[50vh] flex items-center justify-center text-center p-8 pt-20 overflow-hidden'
        style={{
          background: `linear-gradient(to bottom, ${companyColors.darkBlue}, ${companyColors.blue})`,
        }}>
        <div
          className='absolute inset-0 z-0 opacity-30'
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 25%, rgba(0, 48, 145, 0.5) 0%, transparent 35%), radial-gradient(circle at 85% 75%, rgba(231, 4, 45, 0.5) 0%, transparent 30%)',
            mixBlendMode: 'lighten',
          }}></div>
        <div className='relative z-10 max-w-4xl mx-auto text-white'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4'>
            Solutions to Power Your{' '}
            <span style={{ color: companyColors.red }}>Buffalo Business.</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90'>
            From foundational websites and AI integration to physical prototyping, we offer a complete suite of tech services to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* 2. Services Grid Section */}
      <section className='py-16 px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              Our Core <span style={{ color: companyColors.blue }}>Expertise</span>
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              Explore our specialized services designed to elevate your digital presence and
              streamline your operations.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {serviceCategories.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className='group relative block p-8 bg-gray-50 rounded-lg shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-105'>
                <div
                  className='absolute bottom-0 left-0 w-full h-1'
                  style={{ backgroundColor: companyColors.blue }}>
                  <div
                    className='h-full w-0 group-hover:w-full transition-all duration-300 ease-out'
                    style={{ backgroundColor: companyColors.red }}></div>
                </div>

                <div className='flex items-center mb-6'>
                  <div
                    className='flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full text-white'
                    style={{ backgroundColor: companyColors.blue }}>
                    {/* Replaced Icon with FontAwesomeIcon and size class */}
                    <FontAwesomeIcon icon={service.icon} className='text-3xl' />
                  </div>
                  <h3 className='ml-5 text-3xl font-bold text-[var(--obl-dark-blue)]'>
                    {service.title}
                  </h3>
                </div>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>{service.description}</p>
                <ul className='list-disc list-inside space-y-2 text-gray-600 mb-6'>
                  {service.subServices.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
                <div
                  className='flex items-center text-lg font-semibold'
                  style={{ color: companyColors.red }}>
                  {service.ctaText}{' '}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='w-5 h-5 ml-2 transition-transform group-hover:translate-x-1'
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final Call to Action Section */}
      <section
        className='py-16 px-8 text-center'
        style={{ backgroundColor: companyColors.darkBlue, color: 'white' }}>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Have a Project That Doesn&apos;t Fit a{' '}
            <span style={{ color: companyColors.blue }}>Box</span>?
          </h2>
          <p className='text-lg leading-relaxed mb-8 text-gray-300'>
            We love a unique challenge. If you have a custom project in mind, we&apos;d be happy to
            discuss the possibilities and craft a tailored solution for you.
          </p>
          <Link
            href='/#contact'
            className='inline-flex items-center px-10 py-4 bg-white text-[var(--obl-dark-blue)] rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200'>
            Schedule a Custom Consultation{' '}
            <FontAwesomeIcon icon={faWandMagicSparkles} className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </section>
    </div>
  );
}