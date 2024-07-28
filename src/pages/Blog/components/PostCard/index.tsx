import { Container } from "./styles";

import { PostDataProps } from "../..";

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from "date-fns/locale";

interface PostCardProps {
    post: PostDataProps
}

export function PostCard({ post }: PostCardProps) {
    const { title, body, created_at, number } = post

    const createdAt = formatDistanceToNow(new Date(created_at), {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <Container key={number}>
            <header>
                <h3 className="title">{title}</h3>
                <span>{createdAt}</span>
            </header>

            <p className="text">{body}
            </p>
        </Container>
    )
}
