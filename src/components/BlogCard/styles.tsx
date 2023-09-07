import styled from "styled-components";

export const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  overflow: hidden;

  @media (min-width: 900px) {
    margin: 50px 0;
  }
`;

export const BlogCardImage = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
`;

export const BlogTextContainer = styled.div`
  background-color: #FBF6F2;
  padding: 15px;
  box-shadow: 0 0 0 3px #fff inset;
  border: 10px solid #fbf6f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  margin: 0 auto;
  position: relative;
  top: -30px;
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

export const ContinentTitle = styled.h4`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
