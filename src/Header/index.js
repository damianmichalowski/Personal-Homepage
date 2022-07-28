import { Container, Image, StyledHeader, Content, Caption, Button, Switch } from "./styled";
import Me from "../Images/me.jpg";

export const Header = () => {
    return (
        <Container>
            <Image src={Me} />
            <Switch>dark mode off</Switch>
            <Caption>This is</Caption>
            <StyledHeader>Damian Michałowski</StyledHeader>
            <Content>😎😎 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Content>
            <Button>Hire me</Button>
        </Container>
    )
};