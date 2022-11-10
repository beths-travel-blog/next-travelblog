import React from "react";

import * as S from "./styles";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems";
import SearchBar from "../../components/SearchBar/SearchBar";
import Data from "../../components/mock-data.json";

export interface NavProps {
  postCategories: CategoryProps[];
}

interface CategoryProps {
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
          postCategories={props.postCategories}
          setHideSearch={setHideSearch}
        />
      </S.StyledNav>
      <SearchBar
        placeholder="What are you looking for?"
        data={Data}
        hideSearch={hideSearch}
      />
    </React.Fragment>
  );
};

export default NavBar;
