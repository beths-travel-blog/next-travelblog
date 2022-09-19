import styled from "styled-components";

export const ImageGridWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ImageGridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 90%;
  padding: 32px;

  img {
    max-width: 196px;
    width: 100%;
  }

  @media (min-width: 600px) {
    flex-basis: calc(100% / 3);
  }

  @media (min-width: 900px) {
    flex-basis: calc(100% / 4);
  }

  @media (min-width: 1200px) {
    flex-basis: 15%;
    &:nth-child(8n + 2),
    &:nth-child(8n + 4),
    &:nth-child(8n + 5),
    &:nth-child(8n + 7) {
      flex-basis: 25%;

      img {
        max-width: 481px;
        width: 100%;
        margin-bottom: 0;
        margin-right: 32px;
      }
    }
  }
`;
