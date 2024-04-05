import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { router } from '@/router/Router.jsx'
import { UserProvider } from '@contexts/UserContext.jsx'
import { AccountsProvider } from '@contexts/AccountsContext.jsx'

function App () {
  return (
    <AccountsProvider>
      <UserProvider>
        <NextUIProvider>
          <Toaster />
          <RouterProvider router={router} />
        </NextUIProvider>
      </UserProvider>
    </AccountsProvider>
  )
}

export default App
