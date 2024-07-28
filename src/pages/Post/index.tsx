import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faChevronLeft, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "../../components/Link";
import { useEffect, useState } from "react";

import { api } from "../../lib/axios";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from "date-fns/locale";

import { LinkReturn } from "./styles";
import { Container, PostContainer, PostContent, PostInfoContent } from "./styles";

interface PostInfo {
    title: string
    comments: number
    createdAt: string
    githubUsername: string
    url: string
    body: string
}

export function Post() {
    const [postInfo, setPostInfo] = useState<PostInfo | null>(null)

    async function fetchPost() {
        try {
            const response = await api.get(`repos/rocketseat-education/reactjs-github-blog-challenge/issues/1 `)
            const {
                title,
                comments,
                created_at: createdAt,
                user,
                html_url: url,
                body,
            } = response.data
            setPostInfo({
                title,
                comments,
                createdAt: formatDistanceToNow(new Date(createdAt), {
                    locale: ptBR,
                    addSuffix: true,
                }),
                githubUsername: user.login,
                url: url,
                body,
            })
        } catch (error) {
            console.error("Erro ao buscar dados do post:", error);
        }
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <Container>
            <PostContainer>
                <PostContent>
                    <header>
                        <LinkReturn href="/">
                            <FontAwesomeIcon icon={faChevronLeft} />
                            Voltar
                        </LinkReturn>
                        <Link href={postInfo?.url} target="_blank">Ver no github</Link>
                    </header>

                    <main>
                        <h1 className="title"> {postInfo?.title !== null ? postInfo?.title : 'Nenhum título registrado'}</h1>
                    </main>

                    <footer>
                        <ul className="info">
                            <li className="username">
                                <FontAwesomeIcon icon={faGithub} className="icon" />
                                {postInfo?.githubUsername}
                            </li>
                            <li className="username">
                                <FontAwesomeIcon icon={faBuilding} className="icon" />
                                {postInfo?.createdAt !== null ? postInfo?.createdAt : 'Nenhuma empresa registrada'}
                            </li>
                            <li className="username">
                                <FontAwesomeIcon icon={faUserGroup} className="icon" />
                                {`${postInfo?.comments} comentários`}
                            </li>
                        </ul>
                    </footer>
                </PostContent>
            </PostContainer>

            <PostInfoContent>
                <p>{postInfo?.body}</p>
            </PostInfoContent>
        </Container>
    )
}
