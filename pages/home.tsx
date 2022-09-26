import React from "react";

import NavBar from "../src/components/NavBar/NavBar";
import PhotoGrid from "../src/components/PhotoGrid/PhotoGrid";

export const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <PhotoGrid />
      {/* <ImageGrid images={images} /> */}
      {/* <div>
        Route: Singapore - Hanoi - Phong nha - Da nang - Hoi an - Ho chi Minh -
        Phnom Penh - Kampot - Koh rong - Siem reap - Bangkok - Chiang mai - Pai
        - Bangkok - Bali - Java - Bali - Gili t - Bali - Singapore
      </div> */}
    </React.Fragment>
  );
};

export default HomePage;
