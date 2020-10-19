import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    if(ctx.req && ctx.req.headers['Authorization'] !== 'Basic c3RhZ2luZzpzdGFnaW5n') {
      ctx.res.statusCode = 401
      ctx.res.setHeader('WWW-Authenticate', `Basic realm="Access private Cancer Council site"`)
      ctx.res.end('401 Access Denied')
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
