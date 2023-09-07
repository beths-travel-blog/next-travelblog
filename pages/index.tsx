// Application entry point

import type { NextPage } from "next";
import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import PhotoGrid from "../src/components/PhotoGrid/PhotoGrid";
import Seperator from "../src/components/Seperator/Seperator";
import BlogCardGrid from "../src/components/BlogCardGrid/BlogCardGrid"

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

export const GET_ALL_COUNTRIES = gql`
  {
    countries {
      title
      slug
      image {
        url
      }      
      continent {
        name
        slug
      }
    }
  }
`;

// datePublished above last continent {}

export const getStaticProps = async () => {
  // fetch request
  const { countries }: any = await graphcms.request(GET_ALL_COUNTRIES);
  return {
    props: {
      countries,
    },
    revalidate: 30, // if new content, regenerate every 30 seconds
  };
};

const Home: NextPage = ({ countries }: any) => {

  return (
    <>
      <PhotoGrid />
      <Seperator text="Recent Countries" />
      <BlogCardGrid countries={countries} />
    </>
  );
};

export default Home;
