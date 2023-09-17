import React from "react";

import * as S from "./styles";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems/NavItems";
import SearchBar from "../../components/SearchBar/SearchBar";

export interface NavProps {
  continents: ContinentProps[];
  countryData: any;
}

interface ContinentProps {
  title: string;
  slug: string;
}

const NavBar = (props: NavProps) => {
  const [hideSearch, setHideSearch] = React.useState(true);

  const [navBackground, setNavBackground] = React.useState(false);

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
    <React.Fragment>
      <S.StyledNav navBackground={navBackground}>
        <S.MobileLogo href="/">
          <Logo/>
        </S.MobileLogo>
        <NavItems
          navBackground={navBackground}
          continents={props.continents}
          countryData={props.countryData}
          setHideSearch={setHideSearch}
        />
      </S.StyledNav>
      <SearchBar
        placeholder="What are you looking for?"
        data={props.countryData}
        hideSearch={hideSearch}
        navBackground={navBackground}
      />
    </React.Fragment>
  );
};

export default NavBar;
