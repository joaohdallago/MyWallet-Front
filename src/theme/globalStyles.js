import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

        padding: 0;
        border: 0;
        margin: 0;

        text-decoration: none;

        font-family: Raleway, sans-serif;
    }

    #root {
        height: 100vh;
        padding: 25px 25px 16px;

        background-color: #8C11BE;
    }
`;

export default GlobalStyles;