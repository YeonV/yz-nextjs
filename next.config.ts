import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: process.env.GHPAGES ? 'export' : 'standalone',
  images: process.env.GHPAGES ? { loader: 'custom', loaderFile: './my-loader.ts' } : {},
  basePath: '/yz-nextjs'
}

export default nextConfig
