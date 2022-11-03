import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { subscribeToPath } from "../resources/router-path-provider";

const Ul = styled.ul`
    display:flex;
`

const Li = styled.li`
    list-style-type: none;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

export function Navbar(props: any) {
    const navigate = useNavigate();
    const [actualPath, setActualPath] = useState("");
    subscribeToPath(path => setActualPath(path));

    return (
        (actualPath === "/cadastrar") ?
        <Nav>
            <Ul>
                <Li><a onClick={()=>navigate(-1)}>Página Inicial</a></Li>
            </Ul>
        </Nav> :
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