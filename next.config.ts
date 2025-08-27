/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ this skips lint errors during `next build`
  },
};

module.exports = nextConfig;
