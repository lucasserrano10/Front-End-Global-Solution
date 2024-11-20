import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
// importando pages
import Home from "./pages/Home.jsx"
import Sobre from "./pages/Sobre.jsx"
import Solucao from "./pages/Solucao.jsx"
import Cadastrar from "./pages/Cadastrar.jsx"
import Login from "./pages/Login.jsx"
import Error from "./pages/Error.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/solucao', element: <Solucao /> },
      {path: '/cadastrar', element: <Cadastrar/>},
      {path: '/login', element: <Login/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
