import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import * as S from "./styles";

interface CarouselProps {
  children: any;
  width?: string;
}

export const CarouselItem = ({ children, width }: CarouselProps) => {
  return <S.CarouselItem width={width}>{children}</S.CarouselItem>;
};

const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // auto cycle
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  // change transform and width inside cloneElement to 50 for two images in one slide;
  return (
    <S.Carousel
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <S.Inner style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "33.333%" });
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
