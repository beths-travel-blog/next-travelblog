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
  const gridItemColSpan = [10, 6, 6, 6];
  const gridItemColStart = [2, 4, 4, 4];
  const blogCards = countries.map((country: any, i: number) => (
    <GridItem colSpan={gridItemColSpan} colStart={gridItemColStart} key={i}>
      <BlogCard
        key={i}
        title={country.title}
        countrySlug={country.slug}
        image={country.image}
        // datePublished={country.datePublished}

        continent={country.continent}
      />
    </GridItem>
  ));
  return (
    <>
      <PhotoGrid />
      <Seperator text="Recent Countries" />
      <Grid columns={12}>{blogCards}</Grid>
    </>
  );
};

export default Home;
