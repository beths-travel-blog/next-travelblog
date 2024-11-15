import styled from "styled-components";

import GridItem from "../Grid/GridItem";

export const CarouselGridItem = styled(GridItem)`
  margin: 50px 0;
  display: flex;
  flex-direction: row;
`;

export const ElementGridItem = styled(GridItem)`
  h1 {
    font-size: 30px;
    color: #73736f;
    text-transform: uppercase;
    text-align: center;
    font-family: jules_biglight;
    font-weight: 400;
    margin-bottom: 25px;
  }  
`;
