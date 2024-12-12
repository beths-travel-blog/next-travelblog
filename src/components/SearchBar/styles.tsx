import styled from "styled-components";

interface SearchBarProps {
  hideSearch?: boolean;
}

export const SearchInput = styled.div`
  display: flex;
  border: solid 1px #fcb900;
  border-radius: 5px;
  overflow: hidden;

  *:focus {
    border: solid 2px #fcb900;
    outline: none;
  }
`;

export const SearchContainer = styled.div<SearchBarProps>`
  display: ${(props) => (props.hideSearch ? "none" : "flex")};
  flex-direction: row;
  justify-content: center;
  margin: 100px 0 100px;
  input {
    background-color: white;
    border: 0;
    font-size: 18px;
    padding: 15px;
    height: 30px;
    width: 250px;
  }

  @media (min-width: 900px) {
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 250px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;

  @media (min-width: 900px) {
    position: absolute;
    margin-top: 62px;
  }
`;

export const DataItem = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;

  &:hover {
    text-decoration: none;
  }

  p {
    margin-left: 10px;
  }

  p:focus {
    text-decoration: underline;
  }

  p:hover {
    text-decoration: underline;
  }
`;

export const StyledImage = styled.img`
  cursor: pointer;
`;
