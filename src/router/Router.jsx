import { createBrowserRouter } from 'react-router-dom'
import { LayoutApp } from '@layout/AppLayout.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Hola</p>
  },
  {
    path: '/auth',
    element: <p>Auth</p>
  },
  {
    path: '/register',
    element: <p>Register</p>
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
