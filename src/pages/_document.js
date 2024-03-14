import Document,  { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
  return (
    <Html lang="pt-Br">
      <Head>
      {/* <link
            rel="preload"
            href="/_next/image?url=%2Fpublic%2Fimages%2Fworfoto.jpg&w=640&q=75"
            as="image"
          /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
}

export default MyDocument