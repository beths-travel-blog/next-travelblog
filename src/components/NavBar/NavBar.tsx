import React from "react";

import * as S from "./styles";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems/NavItems";
import SearchBar from "../../components/SearchBar/SearchBar";

export interface NavProps {
  postContinents: ContinentProps[];
  postData: any;
}

interface ContinentProps {
  name: string;
  slug: string;
}

const NavBar = (props: NavProps) => {
  const [hideSearch, setHideSearch] = React.useState(true);
  return (
    <React.Fragment>
      <S.StyledNav>
        <a href="/">
          <Logo />
        </a>
        <NavItems
          postContinents={props.postContinents}
          setHideSearch={setHideSearch}
        />
      </S.StyledNav>
      <SearchBar
        placeholder="What are you looking for?"
        data={props.postData}
        hideSearch={hideSearch}
      />
    </React.Fragment>
  );
};

export default NavBar;
