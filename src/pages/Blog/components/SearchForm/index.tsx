import { SearchFormContainer } from "./styles";

interface SearchFormProps {
    amountOfPost: number
}

export function SearchForm({ amountOfPost }: SearchFormProps) {
    return (
        <SearchFormContainer>
            <header>
                <h2 className="title">Publicações</h2>
                <span className="count-publication">
                    {amountOfPost > 1 ? `${amountOfPost} publicações` : `${amountOfPost} publicação`}
                </span>
            </header>

            <input type="text" placeholder="Buscar conteúdo" />
        </SearchFormContainer>
    )
}
