import React, { useState } from "react";

import * as S from "./styles";
import SearchIcon from "../../../public/SearchIcon.png";
import Close from "../../../public/Close.png";

interface SearchBarProps {
  hideSearch?: boolean;
  placeholder?: any;
  data?: any;
}

const SearchBar = ({ hideSearch, placeholder, data }: SearchBarProps) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: any) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <S.SearchContainer hideSearch={hideSearch}>
      <S.SearchInput>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <S.SearchIconContainer>
          {filteredData.length === 0 ? (
            <S.StyledImage
              src={SearchIcon.src}
              alt="Search"
              width={30}
              height={30}
            />
          ) : (
            <S.StyledImage
              src={Close.src}
              onClick={clearInput}
              alt="Close"
              width={30}
              height={30}
            />
          )}
        </S.SearchIconContainer>
      </S.SearchInput>
      {filteredData.length != 0 && (
        <S.DataResultContainer>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <S.DataItem
                href={"/" + value["category"]["slug"] + "/" + value["slug"]}
                target="_self" // change to blank to open in new tab
              >
                <p>{value["title"]} </p>
              </S.DataItem>
            );
          })}
        </S.DataResultContainer>
      )}
    </S.SearchContainer>
  );
};

export default SearchBar;
