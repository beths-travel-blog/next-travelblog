// Application entry point

import type { NextPage } from "next";
import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import PhotoGrid from "../src/components/PhotoGrid/PhotoGrid";
import Grid from "../src/components/Grid/Grid";
import GridItem from "../src/components/Grid/GridItem";
import Seperator from "../src/components/Seperator/Seperator";
import BlogCard from "../src/components/BlogCard/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

const GET_ALL_POSTS = gql`
  {
    posts {
      title
      slug
      image {
        url
      }
      content {
        html
      }
      datePublished
      category {
        name
        slug
      }
    }
  }
`;

export const getStaticProps = async () => {
  // fetch request
  const { posts } = await graphcms.request(GET_ALL_POSTS);
  return {
    props: {
      posts,
    },
    revalidate: 30, // if new content, regenerate every 30 seconds
  };
};

const Home: NextPage = ({ posts }: any) => {
  const gridItemColSpan = [10, 8, 8, 8];
  const gridItemColStart = [2, 3, 3, 3];
  const blogCards = posts.map((post: any, i: number) => (
    <GridItem colSpan={gridItemColSpan} colStart={gridItemColStart}>
      <BlogCard
        key={i}
        title={post.title}
        slug={post.slug}
        image={post.image}
        datePublished={post.datePublished}
        category={post.category}
      />
    </GridItem>
  ));
  return (
    <>
      <PhotoGrid />
      <Seperator text="Recent Posts" />
      <Grid columns={12}>{blogCards}</Grid>
    </>
  );
};

export default Home;
