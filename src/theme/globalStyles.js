import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

        padding: 0;
        border: 0;
        margin: 0;
    }

    body {
        font-family: 'Raleway', sans-serif;

        padding: 25px 25px 16px;

        background-color: #8C11BE;
    }
`;

export default GlobalStyles;

// font-family: 'Raleway', sans-serif;
// font-family: 'Saira Stencil One', cursive;