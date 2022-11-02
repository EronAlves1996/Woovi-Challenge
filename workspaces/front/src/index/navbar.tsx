import { useEffect, useState } from "react";
import styled from "styled-components"
import { subscribeToPath } from "./router-path-provider";


const Ul = styled.ul`
`

const Li = styled.li`
`
const Nav = styled.nav`
  background-color: #004F2D;
  height: 10%;
`

export function Navbar(props: any) {
    const [actualPath, setActualPath] = useState("");
    subscribeToPath(path => setActualPath(path));

    return (
        <Nav>
            {(actualPath === "" || actualPath === "/") ?
                (<Ul>
                    <Li>Home</Li>
                </Ul>) : <p>You are seen this</p>
            }
        </Nav>
    )
}