import React, { useState } from "react";

import * as S from "../styles";
import Logo from "../../Logo/Logo";
import Menu from "../../../../public/Menu.png";
import Close from "../../../../public/Close.png";
import SearchIcon from "../../../../public/SearchIcon.png";

export interface NavProps {
  postContinents: ContinentProps[];
  openMobileNav?: boolean;
  setHideSearch: (value: boolean) => void;
}

interface ContinentProps {
  name: string;
  slug: string;
}

const VerticalNav = ({
  postContinents,
  openMobileNav,
  setHideSearch,
}: NavProps) => {
  const [hideSearchBar, setHideSearchBar] = React.useState(true);
  return (
    <>
      <S.StyledList openMobileNav={openMobileNav}>
        <S.StyledItems>
          <a href="/"> Home </a>
        </S.StyledItems>
        {postContinents &&
          postContinents.map((continent, index) => {
            if (index < 3) {
              return (
                <S.StyledItems key={index}>
                  <a href={"/" + continent.slug}> {continent.name} </a>
                </S.StyledItems>
              );
            }
          })}
        <S.ImageContainer href="/">
          <Logo />
        </S.ImageContainer>
        {postContinents &&
          postContinents.map((continent, index) => {
            if (index > 2) {
              return (
                <S.StyledItems key={index}>
                  <a href={"/" + continent.slug}> {continent.name} </a>
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

const NavItems = ({ postContinents, setHideSearch }: NavProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hideSearchBar, setHideSearchBar] = React.useState(true);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <React.Fragment>
      <S.StyledMenuIcon
        openMobileNav={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <img
          src={openMenu === false ? Menu.src : Close.src}
          alt="Menu Burger Icon/Close Menu Icon"
          width={30}
          height={30}
        />
      </S.StyledMenuIcon>
      <VerticalNav
        openMobileNav={openMenu}
        postContinents={postContinents}
        setHideSearch={setHideSearch}
      />
      <S.StyledSearchIcon
        onClick={() => {
          setHideSearch(!hideSearchBar);
          setHideSearchBar(!hideSearchBar);
          setOpenSearch(!openSearch);
        }}
        openSearch={openSearch}
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
