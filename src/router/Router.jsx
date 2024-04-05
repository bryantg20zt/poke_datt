import { createBrowserRouter, Navigate } from 'react-router-dom'
import { UserContext } from '@contexts/UserContext.jsx'
import { useContext } from 'react'
import { LayoutApp } from '@layout/AppLayout.jsx'
import { Login } from '@views/Login/Login.jsx'
import { Register } from '@views/Register/Register.jsx'
import { PokeRandom } from '@views/PokeRandom/PokeRandom.jsx'
import { Pokedex } from '@views/Pokedex/Pokedex.jsx'

function ProtectedRoute ({ children }) {
  const userContext = useContext(UserContext)
  console.log(userContext)
  return userContext.isLogged ? children : <Navigate to='/poke_datt/auth' />
}

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
    element: <ProtectedRoute><LayoutApp /></ProtectedRoute>,
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
