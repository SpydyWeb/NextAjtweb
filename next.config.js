/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  distDir: "build",
  output: "export",
  poweredByHeader: false
};

module.exports = nextConfig;