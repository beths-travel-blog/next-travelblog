import styled from "styled-components";

interface NavProps {
  openMobileNav?: boolean;
}

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 100;

  @media (min-width: 900px) {
    min-height: 230px;
  }
`;

export const StyledMenuIcon = styled.div<NavProps>`
  display: block;
  position: fixed;
  top: 30px;
  left: 20px;
  z-index: 101;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const StyledSearchIcon = styled.div<{ openSearch: boolean }>`
  display: block;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 20;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const StyledList = styled.ul<NavProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  position: fixed;
  background-color: #fff;
  transform: ${(props) =>
    props.openMobileNav ? "translateX(0)" : "translateX(100%)"};
  top: -20px;
  right: 0;
  height: 100%;
  width: 100%;
  padding-top: 100px;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (min-width: 900px) {
    flex-flow: row nowrap;
    transform: ${(props) => props.openMobileNav ? "translateX(100%)" : "translateX(0)"};
    position: absolute;
    width: 100%;
    justify-content: flex-end;
    margin-top: 0px;
    align-items: center;
    padding-top: 0;
    height: 250px;
  }

  & > :nth-child(2),  & > :nth-child(3), & > :nth-child(4){
      padding: 30px;
  }

  & > :nth-child(5) {
    object-fit: contain;
    padding: 30px 50px 30px 30px;
  }
`;

export const StyledItems = styled.li`
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  padding: 10px 0;
  white-space: nowrap;

  @media (min-width: 900px) {
    font-size: 14px;
    padding: 0;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
    padding: 0;
  }
`;

export const ImageContainer = styled.a`
  display: none;
  width: 100%;
  padding-left: 50px;

  @media (min-width: 900px) {
    display: flex;
  }
`;

export const StyledImage = styled.img`
  display: none;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 900px) {
    display: block;
  }
`;
