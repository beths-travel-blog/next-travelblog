import React from "react";
import { GraphQLClient, gql } from "graphql-request";

import Grid from "../../src/components/Grid/Grid";
import GridItem from "../../src/components/Grid/GridItem";
import BlogCard from "../../src/components/BlogCard/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

const GET_SINGLE_CATEGORY = gql`
  query Category($slug: String!) {
    category(where: { slug: $slug }) {
      name
      slug
      posts {
        title
        slug
        image {
          url
        }
        datePublished
        category {
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

export const GET_CATEGORIES = gql`
  {
    categories {
      name
      slug
      posts {
        title
        slug
        image {
          url
        }
        datePublished
        category {
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
  const { categories } = await graphcms.request(GET_CATEGORIES);
  return {
    paths: categories.map((category: any) => ({
      params: { category: category.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.category;
  const data = await graphcms.request(GET_SINGLE_CATEGORY, { slug });
  const category = data.category;
  return {
    props: {
      category,
    },
    revalidate: 30,
  };
};

const CategoryPosts = ({ category }: any) => {
  const gridItemColSpan = [10, 6, 6, 6];
  const gridItemColStart = [2, 4, 4, 4];
  const blogCards = category.posts.map((post: any, i: number) => (
    <GridItem colSpan={gridItemColSpan} colStart={gridItemColStart} key={i}>
      <BlogCard
        key={i}
        title={post.title}
        slug={post.slug}
        image={post.image}
        datePublished={post.datePublished}
        category={post.category}
        postPreview={post.postPreview}
      />
    </GridItem>
  ));

  return <Grid columns={12}>{blogCards}</Grid>;
};

export default CategoryPosts;
