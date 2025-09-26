/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Handle SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  
  // Image optimization domains (if using external images)
  images: {
    domains: ['images.pexels.com', 'placehold.co'],
  },
};

module.exports = nextConfig;