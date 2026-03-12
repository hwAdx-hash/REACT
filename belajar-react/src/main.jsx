import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPages from './Pages/login.jsx'
import RegisterPages from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hellow World!</div>,
    errorElement: <ErrorPage />
  },
  {
    path : "/login",
    element: <LoginPages />
  },
  {
    path : "/register",
    element: <RegisterPages />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
