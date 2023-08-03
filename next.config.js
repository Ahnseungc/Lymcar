/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["static.toss.im", "localhost", "play-lh.googleusercontent.com"],
  },
};

module.exports = nextConfig;
