import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <header>
                <h2 className="title">Publicações</h2>
                <span className="count-publication">6 publicações</span>
            </header>

            <input type="text" placeholder="Buscar conteúdo" />
        </SearchFormContainer>
    )
}
