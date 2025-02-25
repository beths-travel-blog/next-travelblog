import { GraphQLClient, gql } from "graphql-request";
import styled from "styled-components";

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
      thingsToDo {
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

const ContentGrid = styled(Grid)`
  & > :nth-child(2) {
    background-color: #66CDAA; 
  }
  & > :nth-child(3) {
    background-color:rgb(158, 220, 199);
  }
  & > :nth-child(4) {
    background-color: #AFE1AF
  }
`;

const PlaceBlogPost = ({ place }: any) => {
  return (
    <main>
      <ContentGrid columns={12}>
        <PlaceRenderer
          title={place.title}
          image={place.image}
          // datePublished={place.datePublished}
          country={place.country.title}
          thingsToDo={place.thingsToDo}
          whereToEat={place.whereToEat}
          whereToStay={place.whereToStay}
        />
      </ContentGrid>
    </main>
  );
};

export default PlaceBlogPost;