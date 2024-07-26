import { BlogContainer, PostCardContainer } from "./styles";

import { ProfileCard } from "../../components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { PostCard } from "./components/PostCard";

export function Blog() {
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
