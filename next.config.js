/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // basePath: '/github-pages',
  exportPathMap: async function() {
    return {
      '/': { page: '/' }, // Map the root page to '/'
      // Add other custom route mappings here if needed
    };
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
