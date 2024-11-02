import { GraphQLClient, gql } from "graphql-request";

import Grid from "../../../src/components/Grid/Grid";
import PlaceRenderer from "../../../src/components/PlaceRenderer/PlaceRenderer";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

// datePublished between slug and content
const GET_SINGLE_PLACE = gql`
  query Place($slug: String!) {
    place(where: { slug: $slug }) {
      title
      slug
      country {
        title
      }
      image {
        url
      }
      images {
        url
      }
      content {
        html
      }
      thingsToDo {
        html
      }
      tips {
        html
      }
      gettingTo {
        html
      }
      gettingAround {
        html
      }
      whereToEat {
        html
      }
      whereToStay {
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

// for offline dev
// import singleplace from './singleplace.json';
// import allplaces from './allplaces.json';


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
    <main>
      <Grid columns={12}>
        <PlaceRenderer
          title={place.title}
          image={place.image}
          images={place.images}
          // datePublished={place.datePublished}
          content={place.content}
          country={place.country.title}
          thingsToDo={place.thingsToDo}
          tips={place.tips}
          gettingTo={place.gettingTo}
          gettingAround={place.gettingAround}
          whereToEat={place.whereToEat}
          whereToStay={place.whereToStay}
        />
      </Grid>
    </main>
  );
};

export default PlaceBlogPost;