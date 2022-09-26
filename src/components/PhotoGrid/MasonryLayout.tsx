import React, { useEffect, useRef, useState } from "react";

import { useEventListener } from "../../hooks/useEventListener";
import { Col, MasonryDiv } from "./styles";

const fillCols = (children: any, cols: any) => {
  children.forEach((child: any, i: number) =>
    cols[i % cols.length].push(child)
  );
};

const MasonryLayout = ({ children, gap, minWidth = 300, ...rest }: any) => {
  const ref = useRef();
  const [numCols, setNumCols] = useState(3); //
  const cols = [...Array(numCols)].map(() => []);
  fillCols(children, cols);
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
