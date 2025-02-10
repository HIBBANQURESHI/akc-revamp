/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["images.pexels.com",
      "www.pexels.com"
    ], // Corrected: domains is an array of strings
  },
  trailingSlash: true,
};

export default nextConfig;