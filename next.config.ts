import createMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Your existing Next.js config
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true,
  },
  // Ensure pageExtensions is here, inside the main config object.
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

// This function configures MDX support.
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

// Export the final configuration by wrapping it with the MDX plugin.
export default withMDX(nextConfig);
