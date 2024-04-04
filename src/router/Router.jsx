import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LayoutApp } from '@layout/AppLayout.jsx'
import { Login } from '@views/Login/Login.jsx'
import { Register } from '@views/Register/Register.jsx'
import { PokeRandom } from '@views/PokeRandom/PokeRandom.jsx'

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
        element: <PokeRandom />
      },
      {
        path: 'pokedex',
        element: <p>Bienvenido a la pokedex</p>
      }
    ]
  }
])
