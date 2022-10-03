// Can edit this file to share state between pages
import Head from "next/head";
import type { AppProps } from "next/app";
import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import GlobalStyle from "../src/styles/global";
import NavBar from "../src/components/NavBar/NavBar";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

export const GET_CATEGORIES = gql`
  {
    categories {
      name
      slug
      posts {
        title
      }
    }
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title> Plane It By Ear Home Page </title>
        <meta name="description" content="Plane it by ear: travel blog" />
      </Head>
      <GlobalStyle />
      <NavBar postCategories={pageProps.data["categories"]} />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;

// App does not support getStaticProps
MyApp.getInitialProps = async () => {
  let pageProps: any = {};

  try {
    let data: any = await graphcms.request(GET_CATEGORIES);

    pageProps.data = data;
  } catch (error) {}

  return { pageProps };
};
