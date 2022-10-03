import * as React from "react";
import styled from "styled-components";

export interface GridItemProps {
  children: React.ReactNode;
  /** Defines the column where the item starts  */
  colStart?: number[] | number;
  /** Defines how many columns the item spans (should not be used with `colEnd` - but does take precedence) */
  colSpan?: number[] | number;
  /** Defines the row where the item starts  */
  rowStart?: number[] | number;
  /** Defines which of the standardised breakpoints will be used by the GridItem  */
  rowSpan?: number[] | number;
  style?: React.CSSProperties;
}

interface ItemProps {
  children: React.ReactNode;
  /** Defines the column where the item starts  */
  colStart?: number[] | number;
  /** Defines how many columns the item spans (should not be used with `colEnd` - but does take precedence) */
  colSpanNumber?: number[] | number;
  /** Defines the row where the item starts  */
  rowStart?: number[] | number;
  /** Defines which of the standardised breakpoints will be used by the GridItem  */
  rowSpanNumber?: number[] | number;
  className?: string;
  style?: React.CSSProperties;
}

interface MediaQueryArgs {
  breakpoint: string;
  colStart?: any;
  colSpan?: any;
  rowStart?: any;
  rowSpan?: any;
}

const gridColumnStartCalculation = (colStart: number) => {
  if (colStart || colStart === 0) {
    return `${colStart}`;
  }
  return ``;
};

const gridColumnEndCalculation = (colSpan: number) => {
  if (colSpan || colSpan === 0) {
    return `span ${colSpan}`;
  }
  return `span 1`;
};

const gridRowStartCalculation = (rowStart: number) => {
  if (rowStart || rowStart === 0) {
    return `${rowStart}`;
  }
  return ``;
};

const gridRowEndCalculation = (rowSpan: number) => {
  if (rowSpan || rowSpan === 0) {
    return `span ${rowSpan}`;
  }
  return `span 1`;
};

const createMediaQuery = (mediaQueryArgs: MediaQueryArgs) => {
  const breakpointUtilsMap = { xs: 0, sm: 600, md: 900, lg: 1200 };
  return `@media (min-width: ${
    breakpointUtilsMap[
      mediaQueryArgs.breakpoint as keyof typeof breakpointUtilsMap
    ]
  }px)  {
      -ms-grid-column: ${mediaQueryArgs.colStart || ""};
      -ms-grid-column-span: ${mediaQueryArgs.colSpan || 1};
      grid-column-start: ${gridColumnStartCalculation(mediaQueryArgs.colStart)};
      grid-column-end: ${gridColumnEndCalculation(mediaQueryArgs.colSpan)};
      -ms-grid-row: ${mediaQueryArgs.rowStart || ""};
      -ms-grid-row-span: ${mediaQueryArgs.rowSpan || 1};
      grid-row-start: ${gridRowStartCalculation(mediaQueryArgs.rowStart)};
      grid-row-end: ${gridRowEndCalculation(mediaQueryArgs.rowSpan)};
    }`;
};

const GridItemStyling = (props: ItemProps) => {
  let styles = ``;
  const breakpointArray = ["xs", "sm", "md", "lg"];
  const colStartArray =
    typeof props.colStart === "number"
      ? breakpointArray.map(() => props.colStart)
      : props.colStart;

  const colSpanArray =
    typeof props.colSpanNumber === "number"
      ? breakpointArray.map(() => props.colSpanNumber)
      : props.colSpanNumber;

  const rowStartArray =
    typeof props.rowStart === "number"
      ? breakpointArray.map(() => props.rowStart)
      : props.rowStart;

  const rowSpanArray =
    typeof props.rowSpanNumber === "number"
      ? breakpointArray.map(() => props.rowSpanNumber)
      : props.rowSpanNumber;

  for (let index = 0; index < breakpointArray.length; index += 1) {
    const argumentsObject: MediaQueryArgs = {
      breakpoint: breakpointArray && breakpointArray[index],
      colStart: colStartArray && colStartArray[index],
      colSpan: colSpanArray && colSpanArray[index],
      rowStart: rowStartArray && rowStartArray[index],
      rowSpan: rowSpanArray && rowSpanArray[index],
    };
    styles = `${styles}  ${createMediaQuery(argumentsObject)}`;
  }
  return styles;
};

const Item = styled.div<ItemProps>`
  ${(props) => GridItemStyling(props)};
`;

export const GridItem = (props: GridItemProps) => {
  const { colSpan: colSpanNumber, rowSpan: rowSpanNumber, ...rest } = props;
  return (
    <Item colSpanNumber={colSpanNumber} rowSpanNumber={rowSpanNumber} {...rest}>
      {props.children}
    </Item>
  );
};

export default GridItem;
