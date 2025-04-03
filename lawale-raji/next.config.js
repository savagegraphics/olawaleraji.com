/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["placeholder.svg", "v0.blob.com"],
    },
  }
  
  module.exports = nextConfig
  
  