// --- Next ---
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

// --- Libs ---
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData, getPostSlugs } from '@/lib/posts';

// --- Dynamic Generation Config ---
export const dynamicParams = false;

// --- Component Props Type ---
type PageProps = {
  params: { slug: string[] };
};

/**
 * Generates page metadata dynamically based on the post's frontmatter.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const fullPath = params.slug.join('/');
  const post = getPostData(fullPath);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    keywords: post.frontMatter.tags,
  };
}

/**
 * This is the function the build process is looking for.
 * It generates the static paths for all published blog posts.
 * This function is REQUIRED for static export (`output: 'export'`).
 */
export async function generateStaticParams() {
  const slugs = getPostSlugs();

  // Ensure we only generate pages for posts marked as 'published'
  return slugs.filter(({ slug }) => {
    const post = getPostData(slug.join('/'));
    return post?.frontMatter?.status === 'published';
  });
}

/**
 * The page component for rendering a single blog post.
 */
export default async function PostPage({ params }: PageProps) {
  const fullPath = params.slug.join('/');
  const post = getPostData(fullPath);

  // Ensure the post exists and is published, otherwise show a 404 page.
  if (!post || post.frontMatter.status !== 'published') {
    notFound();
  }

  const { frontMatter, content } = post;
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    // Using the original light theme as requested
    <div className='bg-gray-50 py-16 sm:py-24'>
      <article className='max-w-4xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg'>
        <header className='mb-8 border-b border-gray-200 pb-6'>
          <h1 className='text-3xl font-extrabold tracking-tight text-[var(--obl-blue)] sm:text-4xl md:text-5xl'>
            {frontMatter.title}
          </h1>
          <div className='mt-3 text-base text-slate-600'>
            <span>Published on {formatDate(frontMatter.date)}</span>
            {frontMatter.lastUpdated && (
              <span className='ml-4 italic'>
                (Updated on {formatDate(frontMatter.lastUpdated)})
              </span>
            )}
            <span className='mx-2'>by</span>
            <span>{frontMatter.author}</span>
          </div>
        </header>

        {frontMatter.image && frontMatter.imageLayout !== 'icon' && (
          <div className='relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8'>
            <Image
              src={frontMatter.image}
              alt={`${frontMatter.title} cover image`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        )}

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

        <footer className='mt-10 pt-6 border-t border-gray-200'>
          <p className='text-sm text-slate-500 mb-3'>Tagged in:</p>
          <div className='flex flex-wrap gap-2'>
            {frontMatter.tags.map((tag) => (
              <span
                key={tag}
                className='px-3 py-1 text-xs font-semibold text-[var(--obl-blue)] bg-blue-100 rounded-full'>
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}
