/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
