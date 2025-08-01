'use client';

// --- Next & React ---
import Link from 'next/link';
// --- Icons ---
import { ArrowRight, BrainCircuit } from 'lucide-react';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';

// --- Constants for this component ---
const companyColors = {
  red: 'var(--obl-red)',
  blue: 'var(--obl-blue)',
  darkBlue: 'var(--obl-dark-blue)',
};

export default function AIHeroClientSection() {
  return (
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
        <BrainCircuit size={80} className='mb-4' />
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
          Make Your Business Work <span style={{ color: companyColors.red }}>Smarter,</span> Not
          Harder.
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90'>
          Leverage the power of Artificial Intelligence to automate tasks, enhance customer service,
          and unlock new opportunities for your Buffalo business.
        </p>
        <Link
          href='/#contact'
          onClick={() => logEvent('cta_click', 'explore_ai_solutions_hero', 'Explore AI Solutions')}
          className='inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
          style={{
            background: `linear-gradient(to right, ${companyColors.blue}, ${companyColors.red})`,
            color: 'white',
          }}>
          Explore AI Solutions <ArrowRight className='w-5 h-5 ml-2' />
        </Link>
      </div>
    </section>
  );
}
