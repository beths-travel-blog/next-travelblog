import styled from "styled-components";

interface MasonryProps {
  gap: string;
}

export const MasonryDiv = styled.div<MasonryProps>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${(props) => props.gap || `1em`};
`;
export const Col = styled.div<MasonryProps>`
  grid-gap: ${(props) => props.gap || `1em`};

  * {
    margin-bottom: ${(props) => props.gap || `1em`};
  }
`;
