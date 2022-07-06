import React from "react";

import NavBar from "../components/NavBar";
import posts from "../article-content/mock-posts.json";

export const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <h1> Plane It By Ear</h1>
      <div>
        Route: Singapore - Hanoi - Phong nha - Da nang - Hoi an - Ho chi Minh -
        Phnom Penh - Kampot - Koh rong - Siem reap - Bangkok - Chiang mai - Pai
        - Bangkok - Bali - Java - Bali - Gili t - Bali - Singapore
      </div>
      <ul>
        {Object.entries(posts).map((value, index) => {
          return <li key={index}>{value[1].title}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default HomePage;
