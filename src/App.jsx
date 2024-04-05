import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/Router.jsx'
import { Toaster } from 'react-hot-toast'

function App () {
  return (
    <NextUIProvider>
      <Toaster />
      <RouterProvider router={router} />
    </NextUIProvider>
  )
}

export default App
