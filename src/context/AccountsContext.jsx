import { createContext, useState } from 'react'

export const AccountsContext = createContext(undefined)

export function AccountsProvider ({ children }) {
  const [accounts, setAccounts] = useState([])
  return (
    <AccountsContext.Provider value={{ accounts, setAccounts }}>
      {children}
    </AccountsContext.Provider>

  )
}
