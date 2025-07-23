// --- Next ---
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// --- Libs ---
import { getAllPosts } from '@/lib/posts';

// --- Utils ---
import { generateMetadata } from '@/utils/metadata';

// --- Helper Components ---
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

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

          <div className='grid gap-8 max-w-4xl mx-auto'>
            {posts.map((post) => {
              const { image, imageLayout, title, date, lastUpdated, author, summary, tags } =
                post.frontMatter;
              const isIconLayout = image && imageLayout === 'icon';

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className='group block bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-[var(--obl-blue)] hover:bg-white/10'>
                  <article
                    className={`flex ${isIconLayout ? 'flex-row items-center' : 'flex-col'}`}>
                    {/* --- IMAGE --- */}
                    {image && (
                      <div
                        className={`relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105
                          ${
                            isIconLayout
                              ? 'w-32 h-32 m-6 rounded-lg overflow-hidden'
                              : 'w-full h-48'
                          }`}>
                        <Image
                          src={image}
                          alt={`${title} cover image`}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}

                    {/* --- TEXT CONTENT --- */}
                    <div className='p-6 flex-grow'>
                      <h2 className='text-2xl font-bold text-white group-hover:text-[var(--obl-red)] transition-colors mb-2'>
                        {title}
                      </h2>
                      <div className='text-gray-400 text-sm mb-2'>
                        <span>Published: {formatDate(date)}</span>
                        {lastUpdated && (
                          <span className='ml-4 italic'>(Updated: {formatDate(lastUpdated)})</span>
                        )}
                      </div>
                      <p className='text-gray-500 text-sm italic mb-3'>By {author}</p>
                      <p className='text-gray-400 mb-4'>{summary}</p>
                      <div className='flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className='px-3 py-1 text-xs font-semibold text-[var(--obl-red)] bg-red-500/10 rounded-full'>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
