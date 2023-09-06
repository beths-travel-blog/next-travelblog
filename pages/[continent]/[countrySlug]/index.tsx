import { GraphQLClient, gql } from "graphql-request";

import Grid from "../../../src/components/Grid/Grid";
import GridItem from "../../../src/components/Grid/GridItem";
import BlogCard from "../../../src/components/BlogCard/BlogCard";
import ArticleRenderer from "../../../src/components/ArticleRenderer/ArticleRenderer";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

// datePublished between slug and content
const GET_SINGLE_COUNTRY = gql`
  query Country($slug: String!) {
    country(where: { slug: $slug }) {
      title
      slug
      image {
        url
      }
      images {
        url
      }
      continent {
        name
        slug
      }
      places {
        title
        slug
        image {
          url
        }
      }
    }
  }
`;

const GET_ALL_COUNTRIES = gql`
  {
    countries {
      slug
      continent {
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

  const CountryPosts = () => {
    const gridItemColSpan = [10, 6, 6, 6];
    const gridItemColStart = [2, 4, 4, 4];
    const blogCards = country.places.map((place: any, i: number) => (
      <GridItem colSpan={gridItemColSpan} colStart={gridItemColStart} key={i}>
        <BlogCard
          key={i}
          title={place.title}
          countrySlug={country.slug}
          placeSlug={place.slug}
          image={place.image}
          // datePublished={place.datePublished}
          continent={country.continent}
        />
      </GridItem>
    ));
  
    return <>{blogCards}</>
  };

  return (
    <main>
      <Grid columns={12}>
        <ArticleRenderer
          title={country.title}
          image={country.image}
          images={country.images}
          // datePublished={country.datePublished}
          continent={country.continent}
        />
        <CountryPosts/>
      </Grid>
    </main>
  );
};

export default BlogPost;