import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import { generateMetadata } from '@/utils/metadata';
import FORGE_LINKS from '@/data/cold-front-forge-links.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faEtsy,
  faFacebook,
  faInstagram,
  faXTwitter,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCubes,
  faCube,
  faDrawPolygon,
  faShapes,
  faLayerGroup,
  faEnvelope,
  faScrewdriverWrench,
  faArrowRight,
  faTrophy,
  faDumbbell,
  faBoxArchive,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = generateMetadata({
  title: 'Cold Front Forge | 3D Printing & Maker Workshop',
  description:
    'Custom trophies, tabletop card gear, and rugged home gym attachments—designed and 3D printed in Buffalo, NY.',
  keywords: [
    'cold front forge',
    '3d printing',
    'open source',
    'openscad',
    'trophies',
    'tcg storage',
    'gym accessories',
    'buffalo ny',
  ],
  urlPath: '/labs/cold-front-forge',
});

const ICON_MAP: Record<string, any> = {
  faCubes,
  faCube,
  faDrawPolygon,
  faShapes,
  faLayerGroup,
  faGithub,
  faFacebook,
  faInstagram,
  faXTwitter,
  faBluesky,
};

export default function ColdFrontForgePage() {
  const repositories = FORGE_LINKS.filter((item) => item.category === 'repository');
  const socials = FORGE_LINKS.filter((item) => item.category === 'social');

  return (
    <div className='w-full bg-[var(--obl-dark-blue)] text-white font-sans min-h-screen'>
      <div className='relative max-w-5xl mx-auto px-8 py-16 pt-28'>
        <div
          className='absolute inset-0 z-0 opacity-10 pointer-events-none'
          style={{
            background:
              'radial-gradient(circle at 20% 20%, var(--obl-blue) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--obl-red) 0%, transparent 40%)',
          }}
        />

        <main className='relative z-10'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <div className='max-w-3xl mx-auto mb-8 bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/ventures/cff-banner-1200x300.webp'
                alt='Cold Front Forge Banner'
                width={1200}
                height={300}
                className='w-full h-auto'
                priority
              />
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              From Code to Crucible: Hardware Built for Work and Play
            </h1>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
              Formerly 1BfloPrints, Cold Front Forge is our hands-on maker workshop at One Buffalo
              Labs. We design and build custom trophies, tabletop card gear, and rugged home gym
              attachments—sharing our designs openly with the 3D printing community.
            </p>
          </div>

          {/* Three Core Product Lines */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
            <div className='bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col'>
              <FontAwesomeIcon icon={faTrophy} className='text-3xl text-amber-400 mb-4' />
              <h3 className='text-xl font-bold mb-2'>Custom Trophies & Awards</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Standout, custom-designed awards for fantasy leagues, gaming tournaments, and local
                championships.
              </p>
            </div>

            <div className='bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col'>
              <FontAwesomeIcon
                icon={faBoxArchive}
                className='text-3xl text-[var(--obl-blue)] mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Tabletop & TCG Gear</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Sturdy deck boxes, slab display stands, and token trays made to protect and show off
                your card collection.
              </p>
            </div>

            <div className='bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col'>
              <FontAwesomeIcon icon={faDumbbell} className='text-3xl text-[var(--obl-red)] mb-4' />
              <h3 className='text-xl font-bold mb-2'>Gym Hardware & Tools</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Heavy-duty rack attachments, barbell collars, and cable attachment holders built and
                tested in real home gyms.
              </p>
            </div>
          </div>

          {/* Philosophy & Model Repositories */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            <div className='bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col justify-between'>
              <div>
                <FontAwesomeIcon
                  icon={faScrewdriverWrench}
                  className='text-3xl text-[var(--obl-blue)] mb-4'
                />
                <h2 className='text-2xl font-bold mb-3'>How We Design: Easy to Tweak and Print</h2>
                <p className='text-gray-300 leading-relaxed mb-4'>
                  Most 3D models online are locked into fixed dimensions. If a bolt hole is 1mm too
                  tight or your printer shrinks the plastic a tiny bit, you are stuck fighting the
                  file.
                </p>
                <p className='text-gray-400 leading-relaxed mb-4'>
                  We write our models with code using OpenSCAD. That means dimensions, wall
                  thicknesses, and fit clearances are simple numbers you can change in seconds.
                </p>
                <p className='text-gray-400 leading-relaxed'>
                  Print our ready-to-go STLs right away, or open the source code to match your exact
                  setup. All of our base designs are free to download and print.
                </p>
              </div>

              {/* Social Channels Callout */}
              <div className='mt-8 pt-6 border-t border-white/10'>
                <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2'>
                  <FontAwesomeIcon icon={faShareNodes} /> Follow the Forge
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {socials.map((social) => {
                    const icon = ICON_MAP[social.iconKey];
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/40 border border-white/10 hover:border-[var(--obl-blue)] text-xs font-medium text-gray-300 hover:text-white transition-colors'>
                        {icon && <FontAwesomeIcon icon={icon} className='text-sm' />}
                        {social.platform}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className='bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col justify-center'>
              <h2 className='text-2xl font-bold mb-6 text-center'>Download Free Models</h2>
              <div className='flex flex-col gap-3'>
                {repositories.map((repo) => {
                  const icon = ICON_MAP[repo.iconKey];
                  return (
                    <a
                      key={repo.id}
                      href={repo.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-between p-3.5 bg-black/30 border border-white/10 rounded-lg hover:border-[var(--obl-blue)] transition-colors'>
                      <span className='flex items-center text-base font-semibold'>
                        {icon && (
                          <FontAwesomeIcon icon={icon} className='text-xl mr-3 w-5 text-center' />
                        )}
                        {repo.platform}
                        <span className='ml-2 text-xs font-normal text-gray-400'>
                          ({repo.handle})
                        </span>
                      </span>
                      <FontAwesomeIcon icon={faArrowRight} className='text-gray-500 text-sm' />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Official Storefront */}
          <div className='mt-16 p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl text-center flex flex-col items-center'>
            <FontAwesomeIcon icon={faEtsy} className='text-5xl text-[#F16131] mb-6' />
            <h2 className='text-3xl font-bold mb-4'>Official Forge Storefront</h2>
            <p className='text-gray-300 max-w-2xl mx-auto mb-8 text-lg'>
              Don&apos;t have a printer, or just want tough, finished parts ready to use? We make
              and ship high-strength physical gear, league trophies, and custom prints straight from
              Buffalo, NY.
            </p>
            <a
              href='https://coldfrontforge.etsy.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-8 py-3 bg-[#F16131] hover:bg-[#D14111] text-white font-bold rounded transition-colors text-lg'>
              Shop Cold Front Forge on Etsy
            </a>
          </div>

          {/* Custom Requests Link */}
          <div className='mt-16 p-8 md:p-12 bg-gradient-to-br from-black/60 to-black/30 border border-[var(--obl-red)]/30 rounded-2xl text-center'>
            <h2 className='text-3xl font-bold mb-4'>Custom Orders & Prototypes</h2>
            <p className='text-gray-300 max-w-2xl mx-auto mb-8 text-lg'>
              Need a set of custom trophies for your league, a unique award for an event, or a
              special part fitted for your gym rack? We handle the design, 3D modeling, and physical
              printing from start to finish.
            </p>
            <a
              href='https://coldfrontforge.com/custom-requests/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-8 py-3 bg-[var(--obl-red)] hover:bg-red-700 text-white font-bold rounded transition-colors text-lg'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
              Request Custom Work
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
