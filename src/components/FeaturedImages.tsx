import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Grid from "./PageLayout/Grid";
import GridItem from "./PageLayout/GridItem";
import Greece from "../../public/Greece.png";
import Sunset from "../../public/Sunset.png";
import Rome from "../../public/Rome.png";

const StyledGrid = styled(Grid)`
  margin: 10px 30px;
`;

const StyledGridItem = styled(GridItem)`
  margin: 0 5px;
`;

const FeaturedImages = () => {
  return (
    <React.Fragment>
      <StyledGrid columns={12} colGap={100}>
        <StyledGridItem colSpan={[12, 12, 4, 4]} colStart={1}>
          <Image
            src={Greece}
            alt="Greek building"
            width="100%"
            height="140px"
            layout="responsive"
          />
        </StyledGridItem>
        <StyledGridItem colSpan={[12, 12, 4, 4]} colStart={5}>
          <Image
            src={Sunset}
            alt="Sunset"
            width="100%"
            height="140px"
            layout="responsive"
          />
        </StyledGridItem>
        <StyledGridItem colSpan={[12, 12, 4, 4]} colStart={9}>
          <Image
            src={Rome}
            alt="Roman building"
            width="100%"
            height="140px"
            layout="responsive"
          />
        </StyledGridItem>
      </StyledGrid>
    </React.Fragment>
  );
};

export default FeaturedImages;
