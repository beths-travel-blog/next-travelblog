// Application entry point

import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { GraphQLClient, gql } from "graphql-request";

// import PhotoGrid from "../src/components/PhotoGrid/PhotoGrid";
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
      image {
        url
      }
    }
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  margin-top: -230px; // fix this blocking search on mobile
`

// datePublished above last continent {}
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
      <FeaturedImage src={imageAssets[0].image.url} />
      <Seperator text="Recent Posts" />
      <BlogCardGrid blogPosts={places} postGrid={true}/>
    </>
  );
};

export default Home;
