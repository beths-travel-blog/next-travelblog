import styled from "styled-components";

import spacing from "../../utils/spacing"
import GridItem from "../Grid/GridItem";

interface TitleImageProps {
  url: string;
}

export const TitleImageContainer = styled(GridItem)<TitleImageProps>`
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  margin: ${spacing(2)};
  padding: ${spacing(3)} ${spacing(5)};

  h3 {
    text-align: center;
  }
`;

export const ContentGridItem = styled(GridItem)`
  margin: ${spacing(2)};
  padding: ${spacing(3)} ${spacing(5)};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ElementTitle = styled.h2`
  text-align: center;
`;
