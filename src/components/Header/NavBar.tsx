import React from "react";
import styled from "styled-components";

import posts from "../../article-content/mock-posts.json";

const StyledNav = styled.nav`
  width: 100%;
`;

// export const StyledNavigation = styled.nav`
//   display: none;
//   flex-direction: column;
//   width: 100%;
//   ${(props) =>
//     `border-bottom: solid ${props.theme.patterns.header.navigation.bottomSeparator.color} ${props.theme.patterns.header.navigation.bottomSeparator.width};`}
//   background: ${(props) =>
//     props.theme.patterns.header.navigation.backgroundColor.inactive ||
//     props.theme.colors.palette.brand.base};

//   &::before {
//     content: "";
//     width: 100%;
//     ${(props) =>
//       `border-bottom: solid ${props.theme.patterns.header.bottomSeparator.color} ${props.theme.patterns.header.bottomSeparator.width};`}
//   }

//   ${(props) => mq(props.theme.breakpointUtils.map, "lg")} {
//     display: flex;
//   }
// `;

// export const NavigationWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   display: flex;
//   ${(props) => mq(props.theme.breakpointUtils.map, "lg")} {
//     height: ${(props) => props.theme.patterns.header.navigation.height};
//     justify-content: ${(props) =>
//       props.theme.patterns.header.navigation.alignItems};
//     max-width: ${(props) => props.theme.site.siteWidth};
//     margin: 0 auto;
//     padding: 0 ${spacing(2)};
//   }
// `;

// export const NavItemContainer = styled.div`
//   ${Text("bodyText", "default")};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;
//   flex-direction: column;
//   border-left: ${(props) =>
//     `${props.theme.patterns.header.navigation.verticalSeparator.width} solid ${props.theme.patterns.header.navigation.verticalSeparator.color}`};
// `;

// export const StyledLink = styled.a<{ isActive: boolean }>`
//   ${(props) =>
//     Text(
//       props.theme.patterns.header.navigation.font.inactive.entry,
//       props.theme.patterns.header.navigation.font.inactive.style
//     )};
//   text-transform: ${(props) =>
//     props.theme.patterns.header.navigation.font.inactive.transform};
//   align-items: center;
//   justify-content: center;

//   max-width: ${(props) => props.theme.patterns.header.navigation.itemWidth.max};
//   min-width: ${(props) => props.theme.patterns.header.navigation.itemWidth.min};
//   padding: ${spacing(1)}
//     ${(props) =>
//       props.theme.patterns.header.navigation.breakLine === true
//         ? spacing(1)
//         : spacing(2)};
//   text-decoration: ${(props) =>
//     props.theme.patterns.header.navigation.font.inactive.textDecoration ||
//     "none"};
//   transition: background-color 0.3s, color 0.3s;
//   white-space: ${(props) =>
//     props.theme.patterns.header.navigation.breakLine === true
//       ? "break-space"
//       : "nowrap"};
//   ${(props) =>
//     props.theme.patterns.header.navigation.breakLine && "text-align: center;"}
//   flex: 1;
//   vertical-align: middle;
//   display: flex;
//   outline: 0;

//   color: ${(props) =>
//     props.theme.patterns.header.navigation.font.inactive.textColor};

//   ${(props) =>
//     props.isActive &&
//     `color: ${
//       props.theme.patterns.header.navigation.font.active.textColor ||
//       props.theme.colors.palette.brand.base
//     };
//       background-color: ${
//         props.theme.patterns.header.navigation.backgroundColor.active ||
//         props.theme.colors.palette.greys.lighter
//       };`}

//   &:focus,
//   &:hover {
//     ${(props) =>
//       Text(
//         props.theme.patterns.header.navigation.font.active.entry,
//         props.theme.patterns.header.navigation.font.active.style
//       )};
//     text-transform: ${(props) =>
//       props.theme.patterns.header.navigation.font.active.transform};
//     text-decoration: ${(props) =>
//       props.theme.patterns.header.navigation.font.active.textDecoration ||
//       "none"};
//     align-items: center;
//     color: ${(props) =>
//       props.theme.patterns.header.navigation.font.active.textColor ||
//       props.theme.colors.palette.brand.base};
//     background-color: ${(props) =>
//       props.theme.patterns.header.navigation.backgroundColor.active ||
//       props.theme.colors.palette.greys.lighter};
//   }

//   &:focus {
//     outline: 2px solid ${(props) => props.theme.colors.palette.brand.base};
//     outline-offset: -4px;
//   }
// `;

const StyledContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const StyledItems = styled.li`
  width: 20%;
  text-align: center;
  text-transform: uppercase;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <StyledContainer>
        <StyledItems>
          <a href="/home"> Home </a>
        </StyledItems>
        {Object.entries(posts).map((value, index) => {
          return (
            <StyledItems key={index}>
              <a href={value[0]}> {value[1].title} </a>
            </StyledItems>
          );
        })}
      </StyledContainer>
    </StyledNav>
  );
};

export default NavBar;
