/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    // Temporarily disable webpack caching to resolve file system errors
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;