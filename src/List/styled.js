import styled from "styled-components";
import {ReactComponent as Circle} from "../Images/Ellipse.svg"

export const Wrapper = styled.section`
    margin-top: 72px;
    padding: 32px;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
`;

export const StyledList = styled.ul`
    padding: 0px;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    column-gap: 115px;
    list-style: none;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px){
        column-count: 2;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        column-count: 1;
    }
`;

export const ListItem = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
    color: ${({theme}) => theme.color.secondaryText};
`;

export const Line = styled.div`
    height: 1px;
    background-color: ${({theme}) => theme.color.bgNeutral};
    margin: 15px 0 32px;
`;

export const Bullet = styled(Circle)`
    width: 9px;
    height: 9px;
    margin-right: 16px;
`;