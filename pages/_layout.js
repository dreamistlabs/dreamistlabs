import React from 'react';
import Head from 'next/head';

const PageContainer = props => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" key="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
        <meta
          httpEquiv="X-UA-Compatible"
          content="ie=edge"
          key="X-UA-Compatible"
        />
        <title>{props.title} | Dreamist Labs</title>
      </Head>
      {props.children}
    </React.Fragment>
  );
};

export default PageContainer;
