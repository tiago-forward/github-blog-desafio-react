import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-top: 4.5rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            font-size: 1.125rem;
        }

        .count-publication {
            font-size: 0.875rem;
            
            color: ${props => props.theme["base-span"]};
        }
    }
    
    input {
        flex: 1;
        border-radius: 6px;
        border: 1px solid ${props => props.theme["base-border"]};
        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-text"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`
