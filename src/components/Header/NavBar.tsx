import React from "react";
import styled from "styled-components";

import posts from "../../article-content/mock-posts.json";

const StyledNav = styled.nav`
  width: 100%;
  margin: 30px 0;
`;

const StyledContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const StyledItems = styled.li`
  width: 20%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <StyledContainer>
        <StyledItems>
          <a href="/home"> Home </a>
        </StyledItems>
        {Object.entries(posts).map((value, index) => {
          return (
            <StyledItems key={index}>
              <a href={value[0]}> {value[1].category} </a>
            </StyledItems>
          );
        })}
      </StyledContainer>
    </StyledNav>
  );
};

export default NavBar;
