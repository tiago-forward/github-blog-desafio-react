import { BlogContainer, PostCardContainer } from "./styles";

import { ProfileCard } from "../../components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { PostCard } from "./components/PostCard";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

export interface PostDataProps {
    title: string
    body: string
    created_at: string
    number: string
}

export function Blog() {
    const [posts, setPosts] = useState<PostDataProps[]>([])

    async function fetchPosts(query?: string) {
        const response = await api.get(
            `search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge`
        )
        setPosts(response.data.items)
        console.log(response.data.items)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <BlogContainer>
            <ProfileCard />

            <section>
                <SearchForm amountOfPost={posts.length} />

                <PostCardContainer>
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post} />
                    ))}
                </PostCardContainer>
            </section>
        </BlogContainer>
    )
}
