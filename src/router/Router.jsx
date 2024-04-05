import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LayoutApp } from '@layout/AppLayout.jsx'
import { Login } from '@views/Login/Login.jsx'
import { Register } from '@views/Register/Register.jsx'
import { PokeRandom } from '@views/PokeRandom/PokeRandom.jsx'
import { Pokedex } from '@views/Pokedex/Pokedex.jsx'

export const router = createBrowserRouter([
  {
    path: '/poke_datt',
    element: <Navigate to='/poke_datt/auth' />
  },
  {
    path: '/poke_datt/auth',
    element: <Login />
  },
  {
    path: '/poke_datt/register',
    element: <Register />
  },
  {
    path: '/poke_datt/app',
    element: <LayoutApp />,
    children: [
      {
        path: 'home',
        element: <PokeRandom />
      },
      {
        path: 'pokedex',
        element: <Pokedex />
      }
    ]
  }
])
