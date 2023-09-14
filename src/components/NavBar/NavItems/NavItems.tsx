import React, { useState } from "react";

import * as S from "../styles";
import Logo from "../../Logo/Logo";
import Menu from "../../../../public/Menu.png";
import Close from "../../../../public/Close.png";
import SearchBar from "../../SearchBar/SearchBar";
import SearchIcon from "../../../../public/SearchIcon.png";

export interface NavProps {
  continents: ContinentProps[];
  countryData: any;
  openMobileNav?: boolean;
  hideSearch?: boolean;
  setHideSearch?: (value: boolean) => void;
}

interface ContinentProps {
  title: string;
  slug: string;
}

const NavLinks = ({
  continents,
  countryData,
  hideSearch,
  openMobileNav,
}: NavProps) => {
  return (
    <>
      <S.StyledList openMobileNav={openMobileNav}>
        <S.ImageContainer href="/">
            <Logo />
        </S.ImageContainer>
        <S.StyledItems>
          <a href={"/"}> Home </a>
        </S.StyledItems>
        <S.StyledItems>
          <div> Destinations </div>
            <S.DropdownContent>
              {continents.map((continent, _i) => (
                <a href={"/" + continent.slug}> {continent.title} </a>
              ))}
            </S.DropdownContent>
        </S.StyledItems>
        <S.StyledItems>
          <a href={"/"}> Travel Tips </a>
        </S.StyledItems>
        <SearchBar
          placeholder="What are you looking for?"
          data={countryData}
          hideSearch={hideSearch}
        />
      </S.StyledList>
    </>
  );
};

const NavItems = ({continents, countryData, setHideSearch }: NavProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hideSearchBar, setHideSearchBar] = React.useState(true);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <React.Fragment>
      <S.StyledMenuIcon
        openMobileNav={openMenu}
        onClick={() => {
          setOpenMenu(!openMenu)
          setHideSearchBar(!hideSearchBar);
        }}
      >
        <img
          src={openMenu === false ? Menu.src : Close.src}
          alt="Menu Burger Icon/Close Menu Icon"
          width={30}
          height={30}
        />
      </S.StyledMenuIcon>
      <NavLinks
        continents={continents}
        countryData={countryData}
        openMobileNav={openMenu}
        hideSearch={!hideSearchBar}
      />
      <S.StyledSearchIcon
        onClick={() => {
          setHideSearch && setHideSearch(!hideSearchBar);
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
