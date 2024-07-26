import { LinkContainer } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ ...props }: LinkProps) {
    return (
        <LinkContainer {...props}>
            {props.children}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkContainer>
    )
}
