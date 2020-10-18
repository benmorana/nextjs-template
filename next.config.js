module.exports = {
  async rewrites() {
    if(process.env.VERCEL_URL) {
      // If we are in the Vercel Ecosystem
      return [
//         {
//           source: '/cloudflare-proxy/:path*',
//           destination: '/cloudflare-proxy/:path*',
//         },
        {
          source: '/vercel.svg',
          destination: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
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
