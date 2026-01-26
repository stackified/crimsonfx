/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // basePath will be auto-injected by GitHub Actions configure-pages action
  // Don't set it here to allow the action to inject it correctly
  trailingSlash: true,
  // assetPrefix is required for CSS and other static assets to load correctly on GitHub Pages
  // It must match the basePath (with trailing slash)
  // Use environment variable if set, otherwise default to /RestroFX/ for production builds
  assetPrefix: process.env.ASSET_PREFIX || (process.env.NODE_ENV === 'production' ? '/RestroFX/' : ''),
  transpilePackages: ["@crimsonfx/ui", "@crimsonfx/utils", "@crimsonfx/types"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

