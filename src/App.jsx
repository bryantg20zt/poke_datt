import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/Router.jsx'
import { Login } from '@views/Login/Login.jsx'

function App () {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  )
}

export default App
