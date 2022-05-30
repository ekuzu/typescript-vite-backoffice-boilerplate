import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
export function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
