'use client';

// --- Next & React ---
import Link from 'next/link';
import Image from 'next/image';
// --- Analytics ---
import { logEvent } from '@/lib/analytics';
// --- Types ---
import { Post } from '@/lib/posts';

// --- Helper Components ---
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

interface BlogPostsListProps {
  posts: Post[];
}

export default function BlogPostsList({ posts }: BlogPostsListProps) {
  return (
    <div className='grid gap-8 max-w-4xl mx-auto'>
      {posts.map((post) => {
        const { image, imageLayout, title, date, lastUpdated, author, summary, tags } =
          post.frontMatter;
        const isIconLayout = image && imageLayout === 'icon';

        return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            onClick={() => logEvent('blog_index_page', 'post_click', title)}
            className='group block bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-[var(--obl-blue)] hover:bg-white/10'>
            <article className={`flex ${isIconLayout ? 'flex-row items-center' : 'flex-col'}`}>
              {/* --- IMAGE --- */}
              {image && (
                <div
                  className={`relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105
                    ${isIconLayout ? 'w-32 h-32 m-6 rounded-lg overflow-hidden' : 'w-full h-48'}`}>
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
  );
}
