import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { LoginForm } from './index/Login-Form';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { Logged } from './index/Logged';
import RelayEnvironment from './RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { Navbar } from './index/navbar';


const Header = styled.header`
`

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />
  },
  {
    path: '/home',
    element:
      <ErrorBoundary fallback={<Navigate to="/" state={{ msg: "Dados incorretos ou tentativa de acesso a recursos proibidos" }} />} >
        <Suspense fallback={"Loading..."} >
          <Logged />
        </Suspense>
      </ErrorBoundary>
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
