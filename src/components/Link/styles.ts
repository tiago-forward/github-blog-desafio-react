import styled from "styled-components";

export const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;

    color: ${(props) => props.theme.blue};

    &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
    }
`
