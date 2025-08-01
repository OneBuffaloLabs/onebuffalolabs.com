'use client';

// --- React & Next.js ---
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';

// --- Unified Navigation Links ---
const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Our Labs', href: '/labs' },
  { name: 'Blog', href: '/blog' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Effect to handle header background style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change (good fallback)
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-[var(--obl-dark-blue)] shadow-lg border-b border-white/10'
            : 'bg-[var(--obl-dark-blue)]/80 backdrop-blur-lg'
        }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link href='/' className='flex items-center space-x-2'>
                <Image
                  src='/images/logos/no-text/one-buffalo-cartoon-no-text-trans.webp'
                  alt='One Buffalo Labs Logo'
                  width={70}
                  height={70}
                />
                <span className='font-bold text-xl hidden sm:inline text-white'>
                  One Buffalo Labs
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-8'>
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => logEvent('navigation_click', 'header_link', link.name)}
                    className={`font-medium relative group transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-gray-300 hover:text-[var(--obl-red)]'
                    }`}>
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--obl-red)] transition-transform duration-300 ease-out origin-center ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Desktop */}
            <div className='hidden lg:block'>
              <Link
                href='/#contact'
                onClick={() => {
                  setIsMenuOpen(false);
                  logEvent('cta_click', 'start_project_header', 'Start Your Project');
                }}
                className='px-6 py-2 bg-[var(--obl-red)] text-white rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-[var(--obl-red)]/90 hover:scale-105'>
                Start Your Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden flex items-center'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50 cursor-pointer'
                aria-expanded={isMenuOpen}>
                <span className='sr-only'>Open main menu</span>
                <div className='w-6 h-6 flex flex-col justify-around'>
                  <span
                    className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                    }`}></span>
                  <span
                    className={`block w-full h-0.5 bg-current transition duration-150 ease-in-out ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}></span>
                  <span
                    className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
                    }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--obl-dark-blue)]/95 backdrop-blur-xl lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='flex flex-col items-center justify-center h-full pt-20'>
          <nav className='flex flex-col items-center space-y-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='text-2xl font-bold text-gray-200 hover:text-[var(--obl-red)] transition-colors'>
                {link.name}
              </Link>
            ))}
            <Link
              href='/#contact'
              onClick={() => {
                setIsMenuOpen(false);
                logEvent('cta_click', 'start_project_mobile', 'Start Your Project');
              }}
              className='mt-8 px-8 py-3 bg-[var(--obl-red)] text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-[var(--obl-red)]/90 hover:scale-105'>
              Start Your Project
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
