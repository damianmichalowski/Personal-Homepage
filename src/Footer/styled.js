import styled from "styled-components";
import { ReactComponent as gitHub } from "../Images/GitHub.svg";
import { ReactComponent as linkedin  } from "../Images/linkedin.svg";
import { ReactComponent as Instagram  } from "../Images/Instagram.svg";

export const Container = styled.footer`
    max-width: 100%;
    width:  691px;
    margin-top: 120px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin-top: 48px;
    }
`;

export const Caption = styled.span`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    height: 16px;
    color: ${({theme}) => theme.color.secondaryText};
    margin: 0;
    text-transform: uppercase;
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
    overflow-x: auto;
    transition: 0.2s;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 18px;
        line-height: 30px;
        margin: 10px 0 10px;
    }

    &:hover {
        color: ${({theme}) => theme.color.blue};
    }
`;

export const Content = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({theme}) => theme.color.blackText};
    margin: 0;
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 14px;
        line-height: 17px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin-top: 40.12px;
        gap: 16px;
    }
`;

export const Link = styled.a`

`;

export const StyledGitHubIcon = styled(gitHub)`
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        width: 31.94px;
        height: 31.68px;
    }

    &:hover {
        filter: invert(25%) sepia(91%) saturate(4077%) hue-rotate(203deg) brightness(92%) contrast(98%);
    }
`;

export const StyledLinkedinIcon = styled(linkedin)`
    transition: 0.3s;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
            width: 31.94px;
            height: 31.68px;
    }

    &:hover {
        filter: invert(25%) sepia(91%) saturate(4077%) hue-rotate(203deg) brightness(92%) contrast(98%);
    }
`;

export const StyledInstagramIcon = styled(Instagram)`
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
            width: 31.94px;
            height: 31.68px;
    }

    &:hover {
        filter: invert(25%) sepia(91%) saturate(4077%) hue-rotate(203deg) brightness(92%) contrast(98%);
    }
`;
