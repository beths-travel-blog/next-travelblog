import React from "react";
import styled from "styled-components";

import Up from "../../../public/Up.png";

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 20px;
  cursor: pointer;
`;

const ScrollTopButton = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <StyledButton
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      style={{}}
    >
      <img src={Up.src} alt="Scroll to top" width={30} height={30} />
    </StyledButton>
  );
};

export default ScrollTopButton;
