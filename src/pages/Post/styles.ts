import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const PostContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    border-radius: 10px;
    margin-top: -9rem;

    display: flex;
    align-items: center;

    background-color: ${props => props.theme['base-profile']};

    .avatar {
        border-radius: 10px;
        width: 9.25rem;
        height: 9.25rem;
    }
`

export const PostContent = styled.div`
    padding: 2rem 2.5rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .name {
            font-size: 1.5rem;
        }
    }

    main, .title {
        font-size: 1.5rem;
        color: ${props => props.theme['base-title']};
    }

    footer, .info {
        list-style: none;
        
        margin-top: 0.5rem;

        display: flex;
        align-items: center;
        gap: 1.5rem;

        .username {
            font-size: 1rem;
            color: ${props => props.theme['base-span']};
            
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .icon {
                color: ${props => props.theme['base-label']};
            }
        }
    }
`

export const PostInfoContent = styled.section`
    padding: 2.5rem 2rem;
    
    display: flex;
    flex-direction: column;
    
    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
`

export const LinkReturn = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;

    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
    }
`
