// --- Next ---
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// --- Icons ---
import {
  Bot,
  Workflow,
  BarChart4,
  Sparkles,
  Handshake,
  ClipboardList,
  Rocket,
  LifeBuoy,
  CheckCircle,
  PhoneMissed,
} from 'lucide-react';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Client Components ---
import AIHeroClientSection from './AIHeroClientSection';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'AI & Automation Solutions | One Buffalo Labs',
  description:
    'Leverage Artificial Intelligence to streamline operations, enhance customer service, and drive growth for your small to medium-sized business in Buffalo. Intelligent chatbots, process automation, and data insights.',
  keywords: [
    'AI solutions Buffalo',
    'Automation Buffalo',
    'AI for small business',
    'Business process automation',
    'AI chatbots',
    'Machine learning Buffalo',
    'Buffalo tech solutions',
    'missed call text back buffalo',
  ],
  urlPath: '/services/ai-integration',
});

// --- Constants for content and styles ---
const companyColors = {
  red: 'var(--obl-red)',
  blue: 'var(--obl-blue)',
  darkBlue: 'var(--obl-dark-blue)',
};

const aiSolutions = [
  {
    icon: Bot,
    title: 'Intelligent Chatbots',
    description:
      "Provide instant answers to your customers' most common questions, 24/7. Free up your team and capture leads even when you're closed.",
  },
  {
    icon: PhoneMissed,
    title: 'Automated Missed Call Assistant',
    description:
      "Instantly engage every missed caller with a custom text message. Stop losing customers to your voicemail and capture every lead while it's hot.",
  },
  {
    icon: Workflow,
    title: 'Automate Repetitive Tasks',
    description:
      'From data entry to appointment scheduling, we identify and automate the time-consuming tasks that slow your business down.',
  },
  {
    icon: BarChart4,
    title: 'Unlock Business Insights',
    description:
      'Use machine learning to analyze your business data, predict trends, and make smarter, data-driven decisions for future growth.',
  },
];

const aiProcessSteps = [
  {
    icon: Handshake,
    title: 'Identify Opportunity',
    description:
      'We start with a consultation to understand your business processes and find the highest-impact areas for automation.',
  },
  {
    icon: ClipboardList,
    title: 'Propose Solution',
    description:
      'We design a clear, practical AI solution with defined goals and transparent pricing. No "black box" technology.',
  },
  {
    icon: Rocket,
    title: 'Implement & Integrate',
    description:
      'We build and seamlessly integrate the AI tool into your existing website or workflow.',
  },
  {
    icon: LifeBuoy,
    title: 'Train & Support',
    description:
      'We provide full training for your team and ongoing support to ensure the solution delivers maximum value.',
  },
];

const aiReadinessQuestions = [
  'Do you find your team answering the same questions over and over?',
  "Do you worry about losing leads when you can't answer the phone?",
  'Do you spend hours on manual data entry or repetitive administrative tasks?',
  'Do you wish you could provide instant support to website visitors after hours?',
];

// --- PAGE COMPONENT ---
export default function AISolutionsPage() {
  return (
    <div className='min-h-screen bg-gray-50 font-sans text-gray-800'>
      {/* 1. Hero Section (Imported Client Component) */}
      <AIHeroClientSection />

      {/* 2. The Opportunity Section */}
      <section className='bg-white py-16 px-8'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <div className='space-y-6'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              Beyond the Hype: Practical AI for{' '}
              <span style={{ color: companyColors.blue }}>Real Results.</span>
            </h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Forget the sci-fi movies - Artificial Intelligence for business isn&apos;t about
              replacing people. It&apos;s about empowering your team and enhancing your operations.
              AI can give your existing employees &quot;superpowers&quot; by taking on the mundane,
              repetitive tasks that consume valuable time.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Imagine saving hours on data entry, providing instant 24/7 customer support, or
              automating scheduling. This frees up your team to focus on strategic work, customer
              relationships, and revenue-generating activities. Practical AI delivers tangible
              benefits: saving time, reducing errors, and creating a more efficient business.
            </p>
          </div>
          {/* Abstract, data-centric graphic */}
          <div className='relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-100'>
            <Image
              src='/images/misc/ai-data-graphic.webp'
              alt='Abstract data visualization'
              width={500}
              height={300}
              className='object-cover'
            />
          </div>
        </div>
      </section>
      {/* 3. Our AI Solutions Section */}
      <section className='bg-gray-50 py-16 px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
              How We Can Integrate AI Into Your{' '}
              <span style={{ color: companyColors.red }}>Business</span>
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              Our tailored AI solutions are designed to address your specific business challenges
              and opportunities.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
            {aiSolutions.map((solution, index) => (
              <div
                key={index}
                className='group relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-[var(--obl-blue)]'>
                <div
                  className='flex items-center justify-center h-16 w-16 rounded-full text-white mb-4'
                  style={{ backgroundColor: companyColors.blue }}>
                  <solution.icon size={32} />
                </div>
                <h3 className='text-2xl font-bold text-[var(--obl-dark-blue)] mb-2'>
                  {solution.title}
                </h3>
                <p className='text-gray-700 leading-relaxed flex-grow'>{solution.description}</p>
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
              A Practical, Phased <span style={{ color: companyColors.blue }}>Approach</span>
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              We guide you through every step of integrating AI, ensuring a smooth and beneficial
              transition.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {aiProcessSteps.map((step, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1'>
                <div
                  className='flex items-center justify-center h-16 w-16 rounded-full text-white mb-4'
                  style={{ backgroundColor: companyColors.red }}>
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
      {/* 5. "Is AI Right for You?" Section */}
      <section className='bg-gray-50 py-16 px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)] mb-8'>
            Is Your Business Ready for <span style={{ color: companyColors.red }}>AI</span>?
          </h2>
          <div className='max-w-2xl mx-auto space-y-6'>
            {aiReadinessQuestions.map((question, index) => (
              <div
                key={index}
                className='flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-left'>
                <CheckCircle
                  className='flex-shrink-0 w-6 h-6 mr-3 mt-1'
                  style={{ color: companyColors.blue }}
                />
                <p className='text-lg text-gray-700 font-semibold'>{question}</p>
              </div>
            ))}
          </div>
          <div
            className='mt-12 p-8 rounded-lg shadow-lg text-center mx-auto max-w-3xl'
            style={{ backgroundColor: companyColors.blue, color: 'white' }}>
            <p className='text-xl font-bold leading-relaxed'>
              If you answered &apos;yes&apos; to any of these, an AI solution could have a
              significant ROI for your business. Let&apos;s discuss how.
            </p>
          </div>
        </div>
      </section>
      {/* 6. Final Call to Action Section */}
      <section
        className='py-16 px-8 text-center'
        style={{ backgroundColor: companyColors.darkBlue, color: 'white' }}>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Step Into the Future of <span style={{ color: companyColors.red }}>Business.</span>
          </h2>
          <p className='text-lg leading-relaxed mb-8 text-gray-300'>
            Let&apos;s explore how a practical AI strategy can give your Buffalo business a
            competitive edge. Schedule a free, no-obligation AI consultation today.
          </p>
          <Link
            href='/#contact'
            className='inline-flex items-center px-10 py-4 bg-white text-[var(--obl-dark-blue)] rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200'>
            Book Your Free AI Consultation <Sparkles className='w-5 h-5 ml-2' />
          </Link>
        </div>
      </section>
    </div>
  );
}
