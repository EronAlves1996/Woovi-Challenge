import React, { Children, Suspense } from 'react'
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
import { VerifyLogin } from './resources/verifyLogin';
import { routes } from './resources/routes.enum';
import { Cadastrar } from './Cadastro/cadastro';
import { Root } from './Root';


const router = createBrowserRouter([
  {
    path: routes.INDEX,
    element: <Root />,
    children: [
      {
        index: true, element:
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
    ]
  }]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RelayEnvironmentProvider environment={RelayEnvironment} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RelayEnvironmentProvider>
)
