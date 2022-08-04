import { Title } from "../Common/Title/index"
import { Section } from "../Common/Section/index"
import { StyledGitHubIcon, Subtitle, Wrapper, TilesWrapper, Tile, ProjectTitle, Description, LinkWrapper, LinkTitle, Link, Loader, Error } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRepos,
    selectReposList,
    selectReposFetchStatus,
} from "./reposSlice";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectReposFetchStatus);
    const repos = useSelector(selectReposList);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);
    switch (fetchStatus) {
        case "completed":
            return (
                <Section>
                    <Wrapper>
                        <StyledGitHubIcon />
                        <Title>Portfolio</Title>
                        <Subtitle>My recent projects</Subtitle>
                    </Wrapper>
                    <TilesWrapper>
                        {repos.map((repo) =>
                            <Tile
                                key={repo.id}
                                id={repo.id}
                            >
                                <ProjectTitle>{repo.name}</ProjectTitle>
                                {
                                    repo.description &&
                                    <Description> {repo.description} </Description>
                                }
                                {
                                    repo.homepage &&
                                    <LinkWrapper>
                                        <LinkTitle>Demo: </LinkTitle>
                                        <Link href={repo.homepage}>https://link.demo.com</Link>
                                    </LinkWrapper>
                                }
                                <LinkWrapper>
                                    <LinkTitle>Code: </LinkTitle>
                                    <Link href={repo.html_url}>https://link.code.com</Link>
                                </LinkWrapper>
                            </Tile>
                        )}
                    </TilesWrapper>
                </Section>
            );
        case "error":
            return <Error>Erorroro..</Error>
        default:
            return <Loader>Loading..</Loader>
    };
};