import React from "react";
import Image from "next/image";

import Logo from "../../../public/Logo.png";
import * as S from "./styles";
import MobileNav from "./MobileNav";

type Props = {
  children?: any;
};

const NavBar = (props: Props) => {
  return (
    <React.Fragment>
      <S.StyledNav>
        <Image src={Logo} alt="Plane It By Ear Logo" width={200} height={100} />
        <MobileNav />
      </S.StyledNav>
    </React.Fragment>
  );
};

export default NavBar;
