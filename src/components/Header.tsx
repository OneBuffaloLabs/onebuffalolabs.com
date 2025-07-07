'use client';

// --- React & Next.js ---
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname hook

// --- Navigation Links Data ---
const homeNavLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Partners', href: '#partners' },
  { name: 'Our Labs', href: '/labs' },
];

const secondaryNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Labs', href: '/labs' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get the current path to determine which links to show
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Choose the correct set of navigation links based on the current page
  const navLinks = isHomePage ? homeNavLinks : secondaryNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isHomePage) {
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on a secondary page, navigate to home and then scroll
      window.location.href = `/${href}`;
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              {isHomePage ? (
                <a href='#hero' onClick={scrollToTop} className='flex items-center space-x-2'>
                  <Image
                    src='/logos/one-buffalo-cartoon-no-text.svg'
                    alt='One Buffalo Labs Logo'
                    width={50}
                    height={50}
                  />
                  <span className='font-bold text-xl hidden sm:inline text-white'>
                    One Buffalo Labs
                  </span>
                </a>
              ) : (
                <Link href='/' className='flex items-center space-x-2'>
                  <Image
                    src='/logos/one-buffalo-cartoon-no-text.svg'
                    alt='One Buffalo Labs Logo'
                    width={50}
                    height={50}
                  />
                  <span className='font-bold text-xl hidden sm:inline text-white'>
                    One Buffalo Labs
                  </span>
                </Link>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    isHomePage && link.href.startsWith('#')
                      ? handleScrollToSection(e, link.href)
                      : undefined
                  }
                  className='text-gray-300 hover:text-[var(--obl-red)] transition-colors duration-200 font-medium relative group'>
                  {link.name}
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-[var(--obl-red)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center'></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className='hidden lg:block'>
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                onClick={(e) => (isHomePage ? handleScrollToSection(e, '#contact') : undefined)}
                className='px-6 py-2 bg-[var(--obl-red)] text-white rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-[var(--obl-red)]/90 hover:scale-105'>
                Start Your Project
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden flex items-center'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50'
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
                onClick={(e) => {
                  if (isHomePage && link.href.startsWith('#')) {
                    handleScrollToSection(e, link.href);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
                className='text-2xl font-bold text-gray-200 hover:text-[var(--obl-red)] transition-colors'>
                {link.name}
              </Link>
            ))}
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              onClick={(e) => {
                if (isHomePage) {
                  handleScrollToSection(e, '#contact');
                } else {
                  setIsMenuOpen(false);
                }
              }}
              className='mt-8 px-8 py-3 bg-[var(--obl-red)] text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-[var(--obl-red)]/90 hover:scale-105'>
              Start Your Project
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
