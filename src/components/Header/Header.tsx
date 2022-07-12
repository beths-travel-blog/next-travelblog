import React from "react";
import Image from "next/image";
import styled from "styled-components";

import NavBar from "./NavBar";
import Logo from "../../../public/Logo.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <Image src={Logo} alt="Plane It By Ear Logo" width={400} height={200} />
        <NavBar />
      </Container>
    </React.Fragment>
  );
};

export default Header;
