import styled from "styled-components";

interface NavProps {
  open: boolean;
}

export const StyledMenuIcon = styled.div<NavProps>`
  display: block;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  width: 100%;
  /* margin: 30px 0; */
  border: 1px solid #f0f;
  align-items: center;
  /* position: relative; */
`;

export const StyledContainer = styled.ul<NavProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 20px 200px;
  position: fixed;
  background-color: #fdfdfdfa;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  top: -16px;
  right: 0;
  height: 100%;
  width: 100%;
  padding-top: 100px;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  justify-content: normal;

  @media (min-width: 900px) {
    flex-flow: row nowrap;
    transform: ${(props) =>
      props.open ? "translateX(100%)" : "translateX(0)"};
    position: absolute;
    width: 100%;
    top: 0;
    justify-content: flex-end;
    margin-top: 0px;
    align-items: center;
    height: 110px;
    margin-left: 20px;
  }
`;

export const StyledItems = styled.li`
  width: 20%;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`;
