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
  return (
    <React.Fragment>
      <S.StyledNav>
        <S.MobileLogo href="/">
          <Logo/>
        </S.MobileLogo>
        <NavItems
          continents={props.continents}
          countryData={props.countryData}
          setHideSearch={setHideSearch}
        />
      </S.StyledNav>
      <SearchBar
        placeholder="SEARCH THE BLOG"
        data={props.countryData}
        hideSearch={hideSearch}
      />
    </React.Fragment>
  );
};

export default NavBar;
