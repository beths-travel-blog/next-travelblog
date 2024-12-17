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
      // to do ??? value.places.length > 0 ? value.places[0].title.toLowerCase().includes(searchWord.toLowerCase()) when all places in
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
      <S.TextContainer>
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
                  width={20}
                  height={20}
                />
              )}
          </S.SearchIconContainer>
        </S.SearchInput>
        {filteredData.length != 0 && (
          <S.DataResultContainer>
            {filteredData.slice(0, 15).map((value, key) => {

              const placeSlug = value["country"] && "/" + value["country"]["continent"]["slug"] + "/" + value["country"]["slug"] + "/" + value["slug"];
              const countrySlug = value["continent"] && "/" + value["continent"]["slug"] + "/" + value["slug"];
              const continentSlug = value["slug"] && "/" + value["slug"];

              return (
                <S.DataItem
                  href={placeSlug ? placeSlug : countrySlug ? countrySlug : continentSlug}
                  target="_self" // change to blank to open in new tab
                >
                  <p>{value["title"]} </p>
                </S.DataItem>
              );
            })}
          </S.DataResultContainer>
        )}
      </S.TextContainer>
    </S.SearchContainer>
  );
};

export default SearchBar;
