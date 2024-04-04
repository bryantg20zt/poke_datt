import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LayoutApp } from '@layout/AppLayout.jsx'
import { Login } from '@views/Login/Login.jsx'
import { Register } from '@views/Register/Register.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/auth' />
  },
  {
    path: '/auth',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/app',
    element: <LayoutApp />,
    children: [
      {
        path: 'home',
        element: <p>Random Pokemon</p>
      },
      {
        path: 'pokedex',
        element: <p>Bienvenido a la pokedex</p>
      }
    ]
  }
])
