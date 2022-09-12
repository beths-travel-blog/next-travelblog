import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        color: #000;
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
 `;

export default GlobalStyle;
