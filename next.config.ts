import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Only remove in production
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
