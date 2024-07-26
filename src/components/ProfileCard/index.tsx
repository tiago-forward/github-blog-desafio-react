import { ProfileContainer, ProfileContent } from "./styles";

import { Link } from "../Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useEffect, useState } from "react";

import { api } from "../../lib/axios";

interface UserInfo {
    name: string
    followers: number | null
    login: string
    company: string
    url: string
    imgUrl?: string
    bio: string
}

export function ProfileCard() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

    async function fetchUser() {
        try {
            const response = await api.get(`users/tiago-forward`)
            const {
                name,
                followers,
                login,
                company,
                html_url: htmlUrl,
                avatar_url: avatarUrl,
                bio,
            } = response.data
            setUserInfo({
                name,
                followers,
                login,
                company,
                url: htmlUrl,
                imgUrl: avatarUrl,
                bio,
            })
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <ProfileContainer>
            <img className="avatar" src={userInfo?.imgUrl} alt="" />

            <ProfileContent>
                <header>
                    <h1 className="name">{userInfo?.name}</h1>
                    <Link href={userInfo?.url} target="_blank">Github</Link>
                </header>

                <main>
                    <p className="bio"> {userInfo?.bio !== null ? userInfo?.bio : 'Nenhuma biografia registrada'}</p>
                </main>

                <footer>
                    <ul className="info">
                        <li className="username">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            {userInfo?.login}
                        </li>
                        <li className="username">
                            <FontAwesomeIcon icon={faBuilding} className="icon" />
                            {userInfo?.company !== null ? userInfo?.company : 'Nenhuma empresa registrada'}
                        </li>
                        <li className="username">
                            <FontAwesomeIcon icon={faUserGroup} className="icon" />
                            {`${userInfo?.followers} seguidores`}
                        </li>
                    </ul>
                </footer>
            </ProfileContent>
        </ProfileContainer>
    )
}
