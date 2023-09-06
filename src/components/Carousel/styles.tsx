import styled from "styled-components";

interface CarouselItemProps {
  width?: string;
}

interface IndicatorProps {
  active: boolean;
}

export const CarouselItem = styled.div<CarouselItemProps>`
  width: ${(props) => props.width};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: #fff;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export const Carousel = styled.div`
  overflow: hidden;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    margin: 5px;
  }
`;

export const IndicatorButtons = styled.button<IndicatorProps>`
  margin: 5px;
  background-color: ${(props) => (props.active ? "green" : "transparent")};
`;
