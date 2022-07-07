import { Container, Image, Title, Content, Caption, Button, DarkMode, DarkModeButton } from "./styled";

export const Header = () => {
    return (
        <Container>
            <Caption>This is</Caption>
            <Title>Damian Michałowski</Title>
            <Content>😎😎 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Content>
            <Button>Hire me</Button>
        </Container>
    )
};