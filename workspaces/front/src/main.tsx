import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginForm from './index/Login-Form';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter ([
  {
    path:'/',
    element: <LoginForm />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
