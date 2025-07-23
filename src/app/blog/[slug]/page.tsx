import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData, getPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// This setting tells Next.js to only build pages for slugs
// returned by generateStaticParams, which is correct for a static export.
export const dynamicParams = false;

// This type definition is the key to solving the `npm run build` type error.
type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Generates page metadata dynamically based on the post.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);

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
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  const { frontMatter, content } = post;

  return (
    // Main wrapper using a light gray background.
    <div className='bg-gray-50 py-16 sm:py-24'>
      <article
        // The article card has a white background to contrast with the page
        // and create a clean, elevated look with the shadow.
        className='max-w-4xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg'>
        <header className='mb-8 border-b border-gray-200 pb-6'>
          {/* Use the vibrant --obl-blue for the main heading to make it pop. */}
          <h1 className='text-3xl font-extrabold tracking-tight text-[var(--obl-blue)] sm:text-4xl md:text-5xl'>
            {frontMatter.title}
          </h1>
          {/* Byline text is now slightly darker for better contrast. */}
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

        {/* This div applies typographic defaults. We are now directly overriding
            the CSS variables for code blocks to ensure our styles apply. */}
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
