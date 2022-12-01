import styled from "styled-components";

import GridItem from "../Grid/GridItem";

export const ArticleInfoContainer = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h2 {
    margin: 0;
  }

  h4 {
    margin: 0;
    color: #fcb900;
  }

  h4:last-child {
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

export const ImageGridItem = styled(GridItem)`
  margin: 50px 0;
`;

export const ElementGridItem = styled(GridItem)`
  margin-bottom: 50px;

  p {
    margin: 0 0 30px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 56px 0 16px;
  }

  h1,
  h1 a {
    font-size: 30px;
    font-weight: 400;
  }

  h2,
  h2 a {
    font-size: 30px;
    font-weight: 400;
  }

  h3,
  h3 a {
    font-size: 30px;
    font-weight: 400;
  }

  h4,
  h4 a {
    font-size: 22px;
    font-weight: 400;
  }

  h5,
  h5 a,
  h6,
  h6 a {
    font-size: 16px;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: auto;
    margin: 30px 0;
  }

  strong {
    font-size: 16px;
    font-weight: 400;
    font-size: inherit;
    font-style: inherit;
  }

  em {
    font-style: italic;
    font-size: inherit;
    font-weight: inherit;
  }

  ol {
    margin: 16px 0;
    /* counter-reset: item;

    li {
      display: block;

      &:before {
        content: counter(item) ". ";
        counter-increment: item;
        width: 2em;
        display: inline-block;
      }
    } */
  }

  ul {
    list-style: disc;
    margin: 16px 0;
  }

  table {
    display: inline-table;
    margin-top: 56px;
    width: 100%;
    overflow-x: auto;
    margin: 20px 0;

    thead {
      font-size: 16px;
      font-weight: 400;
    }

    tr {
      background-color: "white";
    }

    tr:nth-child(even) {
      background-color: "grey";
    }

    td {
      padding: 8px;
      border: 1px solid "grey";
    }
  }

  hr {
    margin: 16px 0;
    border: none;
    border-bottom: 1px solid "grey";
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    + div:first-of-type {
      margin-top: 24px;

      table {
        margin-top: 0;
      }
    }
  }

  ul + div:first-of-type {
    margin-top: 56px;
  }

  blockquote {
    font-size: 30px;
    font-weight: 400;
    display: block;
    text-align: center;
    quotes: "“" "”" "‘" "’";

    &::before {
      content: open-quote;
    }

    &::after {
      content: close-quote;
    }

    &::before,
    &::after {
      font-size: 40px;
      font-weight: 400;
    }

    * {
      font-size: 30px;
      font-weight: 400;
      text-align: center;
    }
  }

  sup {
    font-size: 20px;
    font-weight: 400;
    position: relative;
    top: -0.5em;
  }

  sub {
    font-size: 20px;
    font-weight: 400;
    position: relative;
    bottom: -0.25em;
  }
`;
