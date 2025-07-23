import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FrontMatter {
  title: string;
  date: string;
  author: string;
  summary: string;
}

// Define a type for a post that includes the slug and frontMatter
export interface Post {
  slug: string;
  frontMatter: FrontMatter;
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
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, '').split('/'),
  }));
}

/**
 * Gets the content and metadata for a single post by its full path slug.
 */
export function getPostData(slug: string) {
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

/**
 * Gets all posts, sorted by date.
 */
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map(({ slug }) => {
      const fullPath = slug.join('/');
      const postData = getPostData(fullPath);
      console.log(`Processing post: ${fullPath}`, postData);
      // Return a consistent shape, even if postData is null
      return {
        slug: fullPath,
        frontMatter: postData?.frontMatter,
      };
    })
    // Use a type predicate to filter and type guard
    .filter((post): post is Post => post.frontMatter !== undefined && post.frontMatter !== null)
    .sort(
      (a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    );

  return posts;
}
