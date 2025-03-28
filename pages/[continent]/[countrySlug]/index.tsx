import React from "react";
import styled from "styled-components";
import { GraphQLClient, gql } from "graphql-request";

import Carousel from "../../../src/components/Carousel/Carousel";
import { CarouselItem } from "../../../src/components/Carousel/Carousel";
import BlogCardGrid from "../../../src/components/BlogCardGrid/BlogCardGrid";
import Grid from "../../../src/components/Grid/Grid";
import GridItem from "../../../src/components/Grid/GridItem";
import SafeHtml from "../../../src/elements/SafeHtml";
import spacing from "../../../src/utils/spacing"

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

const GET_SINGLE_COUNTRY = gql`
  query Country($slug: String!) {
    country(where: { slug: $slug }) {
      title
      slug
      continent {
        title
        slug
      }
      places {
        title
        slug
        image {
          url
        }
        country {
          slug
          continent {
            slug
          }
        }
      }
      datePublished
      image {
        url
      }
      images {
        url
      }
      generalInfo {
        html
      }
      tips {
        html
      }
      atms
      timeOfYear
      simCards
      visa {
        html
      }
      travel {
        html
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

const Heading = styled.h1`
  text-align: center;
`

const ComponentHeading = styled.h2`
  font-weight: 500;
  margin: ${spacing(2)} 0;
`

export const CarouselGridItem = styled(GridItem)`
  margin: 50px 0;
  display: flex;
  flex-direction: row;
`;

const CountryPosts = ({ country }: any) => {
  const date = new Date(country.datePublished);

  const imageCarousel = country.images.map((image: any, i: number) => {
    return (
      <CarouselItem key={i}>
        <img src={image.url} alt={`Image ${i}`} />
      </CarouselItem>
    );
  });

  return (
    <main>
      <Grid columns={12}>
        <GridItem colSpan={6} colStart={4}>
          <Heading>{country.title}</Heading>
          <h4>
                {date.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
          </h4>
        </GridItem>
        <CarouselGridItem colSpan={12} colStart={1}>
          <Carousel>{imageCarousel}</Carousel>
        </CarouselGridItem>
        <GridItem colSpan={6} colStart={4}>
          <SafeHtml content={country.generalInfo ? country.generalInfo.html : ''}/>
          <ComponentHeading>Tips</ComponentHeading>
          <SafeHtml content={country.tips ? country.tips.html : ''}/>
          <ComponentHeading>Visa</ComponentHeading>
          <SafeHtml content={country.visa ? country.visa.html : ''}/>
          <ComponentHeading>When to Visit</ComponentHeading>
          {country.timeOfYear ? country.timeOfYear : ''}
          <ComponentHeading>Travelling Around</ComponentHeading>
          <SafeHtml content={country.travel ? country.travel.html : ''}/> 
          <ComponentHeading>Sim Cards</ComponentHeading>
          {country.simCards ? country.simCards : ''}
          <ComponentHeading>ATMs</ComponentHeading>
          {country.atms ? country.atms : ''}
        </GridItem>
      </Grid>
      <BlogCardGrid blogPosts={country.places} postGrid={true}/>
    </main>
  );
};

export default CountryPosts;