import React from "react";

import NavBar from "../src/components/NavBar/NavBar";
import FeaturedImages from "../src/components/FeaturedImages";

export const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <FeaturedImages />
      {/* <div>
        Route: Singapore - Hanoi - Phong nha - Da nang - Hoi an - Ho chi Minh -
        Phnom Penh - Kampot - Koh rong - Siem reap - Bangkok - Chiang mai - Pai
        - Bangkok - Bali - Java - Bali - Gili t - Bali - Singapore
      </div> */}
    </React.Fragment>
  );
};

export default HomePage;
