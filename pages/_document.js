import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    if(ctx.req && ctx.res && ctx.res.end && ctx.req.headers['Authorization'] !== 'Basic c3RhZ2luZzpzdGFnaW5n') {
      console.log('Triggered auth');
      ctx.res.statusCode = 401
      ctx.res.setHeader('WWW-Authenticate', `Basic realm="Access private Cancer Council site"`)
      ctx.res.end('Access Denied')
    }
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
