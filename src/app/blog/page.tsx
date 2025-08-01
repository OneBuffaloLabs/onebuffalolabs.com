// --- Next ---
import { Metadata } from 'next';
// --- Libs ---
import { getAllPosts } from '@/lib/posts';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Client Components ---
import BlogPostsList from './BlogPostsList';

export const metadata: Metadata = generateMetadata({
  title: 'Blog',
  description:
    'Explore the latest articles, tutorials, and insights from the team at One Buffalo Labs.',
  keywords: ['blog', 'tech blog', 'web development blog', 'ai blog', 'seo blog'],
  urlPath: '/blog',
});

// --- PAGE COMPONENT (Server Component) ---
export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className='w-full bg-[var(--obl-dark-blue)] text-white font-sans'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-8 py-16 pt-28'>
        {/* Decorative background gradients */}
        <div
          className='absolute inset-0 z-0 opacity-10 pointer-events-none'
          style={{
            background:
              'radial-gradient(circle at 15% 25%, var(--obl-blue) 0%, transparent 35%), radial-gradient(circle at 85% 75%, var(--obl-red) 0%, transparent 30%)',
          }}
        />

        <main className='relative z-10'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>From the Labs</h1>
            <p className='text-lg md:text-xl text-gray-400 leading-relaxed'>
              Explore our latest articles, tutorials, and insights.
            </p>
          </div>

          {/* Render the Client Component with the posts data */}
          <BlogPostsList posts={posts} />
        </main>
      </div>
    </div>
  );
}
