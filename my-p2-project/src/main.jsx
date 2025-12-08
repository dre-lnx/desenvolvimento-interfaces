import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import './index.css'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home />,
  },
  {
  path: "/pais/:codigo",
  element: <Detalhes />,
  }
])
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
