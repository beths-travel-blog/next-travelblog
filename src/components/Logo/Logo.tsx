import React from "react";
import styled from "styled-components";

import LogoPlane from "../../../public/LogoPlane.png";
import LogoName from "../../../public/LogoName.png";
import LogoPlaneWhite from "../../../public/LogoPlaneWhite.png";
import LogoNameWhite from "../../../public/LogoNameWhite.png";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &:hover {
    img:first-child {
      /* transform: rotate(-20deg);
      transform: rotate(10deg); */

      animation-name: rotate;
      animation-duration: 1s;
      animation-iteration-count: 1;
      animation-timing-function: linear;
    }
  }
`;

export const StyledLogoImage = styled.img`
  width: 100px;

  @media (min-width: 900px) {
    width: 150px;
  }
`;

export const StyledLogoText = styled.img`
  width: 200px;

  @media (min-width: 900px) {
    width: 300px;
  }
`;

const Logo = () => {

  const [navBackground, setNavBackground] = React.useState<boolean>(false);

  const changeNavBackground = () => {
    // >= width of header
    if (window.scrollY >= 230) {
      setNavBackground(true)
    }
    else {
      setNavBackground(false)
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBackground)
  }
  
  return (
    <StyledLogo>
      <StyledLogoImage
        src={navBackground ? LogoPlane.src : LogoPlaneWhite.src}
        alt="Plane It By Ear Logo"
        width={100}
        height={"auto"}
      />
      <StyledLogoText
        src={navBackground ? LogoName.src : LogoNameWhite.src}
        alt="Plane It By Ear Logo"
        width={200}
        height={"auto"}
      />
    </StyledLogo>
  );
};

export default Logo;
