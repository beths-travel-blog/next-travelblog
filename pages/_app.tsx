// Can edit this file to share state between pages
import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { GraphQLClient, gql } from "graphql-request";

import GlobalStyle from "../src/styles/global";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

export const GET_ALL_DATA = gql`
  {
    countries {
      slug
      title
      places {
        title
        slug
        image {
          url
        } 
      }      
      continent {
        title
        slug
      }
    }
    continents {
      slug
      title
      countries {
        title
        slug
        places {
          title
          slug
        }
      }
    }
    places {
      slug
      title
      country {
        title
        slug
        continent {
          title
          slug
        }
      }
    }
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {

  const allData = [...pageProps.data["continents"], ...pageProps.data["countries"], ...pageProps.data["places"]]

  return (
    <React.Fragment>
      <Head>
        <title> Plane It By Ear Home Page </title>
        <meta name="description" content="Plane it by ear: travel blog" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <NavBar continents={pageProps.data["continents"]} countryData={allData} />
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
    let data: any = await graphcms.request(GET_ALL_DATA);

    pageProps.data = data;
  } catch (error) {}

  return { pageProps };
};
