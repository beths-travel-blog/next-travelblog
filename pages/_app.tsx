// Can edit this file to share state between pages
import Head from "next/head";
import type { AppProps } from "next/app";
import React from "react";
import { GraphQLClient } from "graphql-request";

import GlobalStyle from "../src/styles/global";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";
import { GET_ALL_COUNTRIES } from "./index";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

// have to manually add any new continents this way, add the gql query here?
const continents = [
  { name: "Asia", slug: "asia" },
  { name: "Europe", slug: "europe" },
  { name: "North America", slug: "north-america" },
  { name: "South America", slug: "south-america" },
  { name: "Australasia", slug: "australasia" },
  { name: "Africa", slug: "africa" },
];

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title> Plane It By Ear Home Page </title>
        <meta name="description" content="Plane it by ear: travel blog" />
      </Head>
      <GlobalStyle />
      <NavBar continents={continents} countryData={pageProps.data["countries"]} />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default MyApp;

// App does not support getStaticProps
MyApp.getInitialProps = async () => {
  let pageProps: any = {};

  try {
    let data: any = await graphcms.request(GET_ALL_COUNTRIES);

    pageProps.data = data;
  } catch (error) {}

  return { pageProps };
};
