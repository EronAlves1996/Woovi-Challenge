import { useState } from "react";
import styled from "styled-components"
import { subscribeToPath } from "../resources/router-path-provider";

const Ul = styled.ul`
    display:flex;
`

const Li = styled.li`
    list-style-type: none;
`
const Nav = styled.nav`
  
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 0.5%;
`

export function Navbar(props: any) {
    const [actualPath, setActualPath] = useState("");
    subscribeToPath(path => setActualPath(path));

    return (
        (actualPath !== "/") ?
            (<Nav>
                <Ul>
                    <Li>Home</Li> |
                    <Li>Amigos</Li> |
                    <Li>Perfil</Li>
                </Ul>
                <Ul>
                    <Li>Configurações</Li> |
                    <Li>Sair</Li>
                </Ul>
            </Nav>) : null
    )
}