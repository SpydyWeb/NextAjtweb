/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  distDir: "build",
  // output: "standalone",
  poweredByHeader: false
};

module.exports = nextConfig;