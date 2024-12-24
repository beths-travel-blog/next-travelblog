import styled from "styled-components";
import spacing from "../../utils/spacing"

import Grid from "../Grid/Grid";
import GridItem from "../Grid/GridItem";

export const CarouselGridItem = styled(GridItem)`
  margin: 50px 0;
  display: flex;
  flex-direction: row;
`;

// export const ContentGrid = styled(Grid)`
//   & > :nth-child(2),
//   & > :nth-child(3) {
//     background-color: #66CDAA;
//   }
// `;

export const ContentGridItem = styled(GridItem)`
  margin: ${spacing(2)};
  padding: ${spacing(3)} ${spacing(5)};
  border: solid 1px #66CDAA;
  // box-shadow: 0 0 0 1px #fff inset;
`;
