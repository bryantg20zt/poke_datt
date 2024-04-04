import { Sidebar } from '@components/sidebar/SidebarNavigation.jsx'
import { Outlet } from 'react-router-dom'

export function LayoutApp ({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Outlet />
      {children}
    </div>
  )
}
