import styled from "styled-components";

export const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  width: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    margin: 50px 0;
  }
`;

export const BlogCardImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (min-width: 900px) {
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
`;

export const BlogTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;