// --- Next ---
import Image from 'next/image';
import Link from 'next/link';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// --- Data ---
import projects from '@/data/home/projects.json';

const PortfolioSection = () => {
  return (
    <section id='work' className='w-full bg-[var(--obl-dark-blue)] py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white'>
            Client <span className='text-[var(--obl-blue)]'>Success.</span>
          </h2>
          <p className='text-lg text-gray-400 mt-4 max-w-2xl mx-auto'>
            We partner with innovative businesses to build solutions that drive results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Main CTA - Updated to use Next.js Link */}
        <div className='text-center mt-16'>
          <Link
            href='/portfolio' // Corrected link to the portfolio page
            className='inline-block !px-10 !py-4 bg-[var(--obl-red)] text-white !rounded-full text-lg font-semibold shadow-lg transition-all
                        duration-300 ease-in-out hover:bg-[var(--obl-red)]/[.90] hover:scale-105'>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Project Card Component ---
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl, link }: ProjectCardProps) => {
  return (
    <a
      href={link}
      className='group relative block w-full aspect-square bg-gray-900 rounded-lg overflow-hidden shadow-2xl'>
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-cover w-full h-full transition-all duration-500 ease-in-out
                   group-hover:scale-105 group-hover:brightness-75'
      />

      {/* Content Overlay */}
      <div
        className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent
                   translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500 ease-in-out'>
        <div className='translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out delay-100'>
          <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
          <p className='text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200'>
            {description}
          </p>

          {/* Tech Stack & View Project Link */}
          <div className='flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300'>
            <div className='flex flex-wrap gap-2'>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className='bg-[var(--obl-blue)] text-white text-xs font-semibold px-2 py-1 rounded-full'>
                  {tech}
                </span>
              ))}
            </div>
            <div className='flex items-center text-[var(--obl-red)] font-semibold'>
              <span className='text-sm'>View Project</span>
              {/* Size match: size={16} -> text-[16px] */}
              <FontAwesomeIcon icon={faArrowRight} className='ml-1 text-[16px]' />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border Highlight on Hover */}
      <div className='absolute bottom-0 left-0 w-full h-1'>
        <div
          className='bg-[var(--obl-red)] h-full w-0 group-hover:w-full
                     transition-all duration-500 ease-in-out'></div>
      </div>
    </a>
  );
};

export default PortfolioSection;
