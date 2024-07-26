import { BlogContainer, PostCardContainer } from "./styles";

import { ProfileCard } from "../../components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { PostCard } from "./components/PostCard";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

export function Blog() {
    const [posts, setPosts] = useState([])

    async function fetchPosts(query?: string) {
        const response = await api.get(
            `search/issues?q=${query}is:issue%20is:open%20repo:vilmarsitiodigital/github-blog`
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
                <SearchForm />

                <PostCardContainer>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </PostCardContainer>
            </section>
        </BlogContainer>
    )
}
