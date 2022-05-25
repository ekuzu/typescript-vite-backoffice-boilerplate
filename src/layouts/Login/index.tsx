import React from 'react'
import { Outlet } from 'react-router-dom'

export function LoginLayout() {
  return (
    <div>
      <h1>Login Layout</h1>
      <Outlet />
    </div>
  )
}
