import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: process.env.GHPAGES ? 'export' : 'standalone',
  basePath: '/yz-nextjs'
}

export default nextConfig
