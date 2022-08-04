import { Container, Mail, Content, Caption, Buttons, Link, StyledGitHubIcon, StyledLinkedinIcon, StyledInstagramIcon, Spiner } from "./styled";

export const Footer = () => {
    return (
        <Container>
            <Caption>lets Talk</Caption>
            <Mail href="mailto:damianmichalowskidm@gmail.com">damianmichalowskidm@gmail.com</Mail>
            <Content>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me ✌️</Content>
            <Buttons>
                <Link href="https://github.com/damianmichalowski"><StyledGitHubIcon /></Link>
                <Link href="https://www.linkedin.com/in/damian-micha%C5%82owski-6b66a5243/"><StyledLinkedinIcon /></Link>
                <Link href="https://www.instagram.com/photochopin_/"><StyledInstagramIcon /></Link>
            </Buttons>
        </Container>
    );
};