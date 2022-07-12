import React from "react";
import styled from "styled-components";

import posts from "../../src/article-content/mock-posts.json";

const StyledNav = styled.nav`
  width: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  text-align: center;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <StyledUl>
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
      </StyledUl>
    </StyledNav>
  );
};

export default NavBar;
