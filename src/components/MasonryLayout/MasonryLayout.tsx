import React, { useEffect, useRef, useState } from "react";

import { useEventListener } from "../../hooks/useEventListener";
import { Col, MasonryDiv } from "./styles";

const fillCols = (children: any, cols: any, pageWidth: number) => {
  children.forEach((child: any, i: number) => {
    if (pageWidth > 1500 && i < 24) {
      cols[i % cols.length].push(child);
    } else if (pageWidth > 1200 && pageWidth < 1500 && i < 20) {
      cols[i % cols.length].push(child);
    } else if (pageWidth > 900 && pageWidth < 1200 && i < 16) {
      cols[i % cols.length].push(child);
    } else if (pageWidth > 600 && pageWidth < 900 && i < 12) {
      cols[i % cols.length].push(child);
    } else {
      if (i < 8) {
        cols[i % cols.length].push(child);
      }
    }
  });
};

const MasonryLayout = ({ children, gap, minWidth = 300, ...rest }: any) => {
  const ref = useRef();
  const [numCols, setNumCols] = useState(3);
  const cols = [...Array(numCols)].map(() => []);
  ref.current && fillCols(children, cols, ref.current["offsetWidth"]);
  const resizeHandler = () =>
    ref.current && setNumCols(Math.ceil(ref.current["offsetWidth"] / minWidth));
  useEffect(resizeHandler, []);
  useEventListener(`resize`, resizeHandler);

  return (
    <MasonryDiv ref={ref} gap={gap} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <Col key={index} gap={gap}>
          {cols[index]}
        </Col>
      ))}
    </MasonryDiv>
  );
};

export default MasonryLayout;
