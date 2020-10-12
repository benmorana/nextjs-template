module.exports = {
  async rewrites() {
    if(process.env.VERCEL_URL) {
      return [
        {
          source: '/vercel-proxy/:path*',
          destination: '/vercel-proxy/:path*',
        },
        {
          source: '/:path*',
          destination: `https://curly-waterfall-c6ef.ccsite.workers.dev/:path*?vercelURL=${process.env.VERCEL_URL}&buildID=${process.env.BUILD_ID}`,
        }
      ];
    }
    return [];
  },
}
