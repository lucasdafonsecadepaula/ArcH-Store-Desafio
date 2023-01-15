import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        scroll-behavior: smooth;
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        text-decoration: none;
    }

    body {
        min-height: 100vh;
        background-color: ${({ theme }) => theme.colors.background};
        /* color: ${({ theme }) => theme.colors.text}; */
    }
`;
