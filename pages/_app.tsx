// Can edit this file to share state between pages
import Head from "next/head";
import type { AppProps } from "next/app";
import React from "react";

import GlobalStyle from "../src/styles/global";
import NavBar from "../src/components/NavBar/NavBar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title> Plane It By Ear Home Page </title>
        <meta name="description" content="Plane it by ear is a travel blog" />
      </Head>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
