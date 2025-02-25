import React from "react";
import styled from "styled-components";

import ScrollTopButton from "./ScrollTopButton";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0;
`;

const Footer = () => {
  return (
    <StyledContainer>
      Copyright © Plane It By Ear. All Rights Reserved. <ScrollTopButton />
    </StyledContainer>
  );
};

export default Footer;
