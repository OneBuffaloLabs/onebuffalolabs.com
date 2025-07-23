import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData, getPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// This setting is the key to fixing the 404 behavior.
export const dynamicParams = false;

// Define a type for the props that explicitly types `params` as a Promise.
// This is an unconventional workaround to address a specific build error.
type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Generates page metadata dynamically based on the post.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Await the params promise to get the slug object.
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
  // Await the params promise to get the slug object.
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  const { frontMatter, content } = post;

  return (
    <article className='prose prose-invert mx-auto p-6 lg:prose-xl'>
      <h1 className='text-3xl font-bold md:text-4xl'>{frontMatter.title}</h1>
      <p className='text-slate-400'>
        Published on{' '}
        {new Date(frontMatter.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        by {frontMatter.author}
      </p>
      <div className='mt-8'>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
