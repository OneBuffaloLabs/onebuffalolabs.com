'use client';

import React, { useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

// --- Type definition for the Tally object on the window ---
interface Tally {
  loadEmbeds: () => void;
}

declare global {
  interface Window {
    Tally?: Tally;
  }
}

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/company/one-buffalo-labs',
  },
  {
    name: 'Twitter',
    icon: faXTwitter,
    url: 'https://x.com/OneBuffaloLabs',
  },
  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/OneBuffaloLabs',
  },
  {
    name: 'Facebook',
    icon: faFacebookF,
    url: 'https://www.facebook.com/profile.php?id=61578291081644',
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/onebuffalolabs/',
  },
];

// --- A dedicated component to handle the Tally form embed script ---
const TallyEmbed = () => {
  useEffect(() => {
    const scriptId = 'tally-embed-script';
    const scriptSrc = 'https://tally.so/widgets/embed.js';

    const loadTally = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      }
    };

    if (document.getElementById(scriptId)) {
      loadTally();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = scriptSrc;
    script.onload = loadTally;
    script.onerror = () => console.error('Failed to load Tally script.');
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
      }
    };
  }, []);

  return (
    <iframe
      data-tally-src='https://tally.so/embed/310dAQ?hideTitle=1'
      loading='lazy'
      width='100%'
      height='100%'
      title='Contact Us Form'
      className='h-full w-full'></iframe>
  );
};

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
              <Mail className='h-8 w-8 text-[var(--obl-blue)] mt-1 flex-shrink-0' />
              <div className='ml-4'>
                <h3 className='text-xl font-bold text-[var(--obl-dark-blue)]'>Email Us</h3>
                <p className='text-gray-600'>Direct inquiries or just want to say hello?</p>
                <a
                  href='mailto:onebuffalolabs@gmail.com'
                  className='text-lg text-[var(--obl-dark-blue)] font-semibold break-all transition-colors hover:text-[var(--obl-red)]'>
                  onebuffalolabs@gmail.com
                </a>
              </div>
            </div>

            <div className='flex items-start p-6 rounded-lg bg-gray-50 border border-gray-200'>
              <MapPin className='h-8 w-8 text-[var(--obl-blue)] mt-1 flex-shrink-0' />
              <div className='ml-4'>
                <h3 className='text-xl font-bold text-[var(--obl-dark-blue)]'>Our Location</h3>
                <p className='text-lg text-gray-600'>
                  Proudly based in the heart of the resurgence.
                </p>
                <p className='text-lg font-semibold text-gray-800'>Buffalo, NY</p>
              </div>
            </div>

            <div className='pt-4'>
              <h3 className='text-xl font-bold text-[var(--obl-dark-blue)] text-center lg:text-left'>
                Connect With Us
              </h3>
              <div className='flex justify-center lg:justify-start space-x-4 mt-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.name}
                    className='h-12 w-12 flex items-center justify-center bg-[var(--obl-dark-blue)] rounded-full text-white transition-colors hover:bg-[var(--obl-red)]'>
                    <FontAwesomeIcon icon={social.icon} className='text-xl' />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Form */}
          <div className='bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 shadow-lg'>
            <div className='h-[550px] overflow-hidden rounded-md'>
              <TallyEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
