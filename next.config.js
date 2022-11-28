/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ALLOY_SDK: process.env.ALLOY_SDK,
  },
};

module.exports = nextConfig;
