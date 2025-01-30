/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com",
      "www.pexels.com"
    ], // Corrected: domains is an array of strings
  },
};

export default nextConfig;