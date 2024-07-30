import { Container, LinkContainer } from "./styles";

import { PostDataProps } from "../..";

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from "date-fns/locale";

interface PostCardProps {
    post: PostDataProps
}

export function PostCard({ post }: PostCardProps) {
    const { title, body, created_at: createdAt, number } = post

    const formattedDate = formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <Container>
            <LinkContainer to={`/post/${number}`}>
                <header>
                    <h3 className="title">{title}</h3>
                    <span>{formattedDate}</span>
                </header>
                <p className="text">{body}
                </p>
            </LinkContainer>
        </Container>
    )
}
