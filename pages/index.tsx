// Application entry point

import type { NextPage } from "next";
import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import PhotoGrid from "../src/components/PhotoGrid/PhotoGrid";
import Grid from "../src/components/Grid/Grid";
import GridItem from "../src/components/Grid/GridItem";
import Seperator from "../src/components/Seperator/Seperator";
import BlogCard from "../src/components/BlogCard/BlogCard";
// import Carousel from "../src/components/Carousel/Carousel";
// import { CarouselItem } from "../src/components/Carousel/Carousel";

// import Bungee from "../public/TravelPhotos/bungee.jpg";
// import Footprints from "../public/TravelPhotos/footprints.jpg";
// import Fraser from "../public/TravelPhotos/fraser.jpg";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

export const GET_ALL_POSTS = gql`
  {
    posts {
      title
      slug
      image {
        url
      }
      postPreview
      content {
        html
      }
      
      category {
        name
        slug
      }
    }
  }
`;

// datePublished above last category {}

export const getStaticProps = async () => {
  // fetch request
  const { posts }: any = await graphcms.request(GET_ALL_POSTS);
  return {
    props: {
      posts,
    },
    revalidate: 30, // if new content, regenerate every 30 seconds
  };
};

const Home: NextPage = ({ posts }: any) => {
  const gridItemColSpan = [10, 6, 6, 6];
  const gridItemColStart = [2, 4, 4, 4];
  const blogCards = posts.map((post: any, i: number) => (
    <GridItem colSpan={gridItemColSpan} colStart={gridItemColStart} key={i}>
      <BlogCard
        key={i}
        title={post.title}
        slug={post.slug}
        image={post.image}
        // datePublished={post.datePublished}

        category={post.category}
        postPreview={post.postPreview}
      />
    </GridItem>
  ));
  return (
    <>
      <PhotoGrid />
      {/* <Carousel>
        <CarouselItem>
          <img src={Bungee.src} />
        </CarouselItem>
        <CarouselItem>
          <img src={Footprints.src} />
        </CarouselItem>
        <CarouselItem>
          <img src={Fraser.src} />
        </CarouselItem>
      </Carousel> */}
      <Seperator text="Recent Posts" />
      <Grid columns={12}>{blogCards}</Grid>
    </>
  );
};

export default Home;
