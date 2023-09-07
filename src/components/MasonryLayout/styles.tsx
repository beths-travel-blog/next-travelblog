import styled from "styled-components";

interface MasonryProps {
  gap: string;
}

export const MasonryDiv = styled.div<MasonryProps>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${(props) => props.gap || `20px`};
`;

export const Col = styled.div<MasonryProps>`
  grid-gap: ${(props) => props.gap || `20px`};

  * {
    margin-bottom: ${(props) => props.gap || `20px`};
    :last-child {
      margin-bottom: 0;
    }
  }
`;
