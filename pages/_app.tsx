// can edit this to share state between pages
import type { AppProps } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apolloClient";

import GlobalStyle from "../src/styles/global";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
