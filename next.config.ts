/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This generates a standalone 'out' folder
  images: {
    unoptimized: true,   // Essential: Next.js Image Optimization needs a server
  },
  trailingSlash: true,   // Helps Capacitor map paths to local folders
};

export default nextConfig;