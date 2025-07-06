import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  output: "export", // This is the crucial line for client-side only
  images: { unoptimized: true }, // Recommended for static export if you use next/image
};

export default nextConfig;
