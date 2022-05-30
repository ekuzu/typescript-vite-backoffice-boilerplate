import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex h-screen">
      <Outlet />
    </div>
  )
}
