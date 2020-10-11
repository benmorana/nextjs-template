module.exports = {
  async rewrites() {
    return [
      {
        source: ':path*',
        destination: `https://curly-waterfall-c6ef.ccsite.workers.dev/:path*?vercelURL=${process.env.VERCEL_URL}`,
      },
      {
        source: '/cloudflare-worker:path*',
        destination: ':path*',
      }
    ]
  },
}
