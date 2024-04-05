import { createContext, useState } from 'react'

export const UserContext = createContext(undefined)

export function UserProvider ({ children }) {
  const [isLogged, setLogged] = useState(false)
  return (
    <UserContext.Provider value={{ isLogged, setLogged }}>
      {children}
    </UserContext.Provider>

  )
}
