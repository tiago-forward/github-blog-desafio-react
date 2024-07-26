import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme["base-post"]};
    
    border-radius: 10px;
    padding: 2rem;

    overflow: hidden;
    text-overflow: ellipsis;

    header {
        display: flex;
        align-items: first baseline;
        justify-content: space-between;

        h3 {
            max-width: 283px;

            font-size: 1.25rem;
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
        }
    }

    p {
        margin-top: 1.25rem;
        
        font-size: 1rem;
        color: ${props => props.theme["base-text"]};

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
