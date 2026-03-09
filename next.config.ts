/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Outputs to /out folder
  images: {
    unoptimized: true,   // Capacitor can't use Next's image server
  },
};

export default nextConfig;