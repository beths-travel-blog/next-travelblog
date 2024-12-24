import React from "react";
import styled from "styled-components";
import { GraphQLClient, gql } from "graphql-request";

import Grid from "../../../src/components/Grid/Grid";
import GridItem from "../../../src/components/Grid/GridItem";
import BlogCardGrid from "../../../src/components/BlogCardGrid/BlogCardGrid";
import SafeHtml from "../../../src/elements/SafeHtml";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8rmtxc5316701uk7n83321r/master"
);

// datePublished between slug and content
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

// to do: style this
const Heading = styled.h1`
  text-align: center;
`

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

const CountryPosts = ({ country }: any) => {


  return (
    <main>
      <Grid columns={12}>
        <GridItem colSpan={6} colStart={4}><Heading>{country.title}</Heading></GridItem>
        <GridItem colSpan={6} colStart={4}>  <SafeHtml content={country.generalInfo ? country.generalInfo.html : ''}/> </GridItem>
        <GridItem colSpan={6} colStart={4}> <SafeHtml content={country.tips ? country.tips.html : ''}/> </GridItem>
        <GridItem colSpan={6} colStart={4}> {country.atms ? country.atms : ''} </GridItem>
        <GridItem colSpan={6} colStart={4}> {country.timeOfYear ? country.timeOfYear : ''} </GridItem>
        <GridItem colSpan={6} colStart={4}> {country.simCards ? country.simCards : ''} </GridItem>
        <GridItem colSpan={6} colStart={4}> <SafeHtml content={country.visa ? country.visa.html : ''}/> </GridItem>
        <GridItem colSpan={6} colStart={4}> <SafeHtml content={country.travel ? country.travel.html : ''}/> </GridItem>

      </Grid>
      <BlogCardGrid blogPosts={country.places} postGrid={true}/>
    </main>
  );
};

export default CountryPosts;