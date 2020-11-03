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
          destination: `/redirect/:path*`,
        }
      ];
    }
    return [];
  },
}
