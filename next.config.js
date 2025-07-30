// next.config.js - If you want to use standalone mode
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: "standalone",
  poweredByHeader: false,
};

module.exports = nextConfig;
