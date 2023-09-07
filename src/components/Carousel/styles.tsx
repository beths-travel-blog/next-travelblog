import styled, { css }  from "styled-components";

interface CarouselItemProps {
  width?: string;
}

// interface IndicatorProps {
//   active: boolean;
// }

export const CarouselItem = styled.div<CarouselItemProps>`
  width: ${(props) => props.width};
  height: 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: #fff;


  @media (min-width: 600px) {
    height: 300px;
  }

  @media (min-width: 900px) {
    height: 350px;
  }

  @media (min-width: 1200px) {
    height: 450px;
  }

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Carousel = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  z-index: -1;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

const buttonStyles = css`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 75px;
  padding: 0;
  transform: translateY(-50%);
  background-color: #F7F3F2;
  border: none;
`

export const LeftButton = styled.button`
  ${buttonStyles};
  z-index: 1;
`

export const RightButton = styled.button`
  ${buttonStyles};
  right: 0;
`

export const ArrowIcon = styled.svg`
  width: 10px;
  height: 10px;

`

export const Indicators = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    margin: 5px;
  }
`;

// export const IndicatorButtons = styled.button<IndicatorProps>`
//   margin: 5px;
//   background-color: ${(props) => (props.active ? "green" : "transparent")};
// `;
