import { Wrapper, StyledList, ListItem, Line, Bullet } from "./styled";
import { Title } from "../Common/Title";

export const List = ({ title, content }) => (
    <Wrapper>
        <Title>{title}</Title>
        <Line />
        <StyledList>
            {content.map((skill, index) => (
                <ListItem key={index}>
                    <Bullet/>{skill}
                </ListItem>
            ))}
        </StyledList>
    </Wrapper>
);