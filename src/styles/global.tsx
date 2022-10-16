import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        /* font-family: 'Montserrat', sans-serif; */
        font-family: 'Lato', sans-serif;
        font-weight: 300;
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

    h2 {
        font-size: 24px;
        margin: 10px 0;
        text-align: center;

        @media (min-width: 900px) {
            font-size: 40px;
            margin: 20px 0;
        }
    }

    h3 {
        font-size: 20px;
        margin: 5px 0;
        text-align: center;

        @media (min-width: 900px) {
            font-size: 30px;
            margin: 10px 0;
        }
    }

    span {
        font-size: 18px;
        margin: 5px 0;
        text-align: center;

        @media (min-width: 900px) {
            font-size: 24px;
            margin: 10px 0;
        }
    }
 `;

export default GlobalStyle;
