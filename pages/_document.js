import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  const authorization = 'Basic c3RhZ2luZzpzdGFnaW5n';
  
  static async getInitialProps(ctx) {
    if(ctx.req && ctx.req.headers['Authorization'] !== authorization) {
      res.statusCode = 401
      res.setHeader('WWW-Authenticate', `Basic realm="Access private Cancer Council site"`)
      res.end('401 Access Denied')
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
