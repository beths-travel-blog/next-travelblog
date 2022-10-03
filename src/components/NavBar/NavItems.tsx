import React, { useState } from "react";

import Logo from "./Logo";
import Menu from "../../../public/Menu.png";
import Close from "../../../public/Close.png";
import posts from "../../article-content/mock-posts.json";
import * as S from "./styles";

interface NavProps {
  open: boolean;
}

const VerticalNav = ({ open }: NavProps) => {
  return (
    <S.StyledList open={open}>
      <S.StyledItems>
        <a href="/"> Home </a>
      </S.StyledItems>
      {Object.entries(posts).map((value, index) => {
        if (index < 2) {
          return (
            <S.StyledItems key={index}>
              <a href={value[0]}> {value[1].category} </a>
            </S.StyledItems>
          );
        }
      })}
      <S.ImageContainer>
        <a href="/">
          <Logo />
        </a>
      </S.ImageContainer>
      {Object.entries(posts).map((value, index) => {
        if (index > 1) {
          return (
            <S.StyledItems key={index}>
              <a href={value[0]}> {value[1].category} </a>
            </S.StyledItems>
          );
        }
      })}
    </S.StyledList>
  );
};

const NavItems = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <S.StyledMenuIcon open={open} onClick={() => setOpen(!open)}>
        <img
          src={open === false ? Menu.src : Close.src}
          alt="Menu Burger Icon/Close Menu Icon"
          width={30}
          height={30}
        />
      </S.StyledMenuIcon>
      <VerticalNav open={open} />
    </React.Fragment>
  );
};

export default NavItems;
