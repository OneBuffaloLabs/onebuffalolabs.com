import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FrontMatter {
  title: string;
  date: string;
  lastUpdated?: string;
  author: string;
  summary: string;
  description: string;
  image?: string;
  imageLayout?: 'banner' | 'icon'; // Add new layout field
  tags: string[];
  status: 'draft' | 'published';
}

export interface Post {
  slug: string;
  frontMatter: FrontMatter;
}

const postsDirectory = path.join(process.cwd(), 'posts');

// ... (The rest of the file remains the same)

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

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map(({ slug }) => {
      const fullPath = slug.join('/');
      const postData = getPostData(fullPath);
      return {
        slug: fullPath,
        frontMatter: postData?.frontMatter,
      };
    })
    .filter((post): post is Post => {
      return post.frontMatter?.status === 'published';
    })
    .sort(
      (a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    );

  return posts;
}
