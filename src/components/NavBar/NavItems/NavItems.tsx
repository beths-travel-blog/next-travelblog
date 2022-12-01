import React, { useState } from "react";

import * as S from "../styles";
import Logo from "../../Logo/Logo";
import Menu from "../../../../public/Menu.png";
import Close from "../../../../public/Close.png";
import SearchIcon from "../../../../public/SearchIcon.png";
import SearchBar from "../../SearchBar/SearchBar";

export interface NavProps {
  postCategories: CategoryProps[];
  open?: boolean;
  setHideSearch: (value: boolean) => void;
}

interface CategoryProps {
  name: string;
  slug: string;
}

const VerticalNav = ({ postCategories, open, setHideSearch }: NavProps) => {
  const [hideSearchBar, setHideSearchBar] = React.useState(true);
  return (
    <>
      <S.StyledList open={open}>
        <S.StyledItems>
          <a href="/"> Home </a>
        </S.StyledItems>
        {postCategories &&
          postCategories.map((category, index) => {
            if (index < 3) {
              return (
                <S.StyledItems key={index}>
                  <a href={"/" + category.slug}> {category.name} </a>
                </S.StyledItems>
              );
            }
          })}
        <S.ImageContainer href="/">
          <Logo />
        </S.ImageContainer>
        {postCategories &&
          postCategories.map((category, index) => {
            if (index > 2) {
              return (
                <S.StyledItems key={index}>
                  <a href={"/" + category.slug}> {category.name} </a>
                </S.StyledItems>
              );
            }
          })}
        <S.StyledImage
          src={hideSearchBar ? SearchIcon.src : Close.src}
          tabIndex={0}
          alt="Search"
          width={50}
          height={50}
          onClick={() => {
            setHideSearch(!hideSearchBar);
            setHideSearchBar(!hideSearchBar);
          }}
        />
      </S.StyledList>
    </>
  );
};

const NavItems = (props: NavProps) => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <React.Fragment>
      <S.StyledMenuIcon open={open} onClick={() => setOpen(!open)}>
        <img
          src={open === false ? Menu.src : Close.src}
          alt="Menu Burger Icon/Close Menu Icon"
          width={30}
          height={30}
        />
      </S.StyledMenuIcon>
      <VerticalNav
        open={open}
        postCategories={props.postCategories}
        setHideSearch={props.setHideSearch}
      />
      <S.StyledSearchIcon
        open={openSearch}
        onClick={() => setOpenSearch(!openSearch)}
      >
        <img
          src={openSearch === false ? SearchIcon.src : Close.src}
          alt="Search bar"
          width={30}
          height={30}
        />
      </S.StyledSearchIcon>
    </React.Fragment>
  );
};

export default NavItems;
