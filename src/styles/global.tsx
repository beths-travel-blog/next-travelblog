import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
        color: #000;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
 `;

export default GlobalStyle;
