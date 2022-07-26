import styled from "styled-components";

export const Container = styled.header`
    max-width: 1216px;
    margin: 115px auto;
    display: grid;
    grid-template-columns: min-content 1fr;
    column-gap: 72px;
    text-align: left;
    grid-template-areas: 
        "image switch"
        "image captions"
        "image title"
        "image description"
        "image button"
    ;
`;

export const Image = styled.img`
    grid-area: image;
    width: 398px;
    border-radius: 50%;
`;

export const Switch = styled.span`
    grid-area: switch;
    text-align: right;
`;

export const Caption = styled.caption`
    grid-area: captions;
    text-align: left;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    height: 16px;
`;

export const Title = styled.h1`
    grid-area: title;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
`;

export const Content = styled.p`
    grid-area: description;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
`;

export const Button = styled.button`
    grid-area: button;
    width: 154px;
    height: 49px;
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
`;