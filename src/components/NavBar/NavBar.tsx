import React from "react";

import Logo from "./Logo";
import NavItems, { NavProps } from "./NavItems";
import * as S from "./styles";

const NavBar = (props: NavProps) => {
  return (
    <React.Fragment>
      <S.StyledNav>
        <a href="/">
          <Logo />
        </a>
        <NavItems postCategories={props.postCategories} />
      </S.StyledNav>
    </React.Fragment>
  );
};

export default NavBar;
