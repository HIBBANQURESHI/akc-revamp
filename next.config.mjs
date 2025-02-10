/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com",
      "www.pexels.com"
    ], // Corrected: domains is an array of strings
  },
};

export default nextConfig;