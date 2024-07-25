import { HeaderContainer } from "./styles";

import LogoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={LogoImg} width={148} height={98} alt="" />
        </HeaderContainer>
    )
}
