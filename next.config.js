/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["savourit-images.s3.amazonaws.com"]
  }
}

module.exports = nextConfig
