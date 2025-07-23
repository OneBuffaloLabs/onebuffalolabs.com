import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-8 text-center relative overflow-hidden'>
      {/* Background Watermark Logo */}
      <div className='absolute inset-0 z-0 flex items-center justify-center'>
        <Image
          src='/images/logos/no-text/one-buffalo-cartoon-no-text.svg'
          alt='One Buffalo Labs Mascot'
          width={500}
          height={500}
          className='opacity-5'
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex flex-col items-center'>
        {/* The large "404" number with a brand-colored gradient */}
        <h1 className='text-9xl font-black bg-gradient-to-r from-[var(--obl-blue)] to-[var(--obl-red)] bg-clip-text text-transparent mb-2'>
          404
        </h1>

        {/* The main heading */}
        <h2 className='text-4xl font-bold text-[var(--obl-dark-blue)] mb-4'>Page Not Found</h2>

        {/* The friendly message */}
        <p className='text-lg text-gray-600 max-w-md mx-auto mb-8'>
          Oops! It looks like you&apos;ve ventured off the path. The page you&apos;re looking for
          doesn&apos;t exist or has been moved.
        </p>

        {/* The call-to-action button */}
        <Link
          href='/'
          className='inline-flex items-center px-8 py-3 bg-[var(--obl-red)] text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-[var(--obl-red)]/90 hover:scale-105'>
          <ArrowLeft className='w-5 h-5 mr-2' />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
