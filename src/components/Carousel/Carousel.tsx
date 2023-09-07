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
    } else if (newIndex >= React.Children.count(children)-3) { // -3 to prevent blank spaces in carousel, would be better as an infinite loop
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
    }, 3000);

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
      <S.LeftButton
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
        <S.ArrowIcon viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" ></path></S.ArrowIcon>
      </S.LeftButton>
      <S.Inner style={{ transform: `translateX(-${activeIndex * 25}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "25%" });
        })}
      </S.Inner>
      <S.RightButton
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <S.ArrowIcon viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180) "></path></S.ArrowIcon>
      </S.RightButton>
    </S.Carousel>
  );
};

export default Carousel;
