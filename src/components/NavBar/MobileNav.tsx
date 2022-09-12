import React, { useState } from "react";
import * as S from "./styles";

import posts from "../../article-content/mock-posts.json";
import Menu from "../../../public/Menu.png";
import Close from "../../../public/Close.png";
import Image from "next/image";

interface NavProps {
  open: boolean;
}

const VerticalNav = ({ open }: NavProps) => {
  return (
    <S.StyledContainer open={open}>
      <S.StyledItems>
        <a href="/home"> Home </a>
      </S.StyledItems>
      {Object.entries(posts).map((value, index) => {
        if (index < 2) {
          return (
            <S.StyledItems key={index}>
              <a href={value[0]}> {value[1].category} </a>
            </S.StyledItems>
          );
        }
      })}
      {Object.entries(posts).map((value, index) => {
        if (index > 1) {
          return (
            <S.StyledItems key={index}>
              <a href={value[0]}> {value[1].category} </a>
            </S.StyledItems>
          );
        }
      })}
    </S.StyledContainer>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <S.StyledMenuIcon open={open} onClick={() => setOpen(!open)}>
        <Image
          src={open === false ? Menu : Close}
          alt="Menu Burger Icon/Close Menu Icon"
          width={30}
          height={30}
        />
      </S.StyledMenuIcon>
      <VerticalNav open={open} />
    </React.Fragment>
  );
};

export default MobileNav;
