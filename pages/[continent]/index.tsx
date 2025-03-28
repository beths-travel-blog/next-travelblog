import React from "react";
import styled from "styled-components";
import { GraphQLClient, gql } from "graphql-request";

import Grid from "../../src/components/Grid/Grid";
import GridItem from "../../src/components/Grid/GridItem";
import BlogCardGrid from "../../src/components/BlogCardGrid/BlogCardGrid";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

const GET_SINGLE_CONTINENT = gql`
  query Continent($slug: String!) {
    continent(where: { slug: $slug }) {
      title
      slug
      countries {
        title
        slug
        image {
          url
        }
        continent {
          title
          slug
        }
      }
    }
  }
`;

export const GET_CONTINENTS = gql`
  {
    continents {
      slug
    }
  }
`;

const Heading = styled.h1` // to do: don't need align center as in global style
  text-align: center;
`

export const getStaticPaths = async () => {
  const { continents }: any = await graphcms.request(GET_CONTINENTS);
  return {
    paths: continents.map((continent: any) => ({
      params: { continent: continent.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.continent;
  const data: any = await graphcms.request(GET_SINGLE_CONTINENT, { slug });
  const continent = data.continent;
  return {
    props: {
      continent,
    },
    revalidate: 30,
  };
};

const ContinentPosts = ({ continent }: any) => {
  return <main>
            <Grid columns={12}>
              <GridItem colSpan={6} colStart={4}><Heading>{continent.title}</Heading></GridItem>
            </Grid>;
            <BlogCardGrid blogPosts={continent.countries} postGrid={false}/>
          </main>  
};



export default ContinentPosts;
