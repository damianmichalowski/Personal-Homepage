import styled from "styled-components";
import { ReactComponent as gitHubIcon } from "../Images/gitHubIcon.svg";
import { ReactComponent as spiner } from "../Images/loader.svg";
import { ReactComponent as danger } from "../Images/Danger.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin-top: 48px;
    }
`;

export const StyledGitHubIcon = styled(gitHubIcon)`
    margin-bottom: 12.9px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        width: 32px;
        height: 31.21px;
    }
`;

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 8px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin: 16px 0 0;
        font-size: 17px;
    }
`;

export const TilesWrapper = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const Tile = styled.div`
    max-width: 100%;
    max-height: 322px;
    padding: 56px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    border: 6px solid rgba(209, 213, 218, 0.3);
    transition: 0.2s;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        padding: 24px;
    }

    &:hover{
        border: 6px solid rgba(3, 102, 214, 0.2);
    }
`;

export const ProjectTitle = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin:0 0 24px;
    color: ${({ theme }) => theme.color.blue};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 16px;
        line-height: 19px;  
        margin:0 0 16px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.secondaryText};
    margin: 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 14px;
        line-height: 17px;  
        margin: 16px 0;
    }
`;

export const LinkWrapper = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    margin: 8px 0 0;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.secondaryText};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){ 
        font-size: 14px;
        line-height: 17px;
        margin: 10px 0 0;
    }
`;

export const LinkTitle = styled.span`

`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.mainBlue};

    &:hover {
        color: #0366D6;
    }

    &:active {
        filter: brightness(70%);
    }
`;

export const Loader = styled.h2`

`;

export const Error = styled.h2`
    
`;

export const Spiner = styled(spiner)`

`;