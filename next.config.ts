import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

// Set NEXT_PUBLIC_BASE_PATH when deploying under a GitHub Pages subpath,
// e.g. https://qwetls.github.io/aha-lang-docs → "/aha-lang-docs"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);