'use client';

// --- Next ---
import Image from 'next/image';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center text-center p-8 pt-20 overflow-hidden bg-[var(--obl-dark-blue)] text-white'>
      {/* Subtle, dynamic background element: Abstract gradient shapes */}
      <div
        className='absolute inset-0 z-0 opacity-20'
        style={{
          background:
            'radial-gradient(circle at top left, var(--obl-blue) 0%, transparent 40%), radial-gradient(circle at bottom right, var(--obl-red) 0%, transparent 40%)',
          mixBlendMode: 'lighten',
        }}></div>

      {/* Main content container */}
      <div className='relative z-10 flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto'>
        {/* Company Logo */}
        <Image
          src='/images/logos/no-text/one-buffalo-cartoon-no-text.svg'
          alt='One Buffalo Labs Logo'
          width={150}
          height={150}
          className='w-50 h-50 sm:w-65 sm:h-65 md:w-75 md:h-75'
        />
        {/* Main Headline */}
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
          Powering <span className='text-[var(--obl-blue)]'>Buffalo&apos;s</span> Digital{' '}
          <span className='text-[var(--obl-red)]'>Future.</span>{' '}
        </h1>
        {/* Sub-headline */}
        <p className='text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90'>
          We design, develop, and optimize websites and applications for businesses big and small,
          driving growth and efficiency with cutting-edge tech and AI.
        </p>
        {/* Call-to-Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
          <a
            href='#contact'
            onClick={() => logEvent('cta_click', 'consultation_hero', 'Get a Free Consultation')}
            className='!px-10 !py-4 bg-[var(--obl-red)] text-white !rounded-full text-lg font-semibold shadow-lg transition-all
                                             duration-300 ease-in-out hover:bg-[var(--obl-red)]/[.90] hover:scale-105'>
            Get a Free Consultation
          </a>
          <a
            href='#services'
            onClick={() => logEvent('cta_click', 'explore_services_hero', 'Explore Our Services')}
            className='!px-10 !py-4 bg-transparent border-2 border-[var(--obl-blue)] text-[var(--obl-blue)] !rounded-full
                                            text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-[var(--obl-blue)] hover:text-white hover:scale-105'>
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
