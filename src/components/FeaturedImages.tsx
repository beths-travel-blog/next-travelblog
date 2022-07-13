import React from "react";

import Grid from "./PageLayout/Grid";
import GridItem from "./PageLayout/GridItem";

const FeaturedImages = () => {
  return (
    <React.Fragment>
      <div> Images will go here </div>
      <Grid columns={12}>
        <GridItem colSpan={[12, 6, 4, 2]} colStart={1}>
          hi
        </GridItem>
      </Grid>
    </React.Fragment>
  );
};

export default FeaturedImages;
