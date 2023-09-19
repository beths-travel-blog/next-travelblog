import React from "react";
import styled from "styled-components";

import LogoPlane from "../../../public/LogoPlane.png";
import LogoName from "../../../public/LogoName.png";

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
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
  width: 80px;

  @media (min-width: 900px) {
    width: 120px;
  }
`;

export const StyledLogoText = styled.img`
  width: 170px;

  @media (min-width: 900px) {
    width: 250px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <StyledLogoImage
        src={LogoPlane.src}
        alt="Plane It By Ear Logo"
        width={100}
        height={"auto"}
      />
      <StyledLogoText
        src={LogoName.src}
        alt="Plane It By Ear Logo"
        width={200}
        height={"auto"}
      />
    </StyledLogo>
  );
};

export default Logo;
