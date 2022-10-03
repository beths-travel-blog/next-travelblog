import React, { useState } from "react";

import Logo from "./Logo";
import Menu from "../../../public/Menu.png";
import Close from "../../../public/Close.png";
import * as S from "./styles";

export interface NavProps {
  postCategories: CategoryProps[];
  open?: boolean;
}

interface CategoryProps {
  name: string;
  slug: string;
}

const VerticalNav = ({ postCategories, open }: NavProps) => {
  return (
    <S.StyledList open={open}>
      <S.StyledItems>
        <a href="/"> Home </a>
      </S.StyledItems>
      {postCategories &&
        postCategories.map((category, index) => {
          if (index < 2) {
            return (
              <S.StyledItems key={index}>
                <a href={category.slug}> {category.name} </a>
              </S.StyledItems>
            );
          }
        })}
      <S.ImageContainer>
        <a href="/">
          <Logo />
        </a>
      </S.ImageContainer>
      {postCategories &&
        postCategories.map((category, index) => {
          if (index > 1) {
            return (
              <S.StyledItems key={index}>
                <a href={category.slug}> {category.name} </a>
              </S.StyledItems>
            );
          }
        })}
    </S.StyledList>
  );
};

const NavItems = (props: NavProps) => {
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
      <VerticalNav open={open} postCategories={props.postCategories} />
    </React.Fragment>
  );
};

export default NavItems;
