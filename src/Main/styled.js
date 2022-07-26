import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    margin-top: 72px;
    padding: 32px;
`;

export const SubTitle = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
`;

export const Line = styled.div`
    height: 1px;
    background-color: ${({theme}) => theme.color.bgNeutral};
`;

export const List = styled.ul`
    padding: 0px;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    column-gap: 115px;
    list-style: none;
`;

export const ListItem = styled.li`
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
    color: ${({theme}) => theme.color.secondaryText};
`;