import { Container } from "./styles";

import { PostDataProps } from "../..";

interface PostCardProps {
    post: PostDataProps
}

export function PostCard({ post }: PostCardProps) {
    const { title, body, created_at, number } = post

    return (
        <Container key={number}>
            <header>
                <h3 className="title">{title}</h3>
                <span>{created_at}</span>
            </header>

            <p className="text">{body}
            </p>
        </Container>
    )
}
