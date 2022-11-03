import { Outlet } from "react-router";
import styled from "styled-components";
import { VerifyLogin } from "./resources/verifyLogin";
import { Navbar } from "./shared/navbar";

const Header = styled.header`
  height: 1.5rem;
  background-color: #004F2D;
  padding: 0.4rem;  
`

export function Root() {
    return (
        <div>
            <Header>
                <Navbar />
            </Header>
            <Outlet />
            <footer></footer>
        </div>
    )
}