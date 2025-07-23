import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData, getPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

// The props type now expects `slug` to be an array of strings.
type PageProps = {
  params: Promise<{ slug: string[] }>;
};

/**
 * Generates page metadata dynamically based on the post.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // The slug is now an array of path segments (e.g., ['2025', '08', 'test']).
  // We join them to form the full path used for data fetching.
  const fullPath = slug.join('/');
  const post = getPostData(fullPath);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.frontMatter.title,
    description: `Read the blog post: ${post.frontMatter.title}`,
  };
}

/**
 * This function generates the static paths for all blog posts.
 */
export async function generateStaticParams() {
  return getPostSlugs();
}

/**
 * The page component for rendering a single blog post.
 */
export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  // Join the array of path segments to get the full slug.
  const fullPath = slug.join('/');
  const post = getPostData(fullPath);

  if (!post) {
    notFound();
  }

  const { frontMatter, content } = post;

  return (
    // The styles remain the same.
    <div className='bg-gray-50 py-16 sm:py-24'>
      <article className='max-w-4xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg'>
        <header className='mb-8 border-b border-gray-200 pb-6'>
          <h1 className='text-3xl font-extrabold tracking-tight text-[var(--obl-blue)] sm:text-4xl md:text-5xl'>
            {frontMatter.title}
          </h1>
          <p className='mt-3 text-base text-slate-600'>
            Published on{' '}
            {new Date(frontMatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            by {frontMatter.author}
          </p>
        </header>
        <div
          className='
          prose
          max-w-none
          text-[var(--obl-dark-blue)]
          prose-headings:text-[var(--obl-dark-blue)]
          prose-strong:text-[var(--obl-dark-blue)]
          prose-a:text-[var(--obl-blue)] hover:prose-a:underline
          prose-blockquote:border-l-[var(--obl-blue)] prose-blockquote:text-slate-600
          prose-li:marker:text-[var(--obl-blue)]
          [--tw-prose-pre-bg:theme(colors.slate.100)]
          [--tw-prose-pre-border:theme(colors.slate.200)]
          prose-pre:border prose-pre:rounded-lg
          prose-code:text-[var(--obl-red)]
        '>
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  );
}
