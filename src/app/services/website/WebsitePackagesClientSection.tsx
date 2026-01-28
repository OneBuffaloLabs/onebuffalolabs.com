'use client';

// --- Components ---
import Link from 'next/link';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';

// --- Constants for this component ---
const companyColors = {
  red: 'var(--obl-red)',
  blue: 'var(--obl-blue)',
  darkBlue: 'var(--obl-dark-blue)',
};

const packages = [
  {
    title: 'Quick Start Landing Page',
    idealFor:
      'For new entrepreneurs or businesses needing a simple, professional online "business card" to get online quickly.',
    includes: [
      'Single-page, template-based site',
      'Client provides all content upfront',
      'Minimal SEO setup (title, meta)',
      '1-2 rounds of minor revisions',
      'Fast 5-7 day turnaround',
      '100% upfront payment required',
    ],
    pricing: 'Starting at $750',
  },
  {
    title: 'The Essential Starter',
    idealFor:
      'New businesses and startups in Buffalo needing a strong, foundational online presence that can grow.',
    includes: [
      '1-3 professionally designed pages',
      'Mobile-responsive for all devices',
      'Integrated contact form',
      'Foundational SEO setup',
      'Our full "Handoff & Empower" process',
      'Concierge Domain Setup assistance',
    ],
    pricing: 'Starting at $1,800',
    mostPopular: true,
  },
  {
    title: 'The Growth Catalyst',
    idealFor:
      'Growing businesses ready to expand their digital reach and generate more leads with dynamic content.',
    includes: [
      'Everything in The Essential Starter',
      'Up to 10 strategically designed pages',
      'Content Management System (CMS) for easy updates (blog/portfolio)',
      'Google Analytics integration & setup',
      'Payment plans available',
    ],
    pricing: 'Starting at $3,800',
  },
  {
    title: 'The Custom Build',
    idealFor:
      'Businesses with unique, complex needs: e-commerce, custom web applications, or advanced integrations.',
    includes: [
      'A fully custom, scalable solution built to your precise business requirements.',
      'In-depth discovery & strategy session',
      'Advanced SEO & marketing features',
      'Payment plans and ongoing support options',
    ],
    pricing: "Custom Quote - Let's Innovate Together!",
  },
];

// --- The new Client Component ---
export default function WebsitePackagesClientSection() {
  return (
    <section className='bg-white py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
            Find the Perfect <span style={{ color: companyColors.red }}>Fit</span> for Your Business
          </h2>
          <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
            Choose from our packages designed for every stage of business growth. Each includes our
            commitment to quality, performance, and empowering you with full ownership.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                pkg.mostPopular ? 'border-2 border-[var(--obl-red)]' : ''
              }`}>
              {pkg.mostPopular && (
                <div className='absolute -top-3 right-4 px-4 py-1 bg-[var(--obl-red)] text-white text-sm font-bold rounded-full shadow-md'>
                  Most Popular
                </div>
              )}
              <h3 className='text-3xl font-bold mb-4' style={{ color: companyColors.blue }}>
                {pkg.title}
              </h3>
              <p className='text-gray-700 mb-6 flex-grow'>{pkg.idealFor}</p>
              <div className='mb-6'>
                <ul className='list-none space-y-2 text-gray-700'>
                  {pkg.includes.map((item, i) => (
                    <li key={i} className='flex items-center'>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className='w-4 h-4 mr-2 text-[var(--obl-red)] flex-shrink-0'
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-auto pt-6 border-t border-gray-200'>
                <p className='text-3xl font-bold' style={{ color: companyColors.darkBlue }}>
                  {pkg.pricing}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ease-in-out ${
                  pkg.mostPopular ? 'bg-[var(--obl-red)]' : 'bg-[var(--obl-blue)]'
                } scale-x-0 group-hover:scale-x-100`}></div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            href='/#contact'
            onClick={() =>
              logEvent(
                'cta_click',
                'book_call_website_services',
                'Book a Call to Get Your Exact Quote'
              )
            }
            className='inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            style={{ backgroundColor: companyColors.red, color: 'white' }}>
            Book a Call to Get Your Exact Quote{' '}
            <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
}
