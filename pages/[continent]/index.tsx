import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import Grid from "../../src/components/Grid/Grid";
import GridItem from "../../src/components/Grid/GridItem";
import BlogCard from "../../src/components/BlogCard/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

// datePublished above continent in both gql calls

const GET_SINGLE_CONTINENT = gql`
  query Continent($slug: String!) {
    continent(where: { slug: $slug }) {
      name
      slug
      posts {
        title
        slug
        image {
          url
        }
        
        continent {
          name
          slug
        }
        postPreview
        content {
          html
        }
      }
    }
  }
`;

export const GET_CONTINENTS = gql`
  {
    continents {
      name
      slug
      posts {
        title
        slug
        image {
          url
        }
        continent {
          name
          slug
        }
        postPreview
        content {
          html
        }
      }
    }
  }
`;

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
  const gridItemColSpan = [10, 6, 6, 6];
  const gridItemColStart = [2, 4, 4, 4];
  const blogCards = continent.posts.map((post: any, i: number) => (
    <GridItem colSpan={gridItemColSpan} colStart={gridItemColStart} key={i}>
      <BlogCard
        key={i}
        title={post.title}
        slug={post.slug}
        image={post.image}
        // datePublished={post.datePublished}
        continent={post.continent}
        postPreview={post.postPreview}
      />
    </GridItem>
  ));

  return <Grid columns={12}>{blogCards}</Grid>;
};

export default ContinentPosts;
