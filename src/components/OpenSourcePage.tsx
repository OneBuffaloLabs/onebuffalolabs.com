'use client';

// --- Icons ---
import { Github, GitFork, ExternalLink } from 'lucide-react';
// --- Data ---
// Assuming labs.json is in /src/data/ and contains a root "projects" array.
import LABS_PROJECTS from '@/data/labs.json';

const GITHUB_ORGS = [
  {
    name: 'OneBuffaloLabs',
    url: 'https://github.com/OneBuffaloLabs',
    icon: GitFork,
    description: 'Primary organization for our main projects and collaborations.',
  },
  {
    name: 'SiloCityLabs',
    url: 'https://github.com/SiloCityLabs',
    icon: GitFork,
    description: 'Experimental projects and community-focused initiatives.',
  },
];

// --- REACT COMPONENT ---
export default function OpenSourcePage() {
  return (
    <div className='w-full bg-[var(--obl-dark-blue)] text-white font-sans'>
      <div className='relative max-w-7xl mx-auto px-8 py-16 pt-28'>
        {/* Decorative background gradients to add depth */}
        <div
          className='absolute inset-0 z-0 opacity-10 pointer-events-none'
          style={{
            background:
              'radial-gradient(circle at 15% 25%, var(--obl-blue) 0%, transparent 35%), radial-gradient(circle at 85% 75%, var(--obl-red) 0%, transparent 30%)',
          }}
        />

        <main className='relative z-10'>
          {/* --- HEADER SECTION --- */}
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
              Our Labs & Open Source Initiatives
            </h1>
            <p className='text-lg md:text-xl text-gray-400 leading-relaxed'>
              Beyond client projects, we dedicate ourselves to pushing boundaries, exploring new
              technologies, and giving back. Discover our passion projects and contributions to the
              open-source community.
            </p>
          </div>

          {/* --- GITHUB ORGANIZATIONS SECTION --- */}
          <div className='mb-20'>
            <h2 className='text-3xl font-bold text-center mb-8'>Our GitHub Organizations</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              {GITHUB_ORGS.map((org) => (
                <a
                  key={org.name}
                  href={org.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block p-6 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:border-[var(--obl-blue)] hover:bg-white/10'>
                  <div className='flex items-center mb-2'>
                    <org.icon className='w-6 h-6 mr-3 text-[var(--obl-blue)]' />
                    <span className='text-xl font-bold text-white'>{org.name}</span>
                  </div>
                  <p className='text-gray-400'>{org.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* --- PROJECTS GRID --- */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {LABS_PROJECTS.map((project) => (
              <div
                key={project.title}
                className='group relative flex flex-col bg-white/5 border border-white/10 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_25px_-5px_var(--obl-blue)] hover:border-[var(--obl-blue)]'>
                <div className='p-6 flex-grow flex flex-col'>
                  {/* Card Header */}
                  <div className='flex-grow'>
                    {/* CORRECTED: Added gradient styling to the project title */}
                    <h3 className='text-2xl font-bold mb-2 text-center bg-gradient-to-r from-[var(--obl-blue)] to-[var(--obl-red)] bg-clip-text text-transparent'>
                      {project.title}
                    </h3>
                    <p className='text-gray-400 leading-relaxed mb-6 text-center'>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className='mb-6'>
                    <div className='flex flex-wrap gap-2 justify-center'>
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className='font-mono text-sm bg-[var(--obl-blue)]/20 text-[var(--obl-blue)] px-3 py-1 rounded-full'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Links */}
                <div className='border-t border-white/10 bg-black/20 p-4 flex justify-between items-center'>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center font-semibold text-gray-300 transition-colors hover:text-[var(--obl-red)]'>
                    <Github className='w-5 h-5 mr-2' />
                    View on GitHub
                  </a>

                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center font-semibold text-gray-300 transition-colors hover:text-[var(--obl-red)]'>
                      Live Demo
                      <ExternalLink className='w-5 h-5 ml-1' />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
