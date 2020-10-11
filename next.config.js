module.exports = {
  async rewrites() {
    return [
      {
        source: '/cloudflare-proxy/:path*',
        destination: '/cloudflare-proxy/:path*',
      },
      {
        source: '/:path*',
        destination: `https://curly-waterfall-c6ef.ccsite.workers.dev/:path*?vercelURL=${process.env.VERCEL_URL}`,
      }
    ]
  },
}
