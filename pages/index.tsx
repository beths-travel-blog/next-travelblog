// Homepage - acts as the entry point for the root route /

import type { NextPage } from "next";
import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import PhotoGrid from "../src/components/PhotoGrid/PhotoGrid";
import Seperator from "../src/components/Seperator/Seperator";
import BlogCardGrid from "../src/components/BlogCardGrid/BlogCardGrid";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

const GET_HOMEPAGE_DATA = gql`
  {
    places {
      slug
      image {
        url
      }
      title
      country {
        slug
        continent {
          slug
        }
      }
    }
    imageAssets {
      images {
        url
      }
    }
  }
`;

export const getStaticProps = async () => {
  // fetch request
  const { imageAssets, places }: any = await graphcms.request(GET_HOMEPAGE_DATA);
  return {
    props: {
      imageAssets,
      places
    },
    revalidate: 30, // if new content, regenerate every 30 seconds
  };
};

const Home: NextPage = ({ places, imageAssets }: any) => {
  return (
    <>
      <PhotoGrid images={imageAssets[0].images}/>
      <Seperator text="Featured Guides" />
      <BlogCardGrid blogPosts={places.slice(0, 4)} postGrid={true}/>
    </>
  );
};

export default Home;
