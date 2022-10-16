import React from "react";

import * as S from "./styles";

interface CarouselProps {
  children: any; // change this
  width?: any;
}

export const CarouselItem = ({ children, width }: CarouselProps) => {
  return <S.CarouselItem width={width}>{children}</S.CarouselItem>;
};

const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <S.Carousel>
      <S.Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </S.Inner>
      <S.Indicators>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <S.IndicatorButtons
              active={index === activeIndex}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </S.IndicatorButtons>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </S.Indicators>
    </S.Carousel>
  );
};

export default Carousel;
