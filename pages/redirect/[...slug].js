/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Cancer Council</title>
        <meta name={'robots'} content={'noindex'} />
      </Head>
        <p
          style={{
            textAlign: 'center'
          }}
        >
          You may have followed a broken link, an outdated search result, or there may be an error on our site. If you typed in a URL, please make sure you have typed it in correctly.
        </p>
        <p
          style={{
            textAlign: 'center'
          }}
        >
          Find what you are looking for through our <a href={'/sitemap'}>sitemap</a> or head to the <a href={'/'}>Cancer Council Australia homepage</a> to start again.
        </p>
        <p
          style={{
            textAlign: 'center'
          }}
        >
          If you believe this is a broken link, please <a href={'/contact-us'}>contact us</a> and let us know so we can fix it.
        </p>

    </>
  );
};

export async function getServerSideProps({ params: { slug }, res }) {
  let pageData;
  if (`/${slug.join('/')}` === '/redirect-1' || `/${slug.join('/')}` === '/redirect/redirect-1' ) {
    return {redirect: { destination: `https://www.google.com`, statusCode: 301 }}
  } else {
    pageData = {data: "test"};
    res.statusCode = 404;
  }

  return {
    props: {
      data: {
        ...pageData
      }
    }
  };
}

export default Index;
