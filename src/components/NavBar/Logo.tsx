import React from "react";

import LogoPlane from "../../../public/LogoPlane.png";
import LogoName from "../../../public/LogoName.png";
import * as S from "./styles";

const Logo = () => {
  return (
    <S.StyledLogo>
      <S.StyledLogoImage
        src={LogoPlane.src}
        alt="Plane It By Ear Logo"
        width={100}
        height={"auto"}
      />
      <S.StyledLogoText
        src={LogoName.src}
        alt="Plane It By Ear Logo"
        width={200}
        height={"auto"}
      />
    </S.StyledLogo>
  );
};

export default Logo;
