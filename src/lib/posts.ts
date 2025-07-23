import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FrontMatter {
  title: string;
  date: string;
  author: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Recursively scans a directory to find all MDX file paths.
 * @param dir The directory to scan.
 * @returns An array of file paths relative to the initial directory.
 */
function getMdxFiles(dir: string): string[] {
  let files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // If it's a directory, recursively scan it and prepend the directory name.
      files = files.concat(getMdxFiles(fullPath).map((f) => path.join(entry.name, f)));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(entry.name);
    }
  }
  return files;
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = getMdxFiles(postsDirectory);

  // For a catch-all route, the slug needs to be an array of path segments.
  // We split the file path by '/' and remove the '.mdx' extension.
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, '').split('/'),
  }));
}

/**
 * Gets the content and metadata for a single post by its full path slug.
 */
export function getPostData(slug: string) {
  // The slug is now the full path, e.g., "2025/08/test".
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontMatter: data as FrontMatter,
    content,
  };
}
