import { Title } from "../Common/Title/index"
import { Section } from "../Common/Section/index"
import { StyledGitHubIcon, Subtitle, Wrapper, TilesWrapper, Tile, ProjectTitle, Description, LinkWrapper, LinkTitle, Link } from "./styled";

export const Portfolio = () => {
    return (
        <Section>
            <Wrapper>
                <StyledGitHubIcon />
                <Title>Portfolio</Title>
                <Subtitle>My recent projects</Subtitle>
            </Wrapper>
            <TilesWrapper>
                <Tile>
                    <ProjectTitle>Movies Browser</ProjectTitle>
                    <Description> asodiasokdm lasmdlkasmd lkasmdlk slkad malks dmlksamdlk msalkd malskm dlaksmd lksam lkdas </Description>
                    <LinkWrapper>
                        <LinkTitle>Demo: </LinkTitle>
                        <Link href="https://link.demo.com">https://link.demo.com</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkTitle>Code: </LinkTitle>
                        <Link href="https://link.code.com">https://link.code.com</Link>
                    </LinkWrapper>

                </Tile>
            </TilesWrapper>
        </Section>
    );
};