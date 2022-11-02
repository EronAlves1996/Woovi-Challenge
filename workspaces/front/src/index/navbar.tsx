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
    let [actualPath, setActualPath] = useState("");
    subscribeToPath(path => {
        console.log("path", path)
        setActualPath(path);
        console.log("actualPath", actualPath);
    });

    useEffect(() => { }, [actualPath]);

    return (
        <Nav>
            {(actualPath === "" || "/") ?
                <Ul>
                    <Li>Home</Li>
                </Ul> : null
            }
        </Nav>
    )
}