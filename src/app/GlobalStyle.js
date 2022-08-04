import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    background-color: ${({theme}) => theme.color.bgLightMode};
    color: ${({theme}) => theme.color.blackText};
    max-width: 1216px;
    margin: 119px auto 109px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin: 34px auto 31px;
    }
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }
`;