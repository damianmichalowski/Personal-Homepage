import styled from "styled-components";
import { ReactComponent as gitHubIcon  } from "../Images/gitHubIcon.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledGitHubIcon = styled(gitHubIcon)`
    margin-bottom: 12.9px;
`;

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin:8px 0 0;
`;

export const TilesWrapper = styled.div`
    margin-top: 24px;
`;

export const Tile = styled.div`
    max-width: 100%;
    width: 592px;
    height: 322px;
    padding: 56px;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    border: 6px solid rgba(209, 213, 218, 0.3);
`;

export const ProjectTitle = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 0;
    color: ${({theme}) => theme.color.blue};
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({theme}) => theme.color.secondaryText};
    margin: 24px 0 24px;
`;

export const LinkWrapper = styled.div`

`;

export const LinkTitle = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${({theme}) => theme.color.secondaryText};
    margin:0 0 8px;
`;  

export const Link = styled.a`

`;