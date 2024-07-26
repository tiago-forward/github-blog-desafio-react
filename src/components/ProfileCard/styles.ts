import styled from 'styled-components'

export const ProfileContainer = styled.section`
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
    }
`

export const ProfileContent = styled.div`
    padding: 2rem 2.5rem;

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

    main, .bio {
        font-size: 1rem;
        color: ${props => props.theme['base-text']};
    }

    footer, .info {
        list-style: none;
        
        margin-top: 1rem;

        display: flex;
        align-items: center;
        gap: 1.5rem;

        .username {
            font-size: 1rem;
            color: ${props => props.theme['base-subtitle']};
            
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .icon {
                color: ${props => props.theme['base-label']};
            }
        }
    }
`
