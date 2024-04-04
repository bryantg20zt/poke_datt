import { NextUIProvider } from '@nextui-org/react'
import { Login } from '@views/Login/Login.jsx'

function App () {
  return (
    <NextUIProvider>
      <Login />
    </NextUIProvider>
  )
}

export default App
