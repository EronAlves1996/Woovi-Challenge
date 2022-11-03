import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { LoginForm } from './index/Login-Form';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Home/Home';
import RelayEnvironment from './RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { Navbar } from './shared/navbar';
import { VerifyLogin } from './resources/verifyLogin';
import { routes } from './resources/routes.enum';
import { Cadastrar } from './Cadastro/cadastro';


const Header = styled.header`
  height: 1.5rem;
  background-color: #004F2D;
  padding: 0.4rem;  
`

const router = createBrowserRouter([
  {
    path: routes.INDEX,
    element:
      <VerifyLogin>
        <LoginForm />
      </VerifyLogin>
  },
  {
    path: routes.HOME,
    element:
      <VerifyLogin>
        <ErrorBoundary fallback={<div>"Erro interno de servidor"</div>} >
          <Suspense fallback={"Loading..."} >
            <Home />
          </Suspense>
        </ErrorBoundary >
      </VerifyLogin>
  },
  {
    path: routes.CADASTRO,
    element: <Cadastrar />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RelayEnvironmentProvider environment={RelayEnvironment} >
    <React.StrictMode>
      <Header>
        <Navbar />
      </Header>
      <RouterProvider router={router} />
      <footer></footer>
    </React.StrictMode>
  </RelayEnvironmentProvider>
)
