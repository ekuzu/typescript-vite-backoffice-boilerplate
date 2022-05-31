import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Breadcrumb } from '../../components/Header/Breadcrumb'
export function AppLayout() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <Breadcrumb />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
