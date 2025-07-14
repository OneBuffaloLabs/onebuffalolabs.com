// --- Next ---
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// --- Icons ---
import {
  MapPin,
  ShieldCheck,
  FileText,
  Sparkles,
  Search,
  Lightbulb,
  ClipboardList,
  Rocket,
  ScrollText,
} from 'lucide-react';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'Digital Strategy & SEO Services | One Buffalo Labs',
  description:
    'Boost your online visibility and grow your business with expert Digital Strategy & SEO services from One Buffalo Labs. Local SEO, technical audits, content strategy, and more.',
  keywords: [
    'SEO Buffalo NY',
    'Digital Strategy Buffalo',
    'Local SEO',
    'Technical SEO',
    'On-page SEO',
    'SEO agency Buffalo',
    'Google ranking Buffalo',
    'Buffalo marketing agency',
  ],
  urlPath: '/services/seo',
});

// --- Constants for content and styles ---
const companyColors = {
  red: 'var(--obl-red)',
  blue: 'var(--obl-blue)',
  darkBlue: 'var(--obl-dark-blue)',
};

const coreSEOServices = [
  {
    icon: MapPin,
    title: 'Dominate the Local Map',
    description:
      'For Buffalo businesses, being found locally is everything. We optimize your Google Business Profile and local listings to attract customers in your area.',
  },
  {
    icon: ShieldCheck,
    title: 'Technical Health & Performance',
    description:
      "We audit your site's technical foundation, fixing errors and improving site speed to ensure search engines can crawl and rank you effectively.",
  },
  {
    icon: FileText,
    title: 'Content That Converts',
    description:
      'We help you target the right keywords and structure your content to answer customer questions, establishing you as an authority in your field.',
  },
];

const seoProcessSteps = [
  {
    icon: Lightbulb,
    title: 'Deep Dive Audit',
    description:
      'We analyze your website, your competitors, and your market to identify your biggest opportunities.',
  },
  {
    icon: ClipboardList,
    title: 'Strategic Roadmap',
    description:
      'We deliver a clear, prioritized action plan. No jargon, just a straightforward path to results.',
  },
  {
    icon: Rocket,
    title: 'Implementation & Optimization',
    description:
      'We get to work, implementing the changes needed to improve your visibility and performance.',
  },
  {
    icon: ScrollText,
    title: 'Reporting & Insights',
    description:
      'We provide clear, easy-to-understand reports showing your progress, so you always know how your investment is performing.',
  },
];

// --- PAGE COMPONENT ---
export default function SEOServicesPage() {
  return (
    <div className='min-h-screen bg-gray-50 font-sans text-gray-800'>
      {/* 1. Hero Section */}
      <section
        id='hero'
        className='relative min-h-[60vh] flex items-center justify-center text-center p-8 pt-20 overflow-hidden'
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
        <div className='relative z-10 flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto text-white'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
            Stop Guessing. Start <span style={{ color: companyColors.red }}>Growing.</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90'>
            A beautiful website is just the first step. Our Digital Strategy & SEO services ensure
            customers in Buffalo and beyond can actually find you.
          </p>
          <Link
            href='/#contact'
            className='inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
            style={{ backgroundColor: companyColors.blue, color: 'white' }}>
            Get Your Free SEO Analysis <Search className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </section>

      {/* 2. The Problem Section */}
      <section className='bg-white py-16 px-8'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <div className='space-y-6'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              Why Isn&apos;t My Website Getting{' '}
              <span style={{ color: companyColors.red }}>Traffic</span>?
            </h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              You&apos;ve invested in a professional website, but it feels like a hidden gem. The
              frustration is real: a great business, a great product or service, but potential
              customers just aren&apos;t finding you online. It&apos;s easy to think a website
              magically brings visitors, but in today&apos;s competitive digital landscape,
              visibility requires more.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Ranking on Google, standing out in local searches, and converting online interest into
              actual business requires a deliberate, data-driven strategy. Without it, even the most
              stunning website can remain largely invisible.
            </p>
          </div>
          {/* Supporting Visual (Abstract Line Graph) */}
          <div className='relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-100'>
            <Image
              src='/images/misc/seo-decline-graph.webp'
              alt='Declining or Flat Traffic Graph'
              width={500}
              height={300}
              className='object-cover'
            />
          </div>
        </div>
      </section>

      {/* 3. Our Core SEO Services Section */}
      <section className='bg-gray-50 py-16 px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              A Foundation for Sustainable <span style={{ color: companyColors.blue }}>Growth</span>
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              Our comprehensive SEO services are designed to improve your search engine rankings and
              attract more qualified leads.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {coreSEOServices.map((service, index) => (
              <div
                key={index}
                className='group relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-[var(--obl-blue)]'>
                <div
                  className='flex items-center justify-center h-16 w-16 rounded-full text-white mb-4'
                  style={{ backgroundColor: companyColors.red }}>
                  <service.icon size={32} />
                </div>
                <h3 className='text-2xl font-bold text-[var(--obl-dark-blue)] mb-2'>
                  {service.title}
                </h3>
                <p className='text-gray-700 leading-relaxed flex-grow'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Process Section */}
      <section className='bg-white py-16 px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              Our Data-Driven <span style={{ color: companyColors.blue }}>SEO Process</span>
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              We follow a proven methodology to ensure transparent results and continuous
              improvement.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {seoProcessSteps.map((step, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1'>
                <div
                  className='flex items-center justify-center h-16 w-16 rounded-full text-white mb-4'
                  style={{ backgroundColor: companyColors.blue }}>
                  <span className='text-3xl font-bold'>{index + 1}</span>
                </div>
                <h3 className='text-2xl font-bold text-[var(--obl-dark-blue)] mb-2'>
                  {step.title}
                </h3>
                <p className='text-gray-700 leading-relaxed flex-grow'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Why Us?" Section */}
      <section className='bg-gray-50 py-16 px-8'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Text Content Column */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
                Your Local SEO <span style={{ color: companyColors.blue }}>Partner</span>
              </h2>
              <p className='mt-4 text-lg text-gray-700 leading-relaxed'>
                As a Buffalo-based agency, we don&apos;t just understand SEO; we understand the
                unique nuances of the Western New York market. We&apos;re your neighbors, dedicated
                to helping local businesses thrive online.
              </p>
              <p className='mt-4 text-lg text-gray-700 leading-relaxed'>
                Our approach is built on transparency and education. We cut through the technical
                jargon, providing you with clear explanations and measurable results. You&apos;ll
                always know what we&apos;re doing and why, ensuring your digital investment truly
                pays off.
              </p>
            </div>
          </div>

          {/* Image Content Column */}
          <div className='relative h-96 lg:h-full min-h-[400px] rounded-lg shadow-2xl overflow-hidden'>
            <Image
              src='/images/misc/seo-partner.webp'
              alt='Professional team collaborating on SEO strategy'
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover'
            />
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action Section */}
      <section
        className='py-16 px-8 text-center'
        style={{ backgroundColor: companyColors.darkBlue, color: 'white' }}>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Ready to See Real <span style={{ color: companyColors.red }}>Results</span>?
          </h2>
          <p className='text-lg leading-relaxed mb-8 text-gray-300'>
            Stop leaving money on the table. Let&apos;s create a strategy that turns your website
            into your most valuable marketing asset.
          </p>
          <Link
            href='/#contact'
            className='inline-flex items-center px-10 py-4 bg-white text-[var(--obl-dark-blue)] rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200'>
            Request Your Free SEO Analysis & Proposal <Sparkles className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </section>
    </div>
  );
}
