import styled from "styled-components";
import { ReactComponent as gitHub } from "../Images/GitHub.svg";
import { ReactComponent as linkedin  } from "../Images/linkedin.svg";
import { ReactComponent as Instagram  } from "../Images/Instagram.svg";

export const Container = styled.footer`
    max-width: 100%;
    width:  691px;
    margin-top: 120px;
`;

export const Caption = styled.span`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    height: 16px;
    color: ${({theme}) => theme.color.secondaryText};
    margin: 0 0 24px;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin: 0 0 12px;
    }
`;

export const Mail = styled.a`
    display: block;
    text-decoration: none;
    color: ${({theme}) => theme.color.blackText};
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    margin: 24px 0 24px;
    letter-spacing: 0.05em;
`;

export const Content = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({theme}) => theme.color.blackText};
    margin: 0;
    letter-spacing: 0.05em;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 56px;
`;

export const Link = styled.a`

`;

export const StyledGitHubIcon = styled(gitHub)`

`;

export const StyledLinkedinIcon = styled(linkedin)`

`;

export const StyledInstagramIcon = styled(Instagram)`

`;
