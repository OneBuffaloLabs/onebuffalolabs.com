// --- Next ---
import type { Metadata } from 'next';
import Link from 'next/link';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
  faGears,
  faWrench,
  faBoxOpen,
  faArrowRight,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'Custom 3D Printing Services | One Buffalo Labs',
  description:
    'Local 3D printing services in Buffalo, NY. We offer rapid prototyping, custom replacement parts, small-batch manufacturing, and original maker designs.',
  keywords: [
    '3D printing Buffalo',
    'custom 3D prints',
    'rapid prototyping',
    'replacement parts',
    'small batch manufacturing',
    '3D printing services',
    'One Buffalo Prints',
  ],
  urlPath: '/services/3d-printing',
});

// --- Constants for content and styles ---
const companyColors = {
  red: 'var(--obl-red)',
  blue: 'var(--obl-blue)',
  darkBlue: 'var(--obl-dark-blue)',
};

const printingOfferings = [
  {
    icon: faGears,
    title: 'Rapid Prototyping',
    description:
      'Turn your CAD files into physical objects fast. Whether you are testing form, fit, or function, we help you iterate quickly before committing to expensive manufacturing.',
  },
  {
    icon: faWrench,
    title: 'Custom Fixes & Parts',
    description:
      'Can’t find a replacement part for a broken appliance, bracket, or tool? If it can be modeled, it can be printed. We help fix the unfixable.',
  },
  {
    icon: faCubes,
    title: 'Small-Batch Production',
    description:
      'Need 50 custom keychains for an event or a dozen specialized desk organizers for your office? We handle short-run manufacturing without the massive setup costs.',
  },
  {
    icon: faBoxOpen,
    title: 'One Buffalo Prints',
    description:
      'Shop our own in-house catalog of custom toys, statues, and practical household mods. See something you like on our open-source repo? We can print and ship it to you.',
    actionLink: 'https://github.com/OneBuffaloLabs/one-buffalo-prints',
    actionText: 'Browse the repo',
  },
];

const materials = [
  'PLA (Great for display pieces and general prototypes)',
  'PETG (Durable, heat-resistant, perfect for functional parts)',
  'TPU (Flexible, rubber-like material for custom gaskets or cases)',
];

// --- PAGE COMPONENT ---
export default function ThreeDPrintingServicePage() {
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
            Bringing Digital Designs into the{' '}
            <span style={{ color: companyColors.red }}>Physical World.</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90'>
            From rapid prototypes to custom functional parts, our local Buffalo 3D printing studio
            turns your ideas into reality.
          </p>
        </div>
      </section>

      {/* 2. Offerings Grid Section */}
      <section className='py-16 px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              How We Can <span style={{ color: companyColors.blue }}>Help</span>
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              We run reliable, commercial-grade 3D printers to deliver strong, precise parts
              tailored to your exact needs.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {printingOfferings.map((offering, index) => (
              <div
                key={index}
                className='flex flex-col p-8 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>
                <div className='flex items-center mb-4'>
                  <div
                    className='flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-white'
                    style={{ backgroundColor: companyColors.blue }}>
                    <FontAwesomeIcon icon={offering.icon} className='text-xl' />
                  </div>
                  <h3 className='ml-4 text-2xl font-bold text-[var(--obl-dark-blue)]'>
                    {offering.title}
                  </h3>
                </div>
                <p className='text-lg text-gray-700 leading-relaxed flex-grow mb-4'>
                  {offering.description}
                </p>
                {offering.actionLink && (
                  <a
                    href={offering.actionLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center font-semibold transition-colors duration-200 hover:opacity-80'
                    style={{ color: companyColors.blue }}>
                    {offering.actionText}
                    <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4 ml-2' />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Materials & Tech Info Section */}
      <section className='py-16 px-8 bg-gray-100'>
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12'>
          <div className='md:w-1/2'>
            <h2 className='text-3xl sm:text-4xl font-bold text-[var(--obl-dark-blue)] mb-6'>
              Built for <span style={{ color: companyColors.red }}>Durability.</span>
            </h2>
            <p className='text-lg text-gray-700 mb-6'>
              Not all plastics are created equal. We don&apos;t just print cheap, brittle trinkets.
              Depending on your project&apos;s needs—whether it&apos;s going to sit on a desk or
              hold up a shelf in a hot garage—we select the right material for the job.
            </p>
            <ul className='space-y-4 text-lg text-gray-700'>
              {materials.map((mat, i) => (
                <li key={i} className='flex items-start'>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className='mt-1 mr-3'
                    style={{ color: companyColors.blue }}
                  />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='md:w-1/2 bg-white p-8 rounded-lg shadow-md border border-gray-200'>
            <h3 className='text-2xl font-bold text-[var(--obl-dark-blue)] mb-4'>
              Have your own file?
            </h3>
            <p className='text-gray-600 mb-6'>
              If you already have an `.stl`, `.step`, or `.3mf` file ready to go, send it our way!
              We can review the mesh, slice it for optimal strength, and give you a straight-forward
              quote based on material usage and print time.
            </p>
            <Link
              href='/#contact'
              className='inline-flex items-center font-semibold transition-colors duration-200 hover:opacity-80'
              style={{ color: companyColors.red }}>
              Request a Print Quote
              <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4 ml-2' />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Final Call to Action Section */}
      <section
        className='py-16 px-8 text-center'
        style={{ backgroundColor: companyColors.darkBlue, color: 'white' }}>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Ready to Start <span style={{ color: companyColors.blue }}>Printing</span>?
          </h2>
          <p className='text-lg leading-relaxed mb-8 text-gray-300'>
            Whether you need a single prototype, a batch of functional parts, or just want to chat
            about what&apos;s possible, let&apos;s get your project on the build plate.
          </p>
          <Link
            href='/#contact'
            className='inline-flex items-center px-10 py-4 bg-white text-[var(--obl-dark-blue)] rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200'>
            Contact Us Today
            <FontAwesomeIcon icon={faCubes} className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </section>
    </div>
  );
}
