module.exports = {
  async rewrites() {
    if(process.env.VERCEL_URL) {
      return [
        {
          source: '/cloudflare-proxy/:path*{/}?',
          destination: '/cloudflare-proxy/:path*',
        },
        {
          source: '/:path',
          destination: `https://curly-waterfall-c6ef.ccsite.workers.dev/:path?vercelURL=${process.env.VERCEL_URL}&buildID=${process.env.BUILD_ID}&env=${process.env.ENV}`,
        }
      ];
    }
    return [];
  },
}
