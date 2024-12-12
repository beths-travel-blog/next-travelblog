import { createGlobalStyle } from "styled-components";

import spacing from "../utils/spacing"

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        color: #000;
        letter-spacing: 1.5px;
    }

    h1, h2 {
        text-align: center;
    }

    h1, h2, h3 {
        text-transform: uppercase;
    }

    h1 {
        font-size: ${spacing(3)}; // to do: make every value use spacing
        margin: 20px 0;

        @media (min-width: 900px) {
            font-size: ${spacing(5)};
            margin: 40px 0;
        }
    }

    h2 {
        font-size: 20px;
        margin: 20px 0;

        @media (min-width: 900px) {
            font-size: 32px;
            margin: 40px 0;
        }
    }

    h3 {
        font-size: 16px;
        margin: 10px 0;

        @media (min-width: 900px) {
            font-size: 20px;
        }
    }

    h4 {
        font-size: 8px;
        margin: 0;

        @media (min-width: 900px) {
            font-size: 16px;
        }
    }

    a {
        text-decoration: none;
    }


    a:hover {
        text-decoration: underline;
        color: #fcb900
    }

    a:focus {
        outline: none;
        text-decoration: underline;
        color: #fcb900 
    }

    p, span {
        font-size: 18px;
        margin: 10px 0;

        @media (min-width: 900px) {
            font-size: 18px;
            margin: 20px 0;
        }
    }

    ul {
        margin: 10px 0 20px;
    }
 `;

export default GlobalStyle;