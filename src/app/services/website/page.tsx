// --- Next ---
import type { Metadata } from 'next';
// --- Components ---
import Link from 'next/link';
import Image from 'next/image';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faRocket,
  faArrowRight,
  faLightbulb,
  faPalette,
  faCode,
  faChartSimple,
  faDesktop,
  faCloud,
  faFont,
  faGem,
  faCheckCircle,
  faHardDrive,
} from '@fortawesome/free-solid-svg-icons';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Client Components ---
import WebsitePackagesClientSection from './WebsitePackagesClientSection';

// --- METADATA (Stays in the Server Component for SEO) ---
export const metadata: Metadata = generateMetadata({
  title: 'Website Design & Development Services',
  description:
    'Professional website design, development, and optimization services for Buffalo businesses. Get a high-performing website that drives growth and works as hard as you do.',
  keywords: [
    'website design Buffalo',
    'web development Buffalo',
    'custom website',
    'e-commerce website',
    'CMS website',
    'SEO friendly website',
    'Next.js website',
    'React website',
    'small business website Buffalo',
    'Buffalo web agency',
  ],
  urlPath: '/services/website',
});

// --- Constants for content and styles used in this Server Component ---
const companyColors = {
  red: 'var(--obl-red)',
  blue: 'var(--obl-blue)',
  darkBlue: 'var(--obl-dark-blue)',
};

const processSteps = [
  {
    icon: faLightbulb,
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business, your goals, and your customers.',
  },
  {
    icon: faPalette,
    title: 'Design & Build',
    description:
      'We craft a custom design and build a fast, secure website on a modern technology stack.',
  },
  {
    icon: faRocket,
    title: 'Launch & Deploy',
    description:
      'We handle all the technical details of going live, ensuring a smooth, stress-free launch.',
  },
  {
    icon: faCheckCircle,
    title: 'Handoff & Empower',
    description:
      'The best part? You own everything. We transfer the website, code, and hosting to you and show you how to manage it.',
  },
];

const technologies = [
  {
    name: 'Next.js',
    description:
      'We use this to make your site incredibly fast, which Google and your customers love.',
    // Sizing: w-10 (40px) + text-[30px] to match FontAwesome sizing logic
    icon: <FontAwesomeIcon icon={faBolt} className='w-10 h-10 text-[30px] text-white' />,
  },
  {
    name: 'React',
    description: 'A powerful library for building dynamic and interactive user interfaces.',
    icon: <FontAwesomeIcon icon={faCode} className='w-10 h-10 text-[30px] text-white' />,
  },
  {
    name: 'TypeScript',
    description: 'Adds type safety, making our code more robust and easier to maintain.',
    icon: <FontAwesomeIcon icon={faFont} className='w-10 h-10 text-[30px] text-white' />,
  },
  {
    name: 'Tailwind CSS',
    description: 'For crafting beautiful, responsive designs directly in the JSX.',
    icon: <FontAwesomeIcon icon={faGem} className='w-10 h-10 text-[30px] text-white' />,
  },
  {
    name: 'Vercel',
    description: 'For lightning-fast global deployments and a seamless development experience.',
    icon: <FontAwesomeIcon icon={faCloud} className='w-10 h-10 text-[30px] text-white' />,
  },
  {
    name: 'Digital Ocean',
    description: 'Robust and scalable cloud infrastructure for reliable hosting.',
    icon: <FontAwesomeIcon icon={faHardDrive} className='w-10 h-10 text-[30px] text-white' />,
  },
  {
    name: 'CMS Integration',
    description: 'Empowering you to easily manage your own content, like blogs and portfolios.',
    icon: <FontAwesomeIcon icon={faDesktop} className='w-10 h-10 text-[30px] text-white' />,
  },
  {
    name: 'SEO Best Practices',
    description: 'Built-in strategies to help your website rank higher and attract more visitors.',
    icon: <FontAwesomeIcon icon={faChartSimple} className='w-10 h-10 text-[30px] text-white' />,
  },
];

// --- PAGE COMPONENT (This is a Server Component) ---
export default function WebsiteServicesPage() {
  return (
    <div className='min-h-screen bg-gray-50 font-sans text-gray-800'>
      {/* 1. Hero Section */}
      <section
        id='hero'
        className='relative min-h-screen flex items-center justify-center text-center p-8 overflow-hidden'
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
        <div className='relative z-10 flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto text-white'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
            Your Buffalo Business Deserves a Website That Works as Hard as{' '}
            <span style={{ color: companyColors.red }}>You Do.</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90'>
            We build professional, high-performance websites for businesses ready to grow their
            digital presence.
          </p>
          <Link
            href='/#contact'
            className='inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            style={{ backgroundColor: companyColors.red, color: 'white' }}>
            Schedule Your Free Discovery Call{' '}
            <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5 ml-2 text-xl' />
          </Link>
        </div>
      </section>

      {/* 2. Problem & Aspiration Section */}
      <section className='bg-white py-16 px-8'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              Is Your Website an <span style={{ color: companyColors.blue }}>Asset</span> or an{' '}
              <span style={{ color: companyColors.red }}>Afterthought</span>?
            </h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Many small business owners in Buffalo feel frustrated by their online presence.
              Perhaps your current website is outdated, hard to update, or simply not bringing in
              new customers. It&apos;s a missed opportunity when your online storefront doesn&apos;t
              reflect the quality and dedication you pour into your business every day.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Imagine a website that not only looks professional but actively works for you:
              attracting ideal clients, building instant credibility, and freeing you from technical
              headaches. We believe your digital presence should be a powerful tool, not a constant
              worry.
            </p>
          </div>
          <div className='relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-100'>
            <Image
              src='/images/misc/group.webp'
              alt='Website as an Asset'
              width={500}
              height={300}
              className='object-cover'
            />
          </div>
        </div>
      </section>

      {/* 3. The Solution & Our Process Section */}
      <section className='bg-gray-50 py-16 px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              Your Clear Path to a Professional{' '}
              <span style={{ color: companyColors.blue }}>Website</span>
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              Our streamlined process makes getting a stunning, high-performance website simple and
              stress-free.
            </p>
          </div>
          <div className='relative grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 lg:gap-x-24 place-items-center'>
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-md ${
                  index % 2 === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
                }`}>
                <div
                  className='flex items-center justify-center h-16 w-16 rounded-full text-white mb-4'
                  style={{ backgroundColor: companyColors.red }}>
                  <span className='text-3xl font-bold'>{index + 1}</span>
                </div>
                <h3 className='text-2xl font-bold text-[var(--obl-blue)] mb-2'>{step.title}</h3>
                <p className='text-gray-700 leading-relaxed'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Website Packages Section (Imported Client Component) */}
      <WebsitePackagesClientSection />

      {/* 5. Technology We Use Section */}
      <section className='bg-[var(--obl-dark-blue)] py-16 px-8 text-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-white'>
              Built With Technology{' '}
              <span style={{ color: companyColors.blue }}>You Can Trust.</span>
            </h2>
            <p className='mt-4 text-lg text-gray-400 max-w-2xl mx-auto'>
              We leverage modern, robust technologies to ensure your website is fast, secure, and
              scalable.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className='flex items-start p-6 bg-white/5 border border-white/10 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:border-[var(--obl-red)] hover:shadow-xl'>
                <div className='flex-shrink-0 mr-4'>{tech.icon}</div>
                <div>
                  <h3 className='text-xl font-bold text-white mb-2'>{tech.name}</h3>
                  <p className='text-gray-400 leading-relaxed text-sm'>{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action Section */}
      <section
        className='bg-gray-100 py-16 px-8 text-center'
        style={{ backgroundColor: companyColors.blue, color: 'white' }}>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Ready to Build Your Digital Foundation in{' '}
            <span style={{ color: companyColors.red }}>Buffalo</span>?
          </h2>
          <p className='text-lg leading-relaxed mb-8'>
            Partner with a local agency that&apos;s as invested in your success as you are.
            Let&apos;s build a website that delivers real results.
          </p>
          <Link
            href='/#contact'
            className='inline-flex items-center px-10 py-4 bg-white text-[var(--obl-dark-blue)] rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200'>
            Schedule Your Free, No-Pressure Discovery Call{' '}
            <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5 ml-2 text-xl' />
          </Link>
        </div>
      </section>
    </div>
  );
}
