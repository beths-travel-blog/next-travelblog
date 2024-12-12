import styled from "styled-components";
import spacing from "../../utils/spacing"

import GridItem from "../Grid/GridItem";

export const CarouselGridItem = styled(GridItem)`
  margin: 50px 0;
  display: flex;
  flex-direction: row;
`;

export const ElementGridItem = styled(GridItem)`
  padding: 0 ${spacing(3)};
`;
