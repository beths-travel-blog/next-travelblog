import React from "react";
import styled from "styled-components";

import ScrollTopButton from "./ScrollTopButton";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledContainer>
      Copyright © Plane It By Ear. All Rights Reserved. <ScrollTopButton />
    </StyledContainer>
  );
};

export default Footer;
