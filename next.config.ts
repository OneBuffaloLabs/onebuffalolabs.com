import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

// Initialize MDX without the plugins here (fixes the serializable error)
const withMDX = createMDX({});

export default withMDX(nextConfig);
