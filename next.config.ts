import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations for Core Web Vitals
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  images: {
    formats: ['image/avif', 'image/webp'], // Modern image formats
  },
  // Compress responses
  compress: true,
};

export default nextConfig;
