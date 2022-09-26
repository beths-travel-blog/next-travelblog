import React from "react";

import Logo from "./Logo";
import NavItems from "./NavItems";
import * as S from "./styles";

type Props = {
  children?: any;
};

const NavBar = (props: Props) => {
  return (
    <React.Fragment>
      <S.StyledNav>
        <a href="/home">
          <Logo />
        </a>
        <NavItems />
      </S.StyledNav>
    </React.Fragment>
  );
};

export default NavBar;
