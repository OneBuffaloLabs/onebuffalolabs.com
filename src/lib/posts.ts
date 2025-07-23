import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FrontMatter {
  title: string;
  date: string;
  author: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }));
}

/**
 * Gets the content and metadata for a single post by slug.
 * If the post is not found, it returns null instead of throwing an error.
 * This is a more robust pattern for the Next.js App Router.
 */
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    // Return null if the post file doesn't exist.
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontMatter: data as FrontMatter,
    content,
  };
}
