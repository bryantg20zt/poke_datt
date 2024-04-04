import { Outlet } from 'react-router-dom'

export function LayoutApp ({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <p>Sidebar</p>
      <Outlet />
      {children}
    </div>
  )
}
