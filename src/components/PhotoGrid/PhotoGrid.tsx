import React from "react";
import styled from "styled-components";

import MasonryLayout from "../MasonryLayout/MasonryLayout";

interface PhotoGridProps {
  images: ImageProps[];
}

interface ImageProps {
  url: string;
}

const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media (min-width: 900px) {
    height: 200px;
  }
`;

const PhotoGrid = ({images}: PhotoGridProps) => {
  // alt={images[i].alt}
  return (
    <MasonryLayout minWidth={300} gap={"10px"}>
      {images.map((_image, i) => (
        <StyledImage key={i} src={images[i].url} />
      ))}
    </MasonryLayout>
  );
};

export default PhotoGrid;
