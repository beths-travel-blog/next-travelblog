import styled from "styled-components";

interface SearchBarProps {
  hideSearch?: boolean;
}

export const SearchInput = styled.div`
  display: flex;
`;

export const SearchContainer = styled.div<SearchBarProps>`
  display: ${(props) => (props.hideSearch ? "none" : "flex")};
  justify-content: center;
  input {
    background-color: white;
    border: 0;
    border-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 18px;
    padding: 15px;
    height: 30px;
    width: 300px;
  }
`;

export const SearchIconContainer = styled.div`
  height: 60px;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;
`;

export const DataResultContainer = styled.div`
  margin-top: 5px;
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DataItem = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;

  p {
    margin-left: 10px;
  }
`;

export const StyledImage = styled.img`
  cursor: pointer;
`;
