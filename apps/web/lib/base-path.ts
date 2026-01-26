/**
 * Utility to get the base path for GitHub Pages deployment
 * This ensures all static assets work correctly with the /RestroFX basePath
 * 
 * NEXT_PUBLIC_BASE_PATH is set during build time by GitHub Actions
 */

// Get basePath from environment variable (available at build and runtime)
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Get the base path for the application
 * @returns The base path (e.g., '/RestroFX' or '')
 */
export const getBasePath = (): string => {
  return BASE_PATH;
};

/**
 * Prefix a path with the basePath if needed
 * @param path - The path to prefix (should start with /)
 * @returns The prefixed path
 */
export const withBasePath = (path: string): string => {
  if (!BASE_PATH) return path;
  
  // Ensure basePath doesn't have trailing slash and path starts with /
  const cleanBasePath = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${cleanBasePath}${cleanPath}`;
};
