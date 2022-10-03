import { GraphQLClient, gql } from "graphql-request";

import BlogCard from "../../src/components/BlogCard/BlogCard";
import React from "react";

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
      }
    }
  }
`;

export const getStaticPaths = async () => {
  const { categories } = await graphcms.request(GET_CATEGORIES);
  return {
    paths: categories.map((category: any) => ({
      params: { slug: category.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.slug;
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
  return (
    <React.Fragment>
      {category.posts.map((post: any) => (
        <BlogCard
          title={post.title}
          slug={post.slug}
          image={post.image}
          datePublished={post.datePublished}
        />
      ))}
    </React.Fragment>
  );
};

export default CategoryPosts;
