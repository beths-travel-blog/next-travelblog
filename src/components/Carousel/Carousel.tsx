import React, { useState, useEffect } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4); // Default to 4 slides visible

  const totalChildren = React.Children.count(children);
  const slideWidth = 100 / visibleSlides; // Width per slide

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = totalChildren - visibleSlides;
    } else if (newIndex >= totalChildren - visibleSlides + 1) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  // Update visible slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 900) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(4);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <S.Carousel
      {...handlers}
    >
      <S.LeftButton
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <S.ArrowIcon viewBox="0 0 100 100">
          <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
        </S.ArrowIcon>
      </S.LeftButton>
      <S.Inner style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: `${slideWidth}%` }); // Dynamic width for each slide
        })}
      </S.Inner>
      <S.RightButton
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <S.ArrowIcon viewBox="0 0 100 100">
          <path
            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
            transform="translate(100, 100) rotate(180)"
          ></path>
        </S.ArrowIcon>
      </S.RightButton>
    </S.Carousel>
  );
};

export default Carousel;