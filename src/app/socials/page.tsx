import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
  faFacebookF,
  faInstagram,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';

// --- Data for Social Links ---
const socialLinks = [
  {
    name: 'LinkedIn',
    handle: 'one-buffalo-labs',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/company/one-buffalo-labs',
    cta: 'Connect',
    colorClass: 'hover:border-blue-700',
    iconColorClass: 'text-blue-700',
  },
  {
    name: 'X (Twitter)',
    handle: '@OneBuffaloLabs',
    icon: faXTwitter,
    url: 'https://x.com/OneBuffaloLabs',
    cta: 'Follow',
    colorClass: 'hover:border-gray-800',
    iconColorClass: 'text-gray-800',
  },
  {
    name: 'GitHub',
    handle: 'OneBuffaloLabs',
    icon: faGithub,
    url: 'https://github.com/OneBuffaloLabs',
    cta: 'View',
    colorClass: 'hover:border-gray-900',
    iconColorClass: 'text-gray-900',
  },
  {
    name: 'Facebook',
    handle: 'OneBuffaloLabs',
    icon: faFacebookF,
    url: 'https://www.facebook.com/profile.php?id=61578291081644',
    cta: 'Like',
    colorClass: 'hover:border-blue-600',
    iconColorClass: 'text-blue-600',
  },
  {
    name: 'Instagram',
    handle: '@onebuffalolabs',
    icon: faInstagram,
    url: 'https://www.instagram.com/onebuffalolabs/',
    cta: 'Follow',
    colorClass: 'hover:border-pink-500',
    iconColorClass: 'text-pink-500',
  },
  {
    name: 'Bluesky',
    handle: 'onebuffalolabs.com',
    icon: faBluesky,
    url: 'https://bsky.app/profile/onebuffalolabs.com',
    cta: 'Follow',
    colorClass: 'hover:border-sky-500',
    iconColorClass: 'text-sky-500',
  },
];

// --- The Main Page Component ---
const SocialsPage = () => {
  return (
    <div className='bg-gray-50 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* --- Section Header --- */}
        <div className='mx-auto max-w-2xl text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-[var(--obl-dark-blue)] sm:text-6xl'>
            Connect With Us
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Stay in the loop with our latest projects, insights, and news. Follow us on your
            favorite platforms.
          </p>
        </div>

        {/* --- Social Cards Grid --- */}
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className={`group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg
                         transition-all duration-300 ease-in-out
                         hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent ${link.colorClass}`}>
              <div>
                <FontAwesomeIcon
                  icon={link.icon}
                  className={`h-10 w-10 transition-colors duration-300 ${link.iconColorClass}`}
                />
                <h3 className='mt-6 text-2xl font-semibold leading-6 text-gray-900'>{link.name}</h3>
                <p className='mt-2 text-base leading-7 text-gray-600'>{link.handle}</p>
              </div>

              {/* --- Call to Action Button --- */}
              <div
                className='mt-8 inline-block self-start rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm
                           transition-colors duration-300 ease-in-out'
                style={{ backgroundColor: 'var(--obl-red)' }}>
                {link.cta}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialsPage;
