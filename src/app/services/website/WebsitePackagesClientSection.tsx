'use client';

// --- Components ---
import Link from 'next/link';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
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
      'Perfect for new entrepreneurs needing a professional "business card" to get online fast.',
    includes: [
      'Single-page, high-impact design',
      'Client provides content (we handle the rest)',
      'Essential mobile responsiveness',
      'Fast 5-7 day turnaround',
    ],
    ctaLabel: 'Get Online Fast',
    ctaLink: '/contact?package=quick-start',
  },
  {
    title: 'The Essential Starter',
    idealFor:
      'For Buffalo small businesses needing a strong, foundational online presence that can grow.',
    includes: [
      '1-3 professionally designed pages',
      'Mobile-responsive & speed optimized',
      'Integrated contact form & lead capture',
      'Foundational SEO setup',
      'Concierge Domain Setup assistance',
    ],
    ctaLabel: 'Build My Foundation',
    ctaLink: '/contact?package=essential',
    mostPopular: true,
  },
  {
    title: 'The Growth Catalyst',
    idealFor: 'For established businesses ready to expand their digital reach and generate leads.',
    includes: [
      'Up to 10 strategically designed pages',
      'CMS for easy updates (blog/portfolio)',
      'Google Analytics & Performance Tracking',
      'Advanced lead generation tools',
      'Priority Support',
    ],
    ctaLabel: 'Scale My Business',
    ctaLink: '/contact?package=growth',
  },
  {
    title: 'The Custom Build',
    idealFor: 'For unique needs: E-commerce, custom web apps, or advanced API integrations.',
    includes: [
      'Fully custom architecture',
      'In-depth discovery & strategy session',
      'Advanced SEO & marketing features',
      'Custom integrations (CRM, Inventory, etc.)',
      'Ongoing maintenance options',
    ],
    ctaLabel: "Let's Innovate",
    ctaLink: '/contact?package=custom',
  },
];

// --- The new Client Component ---
export default function WebsitePackagesClientSection() {
  return (
    <section className='bg-white py-16 px-8' id='packages'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
            Find the Perfect <span style={{ color: companyColors.red }}>Fit</span> for Your Business
          </h2>
          <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
            Choose the tier that matches your current stage of growth. No hidden fees, just clear
            value and a partnership focused on your success.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 flex flex-col ${
                pkg.mostPopular ? 'border-2 border-[var(--obl-red)] ring-1 ring-red-100' : ''
              }`}>
              {pkg.mostPopular && (
                <div className='absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 bg-[var(--obl-red)] text-white text-sm font-bold rounded-full shadow-md whitespace-nowrap'>
                  Most Popular Choice
                </div>
              )}

              <h3
                className='text-2xl font-bold mb-4 min-h-[64px] flex items-end'
                style={{ color: companyColors.blue }}>
                {pkg.title}
              </h3>

              <p className='text-gray-600 mb-6 text-sm leading-relaxed min-h-[80px]'>
                {pkg.idealFor}
              </p>

              <div className='mb-8 flex-grow'>
                <ul className='list-none space-y-3 text-gray-700'>
                  {pkg.includes.map((item, i) => (
                    <li key={i} className='flex items-start'>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className='w-4 h-4 mt-1 mr-3 text-[var(--obl-red)] flex-shrink-0'
                      />
                      <span className='text-sm font-medium'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The "Price" is now a Button */}
              <div className='mt-auto pt-6 border-t border-gray-200'>
                <Link
                  href={pkg.ctaLink}
                  onClick={() => logEvent('select_package', 'package_selection', pkg.title)}
                  className={`w-full block text-center py-3 px-6 rounded-md font-bold transition-colors duration-300 ${
                    pkg.mostPopular
                      ? 'bg-[var(--obl-blue)] text-white hover:bg-[var(--obl-dark-blue)]'
                      : 'bg-white border-2 border-[var(--obl-blue)] text-[var(--obl-blue)] hover:bg-[var(--obl-blue)] hover:text-white'
                  }`}>
                  {pkg.ctaLabel}
                </Link>
              </div>

              {/* Decorative bottom bar */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ease-in-out ${
                  pkg.mostPopular ? 'bg-[var(--obl-red)]' : 'bg-[var(--obl-blue)]'
                } scale-x-0 group-hover:scale-x-100 rounded-b-lg`}></div>
            </div>
          ))}
        </div>

        <div className='text-center mt-16 bg-blue-50 p-8 rounded-2xl'>
          <h3 className='text-2xl font-bold text-[var(--obl-dark-blue)] mb-4'>
            Not sure which one is right for you?
          </h3>
          <p className='text-gray-600 mb-6 max-w-xl mx-auto'>
            Most agencies will quote you blindly. We prefer to listen first. Let&apos;s have a quick
            15-minute chat to hear about your goals.
          </p>
          <Link
            href='/#contact'
            onClick={() =>
              logEvent('cta_click', 'book_consultation_footer', 'Book Free Strategy Call')
            }
            className='inline-flex items-center px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'
            style={{ backgroundColor: companyColors.red, color: 'white' }}>
            Book Free Strategy Call
            <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
}
