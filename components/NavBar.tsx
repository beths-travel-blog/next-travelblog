import React from "react";

import posts from "../article-content/mock-posts.json";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home"> Home </a>
        </li>
        {Object.entries(posts).map((value, index) => {
          const test = "/blog/" + value[0];
          return (
            <li key={index}>
              <a href={test}> {value[1].title} </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
