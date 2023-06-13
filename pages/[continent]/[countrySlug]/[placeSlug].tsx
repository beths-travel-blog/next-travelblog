import { GraphQLClient, gql } from "graphql-request";

import ArticleRenderer from "../../../src/components/ArticleRenderer/ArticleRenderer";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

// datePublished between slug and content
const GET_SINGLE_PLACE = gql`
  query Place($slug: String!) {
    place(where: { slug: $slug }) {
      title
      slug
      postPreview
      country {
        title
      }
      image {
        url
      }
      content {
        html
      }
    }
}
`;

const GET_ALL_PLACES = gql`
  {
    places {
      slug
      country {
        slug
        continent {
          slug
        }
      }
    }
  }
`;

// datePublished above continent{}

export const getStaticPaths = async () => {
  const { places }: any = await graphcms.request(GET_ALL_PLACES);
  return {
    paths: places.map((place: any) => ({
      params: { continent: place.country.continent.slug, countrySlug: place.country.slug, placeSlug: place.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.placeSlug;
  const data: any = await graphcms.request(GET_SINGLE_PLACE, { slug });
  const place = data.place;
  return {
    props: {
      place,
    },
    revalidate: 30,
  };
};

const PlaceBlogPost = ({ place }: any) => {
  return (
    <ArticleRenderer
      title={place.title}
      image={{"url" : ""}}
      // datePublished={place.datePublished}
      content={'Test'}
      country={place.country.title}
    />
  );
};

export default PlaceBlogPost;