'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
  faInstagram,
  faFacebookF,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';

// --- Data for links to keep JSX clean ---
const mainFooterLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Our Labs', href: '/labs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Socials', href: '/socials' },
];

const legalLinks = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/company/one-buffalo-labs',
  },
  { name: 'Twitter', icon: faXTwitter, url: 'https://x.com/OneBuffaloLabs' },
  { name: 'GitHub', icon: faGithub, url: 'https://github.com/OneBuffaloLabs' },
  { name: 'Facebook', icon: faFacebookF, url: 'https://www.facebook.com/onebuffalolabs' },
  { name: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/onebuffalolabs/' },
  { name: 'Bluesky', icon: faBluesky, url: 'https://bsky.app/profile/onebuffalolabs.com' },
];

const Footer = () => {
  return (
    <footer className='bg-[var(--obl-dark-blue)] text-white border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-8 py-16'>
        {/* Main grid for footer content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10'>
          {/* Column 1: Brand & About */}
          <div className='space-y-4 pr-4'>
            <Link href='/' className='flex items-center space-x-2 group'>
              <Image
                src='/images/logos/no-text/one-buffalo-cartoon-no-text.svg'
                alt='One Buffalo Labs Logo'
                width={40}
                height={40}
              />
              <span className='font-bold text-lg text-gray-200 group-hover:text-white transition-colors'>
                One Buffalo Labs
              </span>
            </Link>
            <p className='text-gray-400 text-sm'>
              Powering Buffalo&apos;s Digital Future with cutting-edge web, app, and AI solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className='font-bold text-lg mb-4 text-gray-200'>Quick Links</h3>
            <ul className='space-y-2'>
              {mainFooterLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => logEvent('navigation_click', 'footer_link', link.name)}
                    className='text-gray-400 hover:text-[var(--obl-red)] transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className='font-bold text-lg mb-4 text-gray-200'>Get in Touch</h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='w-5 h-5 mr-3 mt-1 text-[var(--obl-blue)] flex-shrink-0'
                />
                <a
                  href='mailto:info@onebuffalolabs.com'
                  className='text-gray-400 hover:text-[var(--obl-red)] transition-colors break-all'>
                  info@onebuffalolabs.com
                </a>
              </li>
              <li className='flex items-start'>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className='w-5 h-5 mr-3 mt-1 text-[var(--obl-blue)] flex-shrink-0'
                />
                <span className='text-gray-400'>Buffalo, NY</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className='font-bold text-lg mb-4 text-gray-200'>Follow Us</h3>
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  onClick={() => logEvent('social_link_click', 'social_footer_link', social.name)}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                  className='h-10 w-10 flex items-center justify-center bg-white/10 rounded-full text-gray-300 transition-all duration-300 hover:bg-[var(--obl-red)] hover:text-white hover:scale-110'>
                  <FontAwesomeIcon icon={social.icon} className='text-lg' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-500 text-sm'>
            &copy; 2025 One Buffalo Labs. All rights reserved.
          </p>
          <div className='flex items-center gap-x-6 text-sm'>
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => logEvent('navigation_click', 'footer_link', link.name)}
                className='text-gray-500 hover:text-[var(--obl-red)] transition-colors'>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
