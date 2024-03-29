import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 66px;
    text-align: left;
    grid-template-areas: 
        "image switch"
        "image captions"
        "image title"
        "image description"
        "image button"
        "image empty"
    ;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        grid-template-areas: 
        "image switch"
        "captions captions"
        "title title"
        "description description"
        "button button"
    ;
    }
`;

export const Image = styled.img`
    grid-area: image;
    width: 398px;
    border-radius: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        width: 132.67px;
    }
`;

export const Switch = styled.span`
    grid-area: switch;
    text-align: right;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.secondaryText};
    margin-bottom: 38px;
`;

export const Caption = styled.span`
    grid-area: captions;
    text-align: left;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    height: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.secondaryText};
    margin-bottom: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        margin: 12.67px 0 8px;
    }
`;

export const StyledHeader = styled.h1`
    grid-area: title;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    margin:0 0 35px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 22px;
        line-height: 27px;
        margin:0 0 16px;
    }
`;

export const Content = styled.p`
    grid-area: description;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: ${({ theme }) => theme.color.secondaryText};
    margin: 0 0 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        font-size: 17px;
        margin: 0 0 24px;
    }
`;

export const Button = styled.button`
    grid-area: button;
    width: 154px;
    height: 49px;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue};
    font-weight: 600;
    font-size: 20.0584px;
    line-height: 24px;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: 0.2s;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        width: 138px;
        height: 46px;
        font-size: 18px;
        line-height: 22px;
    }

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;