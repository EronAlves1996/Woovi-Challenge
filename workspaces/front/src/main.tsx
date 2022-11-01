import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { LoginForm } from './index/Login-Form';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import { Logged } from './index/Logged';
import RelayEnvironment from './RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import { ErrorBoundary } from 'react-error-boundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />
  },
  {
    path: '/logged',
    element:
      <ErrorBoundary fallback={<Navigate to="/" state={{ msg: "Usuário ou senha incorretos" }} />} >
        <Suspense fallback={"Loading..."} >
          <Logged />
        </Suspense>
      </ErrorBoundary>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RelayEnvironmentProvider environment={RelayEnvironment} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RelayEnvironmentProvider>
)
