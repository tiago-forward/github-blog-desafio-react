import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormContainer } from "./styles";

import { useForm } from 'react-hook-form'
import * as zod from 'zod'

interface SearchFormProps {
    amountOfPost: number
    onFetchPosts: (query: string) => void
}

const searchFormSchema = zod.object({
    query: zod.string()
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

export function SearchForm({ amountOfPost, onFetchPosts }: SearchFormProps) {
    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    })

    function handleSearchForPosts(data: SearchFormInput) {
        onFetchPosts(data.query)
    }
    
    return (
        <SearchFormContainer onChange={handleSubmit(handleSearchForPosts)}>
            <header>
                <h2 className="title">Publicações</h2>
                <span className="count-publication">
                    {amountOfPost > 1 ? `${amountOfPost} publicações` : `${amountOfPost} publicação`}
                </span>
            </header>

            <input 
                type="text" 
                placeholder="Buscar conteúdo"
                {...register('query')}
            />
        </SearchFormContainer>
    )
}
