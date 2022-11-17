import styled from "styled-components";

import SafeHtml from "../../elements/SafeHtml";

export const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  width: 100%;
  overflow: hidden;

  @media (min-width: 900px) {
    height: 300px;
    flex-direction: row;
    margin: 50px 0;
  }
`;

export const BlogCardImage = styled.img`
  max-width: 100%;
  height: 300px;
  object-fit: cover;

  @media (min-width: 900px) {
    width: 100%;
    max-width: 250px;
  }

  @media (min-width: 1100px) {
    width: 100%;
    max-width: 300px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const BlogTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  width: 100%;
`;

export const ArticleTitle = styled.h3`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 900px) {
    font-size: 22px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const CategoryTitle = styled.h4`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledSafeHtml = styled(SafeHtml)`
  display: none;
  text-align: center;

  @media (min-width: 900px) {
    display: block;
  }
`;
