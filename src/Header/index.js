import { Container, Image, Title, Content, Caption, Button, Switch } from "./styled";
import Me from "../Images/me.jpg"
export const Header = () => {
    return (
        <Container>
            <Image src={Me} />
            <Switch>Dark mode on</Switch>
            <Caption>This is</Caption>
            <Title>Damian Michałowski</Title>
            <Content>😎😎 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Content>
            <Button>Hire me</Button>
        </Container>
    )
};