import React from "react";
import styled from "styled-components";

import MasonryLayout from "../MasonryLayout/MasonryLayout";
import BlogCard from "../BlogCard/BlogCard";

const StyledMasonryLayout = styled(MasonryLayout)`
  @media (min-width: 900px) {
    padding: 0 100px;
  }
`;

export interface GridProps {
    countries: CountryProps[];
}
  
interface CountryProps {
    title: string;
    slug: string;
    placeSlug?: string;
    image: ImageProps;
    // datePublished: string;
    continent?: ContinentProps;
}

interface ImageProps {
    url: string;
}

interface ContinentProps {
    name?: string;
    slug?: string;
}

const PhotoGrid = ({countries}: GridProps) => {

  return (
    <StyledMasonryLayout minWidth={300} gap={"30px"}>
      {countries.map((country: any, i: number) => (
        <BlogCard
        key={i}
        title={country.title}
        countrySlug={country.slug}
        image={country.image}
        // datePublished={country.datePublished}
        continent={country.continent}
    />
      ))}
    </StyledMasonryLayout>
  );
};

export default PhotoGrid;