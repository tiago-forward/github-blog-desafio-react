import { BlogContainer } from "./styles";

import { ProfileCard } from "../../components/ProfileCard";
import { SearchForm } from "./components/SearchForm";

export function Blog() {
    return (
        <BlogContainer>
            <ProfileCard />

            <section>
                <SearchForm>

                </SearchForm>
            </section>
        </BlogContainer>
    )
}
