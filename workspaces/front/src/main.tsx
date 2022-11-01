import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { LoginForm } from './index/Login-Form';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import { Logged } from './index/Logged';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './RelayEnvironment';
import { ErrorBoundary } from 'react-error-boundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />
  },
  {
    path: '/logged',
    element: <Logged />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RelayEnvironmentProvider environment={RelayEnvironment} >
    <ErrorBoundary fallbackRender={({ error }) => <div>User not found!</div>} >
      <Suspense fallback={"Loading..."} >
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </Suspense>
    </ErrorBoundary>
  </RelayEnvironmentProvider >
)
