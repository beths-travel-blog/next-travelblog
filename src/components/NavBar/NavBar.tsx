import React from "react";
import Image from "next/image";

import Logo from "../../../public/Logo.png";
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
          <Image
            src={Logo}
            alt="Plane It By Ear Logo"
            width={200}
            height={100}
          />
        </a>
        <NavItems />
      </S.StyledNav>
    </React.Fragment>
  );
};

export default NavBar;
