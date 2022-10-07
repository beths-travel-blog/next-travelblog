import React from "react";
import styled from "styled-components";

interface SeperatorProps {
  text: string;
}

const SeperatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
`;

const StyledSeperator = styled.div`
  flex: 1;
  height: 1px;
  background-color: grey;
`;

const StyledText = styled.h3`
  text-align: center;
  padding: 10px;
`;

const Seperator = ({ text }: SeperatorProps) => {
  return (
    <>
      <SeperatorContainer>
        <StyledSeperator />
        <StyledText> {text} </StyledText>
        <StyledSeperator />
      </SeperatorContainer>
    </>
  );
};

export default Seperator;
