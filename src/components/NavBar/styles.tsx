import styled from "styled-components";

interface NavProps {
  open: boolean;
}

export const StyledMenuIcon = styled.div<NavProps>`
  display: block;
  position: fixed;
  top: 30px;
  left: 20px;
  z-index: 20;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledList = styled.ul<NavProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  position: fixed;
  background-color: #fff;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  top: -20px;
  right: 0;
  height: 100%;
  width: 100%;
  padding-top: 200px;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (min-width: 900px) {
    flex-flow: row nowrap;
    transform: ${(props) =>
      props.open ? "translateX(100%)" : "translateX(0)"};
    position: absolute;
    width: 100%;
    justify-content: flex-end;
    margin-top: 0px;
    align-items: center;
    height: 250px;
    margin-left: 20px;
    padding-top: 0;
  }
`;

export const StyledItems = styled.li`
  width: 20%;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  padding: 10px 0;

  @media (min-width: 900px) {
    font-size: 20px;
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;
