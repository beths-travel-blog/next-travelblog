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
      content {
        html
      }
      image {
        url
      }
      postPreview
      continent {
        name
        slug
      }
      places {
        title
        slug
        postPreview
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
          slug={place.slug}
          image={{"url": ""}}
          // datePublished={place.datePublished}
          continent={place.continent}
          postPreview={place.postPreview}
        />
      </GridItem>
    ));
  
    return <Grid columns={12}>
        {blogCards}
    </Grid>;
  };


  return (
    <div>
    <ArticleRenderer
      title={country.title}
      image={country.image}
      // datePublished={country.datePublished}
      content={country.content}
      continent={country.continent}
    />
    <CountryPosts/>
    </div>
  );
};

export default BlogPost;