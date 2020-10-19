module.exports = {
  async rewrites() {
    if(process.env.VERCEL_URL) {
      // If we are in the Vercel Ecosystem
      return [
        {
          source: '/fonts/:path*',
          destination: 'https://assets.cancer.org.au/fonts/:path*',
        },
        {
          source: '/:path*',
          destination: '/:path*',
        },
        {
          source: '/:path*',
          destination: `https://curly-waterfall-c6ef.ccsite.workers.dev/:path*?vercelURL=${process.env.VERCEL_URL}&buildID=${process.env.BUILD_ID}&env=${process.env.ENV}&path=:path*`,
        }
      ];
    }
    return [];
  },
}
