import { GraphQLClient, gql } from "graphql-request";

import ArticleRenderer from "../../src/components/ArticleRenderer/ArticleRenderer";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

// datePublished between slug and content
const GET_SINGLE_COUNTRY = gql`
  query Country($slug: String!) {
    country(where: { slug: $slug }) {
      title
      slug
      
      content {
        html
      }
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

const GET_ALL_COUNTRIES = gql`
  {
    countries {
      title
      slug
      image {
        url
      }
      postPreview
      content {
        html
      }
      continent {
        name
        slug
      }
    }
  }
`;

// datePublished above continent{}

export const getStaticPaths = async () => {
  const { countries }: any = await graphcms.request(GET_ALL_COUNTRIES);
  return {
    paths: countries.map((country: any) => ({
      params: { continent: country.continent.slug, countrySlug: country.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.countrySlug;
  const data: any = await graphcms.request(GET_SINGLE_COUNTRY, { slug });
  const country = data.country;
  return {
    props: {
      country,
    },
    revalidate: 30,
  };
};

const BlogPost = ({ country }: any) => {
  return (
    <ArticleRenderer
      title={country.title}
      image={country.image}
      // datePublished={country.datePublished}

      content={country.content}
      continent={country.continent}
    />
  );
};

export default BlogPost;
