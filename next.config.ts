import type { NextConfig } from 'next';
import nextMdx from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';

// Configure MDX
const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

// Main Next.js configuration
const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true,
  },
};

// Export the combined configuration
export default withMdx(nextConfig);
