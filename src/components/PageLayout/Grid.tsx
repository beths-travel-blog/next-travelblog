import * as React from "react";
import styled from "styled-components";

import { GridItem } from "./GridItem";

export interface GridProps {
  children?: React.ReactNode;
  /** Defines the number of columns in the grid  */
  columns?: number;
  /** Defines the number of rows in the grid  */
  rows?: number;
  /** Defines the space between the columns (in px)  */
  colGap?: number[] | number;
  /** Defines the space between the rows (in px)  */
  rowGap?: number[] | number;
  /** Defines which of the standardised breakpoints will be used by the Grid */
  breakpoints?: string[];
}

interface MediaQueryPadding {
  breakpoint: any;
}

const GridContainer = styled(GridItem)<GridProps>`
  box-sizing: content;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: ${(props) =>
    `1fr `.repeat(props.columns ? props.columns : 12)};
  grid-template-columns: repeat(${(props) => props.columns || 12}, [col] 1fr);
  -ms-grid-rows: ${(props) => `1fr `.repeat(props.rows || 1)};
  grid-template-rows: repeat(${(props) => props.rows || 1}, [row] 1fr);
`;

export const Grid = (props: GridProps) => {
  return <GridContainer {...props}>{props.children}</GridContainer>;
};

export default Grid;
