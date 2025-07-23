// --- Next ---
import Link from 'next/link';
import { Metadata } from 'next';

// --- Libs ---
import { getAllPosts } from '@/lib/posts';

// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

// --- METADATA ---
export const metadata: Metadata = generateMetadata({
  title: 'Blog',
  description:
    'Explore the latest articles, tutorials, and insights from the team at One Buffalo Labs.',
  keywords: ['blog', 'tech blog', 'web development blog', 'ai blog', 'seo blog'],
  urlPath: '/blog',
});

// --- PAGE COMPONENT ---
export default function BlogIndexPage() {
  const posts = getAllPosts();

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
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>From the Labs</h1>
            <p className='text-lg md:text-xl text-gray-400 leading-relaxed'>
              Explore the latest articles, tutorials, and insights from the team at One Buffalo
              Labs.
            </p>
          </div>

          {/* --- POSTS LIST --- */}
          <div className='space-y-8 max-w-4xl mx-auto'>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className='group block p-6 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:border-[var(--obl-blue)] hover:bg-white/10'>
                <article>
                  <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-2'>
                    <h2 className='text-2xl font-bold text-white group-hover:text-[var(--obl-red)] transition-colors'>
                      {post.frontMatter.title}
                    </h2>
                    <time
                      dateTime={post.frontMatter.date}
                      className='text-gray-400 text-sm mt-1 sm:mt-0'>
                      {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <p className='text-gray-500 text-sm italic mb-3'>By {post.frontMatter.author}</p>
                  <p className='text-gray-400'>{post.frontMatter.summary}</p>
                </article>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
