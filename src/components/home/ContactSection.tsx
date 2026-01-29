'use client';

import React from 'react';
import Link from 'next/link';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
  faFacebookF,
  faInstagram,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';
import Web3FormsContactForm from '@/components/Web3FormsContactForm';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';

// Social media links data
const socialLinks = [
  { name: 'Facebook', icon: faFacebookF, url: 'https://www.facebook.com/onebuffalolabs' },
  { name: 'Twitter', icon: faXTwitter, url: 'https://x.com/OneBuffaloLabs' },
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/company/one-buffalo-labs',
  },
  { name: 'GitHub', icon: faGithub, url: 'https://github.com/OneBuffaloLabs' },
  { name: 'Instagram', icon: faInstagram, url: 'https://www.instagram.com/onebuffalolabs/' },
  { name: 'Bluesky', icon: faBluesky, url: 'https://bsky.app/profile/onebuffalolabs.com' },
];

// --- Main ContactSection Component ---
const ContactSection = () => {
  return (
    <section id='contact' className='w-full bg-white py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-[var(--obl-dark-blue)]'>
            Let&apos;s Build Something <span className='text-[var(--obl-red)]'>Great.</span>
          </h2>
          <p className='text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>
            Ready to transform your digital presence? We&apos;re here to help. Reach out for a free
            consultation.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column: Contact Details */}
          <div className='flex flex-col justify-center space-y-8'>
            <div className='flex items-start p-6 rounded-lg bg-gray-50 border border-gray-200'>
              {/* FIXED: Added text-[32px] to match h-8 w-8 size */}
              <FontAwesomeIcon
                icon={faEnvelope}
                className='text-[32px] text-[var(--obl-blue)] mt-1 flex-shrink-0'
              />
              <div className='ml-4'>
                <h3 className='text-xl font-bold text-[var(--obl-dark-blue)]'>Email Us</h3>
                <p className='text-gray-600'>Direct inquiries or just want to say hello?</p>
                <a
                  href='mailto:info@onebuffalolabs.com'
                  className='text-lg text-[var(--obl-dark-blue)] font-semibold break-all transition-colors hover:text-[var(--obl-red)]'>
                  info@onebuffalolabs.com
                </a>
              </div>
            </div>

            <div className='flex items-start p-6 rounded-lg bg-gray-50 border border-gray-200'>
              {/* FIXED: Added text-[32px] to match h-8 w-8 size */}
              <FontAwesomeIcon
                icon={faLocationDot}
                className='text-[32px] text-[var(--obl-blue)] mt-1 flex-shrink-0'
              />
              <div className='ml-4'>
                <h3 className='text-xl font-bold text-[var(--obl-dark-blue)]'>Our Location</h3>
                <p className='text-lg text-gray-600'>
                  Proudly based in the heart of the resurgence.
                </p>
                <p className='text-lg font-semibold text-gray-800'>Buffalo, NY</p>
              </div>
            </div>

            {/* "Connect With Us" section */}
            <div className='pt-4'>
              <h3 className='text-xl font-bold text-[var(--obl-dark-blue)] text-center lg:text-left'>
                Connect With Us
              </h3>
              <p className='text-gray-600 mt-2 text-center lg:text-left'>
                Follow our journey and see our latest work on all our social platforms.
              </p>
              <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <Link
                  href='/socials'
                  className='group inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in-out w-full sm:w-auto'
                  style={{ backgroundColor: 'var(--obl-red)' }}
                  onClick={() => logEvent('navigation_click', 'contact_to_socials_page')}>
                  View All Socials
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='ml-2 text-sm transition-transform group-hover:translate-x-1'
                  />
                </Link>
                <div className='flex items-center space-x-2'>
                  {socialLinks.slice(0, 3).map(
                    (
                      social // Show first 3 icons
                    ) => (
                      <a
                        key={social.name}
                        href={social.url}
                        onClick={() =>
                          logEvent('social_link_click', 'social_contact_link', social.name)
                        }
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.name}
                        className='h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 transition-colors hover:bg-[var(--obl-dark-blue)] hover:text-white'>
                        {/* Increased social icon size slightly to text-xl for better visibility */}
                        <FontAwesomeIcon icon={social.icon} className='text-xl' />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Form */}
          <div className='bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 shadow-lg'>
            <div className='h-[550px] overflow-hidden rounded-md'>
              <Web3FormsContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
