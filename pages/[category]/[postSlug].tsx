import { GraphQLClient, gql } from "graphql-request";

import ArticleRenderer from "../../src/components/ArticleRenderer/ArticleRenderer";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

const GET_SINGLE_POST = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      datePublished
      content {
        html
      }
      image {
        url
      }
      category {
        name
        slug
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
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
      datePublished
      category {
        name
        slug
      }
    }
  }
`;

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(GET_ALL_POSTS);
  return {
    paths: posts.map((post: any) => ({
      params: { category: post.category.slug, postSlug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.postSlug;
  const data = await graphcms.request(GET_SINGLE_POST, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
};

const BlogPost = ({ post }: any) => {
  return (
    <ArticleRenderer
      title={post.title}
      image={post.image}
      datePublished={post.datePublished}
      content={post.content}
      category={post.category}
    />
  );
};

export default BlogPost;
