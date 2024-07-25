import styled from "styled-components";

import BackgroundImg from '../../assets/bg-logo.svg'

export const HeaderContainer = styled.header`
    background: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;

    max-width: 100vw;
    padding-top: 64px;
    padding-bottom: 134px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        /* margin-top: 64px; */
        /* margin-bottom: 134px; */
    }
`
