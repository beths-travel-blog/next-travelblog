import React from "react";

import NavBar from "../src/components/NavBar/NavBar";
import ImageGrid from "../src/components/ImageGrid/ImageGrid";

import Logo from "../public/Logo.png";

const images = [
  { src: Logo.src },
  { src: Logo.src },
  { src: Logo.src },
  { src: Logo.src },
  { src: Logo.src },
  { src: Logo.src },
  { src: Logo.src },
  { src: Logo.src },
];

export const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ImageGrid images={images} />
      {/* <div>
        Route: Singapore - Hanoi - Phong nha - Da nang - Hoi an - Ho chi Minh -
        Phnom Penh - Kampot - Koh rong - Siem reap - Bangkok - Chiang mai - Pai
        - Bangkok - Bali - Java - Bali - Gili t - Bali - Singapore
      </div> */}
    </React.Fragment>
  );
};

export default HomePage;
