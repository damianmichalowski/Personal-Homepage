import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(235, 235, 235);
    }

    *, ::after, ::before {
    box-sizing: inherit;
}
`;