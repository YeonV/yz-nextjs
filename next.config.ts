import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: process.env.GHPAGES ? 'export' : 'standalone',
  basePath: process.env.GHPAGES ? '/yz-nextjs' : ''
}

export default nextConfig
