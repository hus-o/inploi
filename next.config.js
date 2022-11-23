/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["*.placeholder.com"],
  },
};

module.exports = nextConfig;
