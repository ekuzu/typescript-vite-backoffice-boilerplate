import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

// LAYOUTS
import { AuthLayout } from '../layouts/Auth'
import { AppLayout } from '../layouts/App'

// PAGES
import { Home } from '../pages/Home'
import { Users } from '../pages/Users'
import { Login } from '../pages/Login'

export const RouteList = () => (
  <Routes>
    <Route
      element={
        <PrivateRoute redirectTo="/login">
          <AppLayout />
        </PrivateRoute>
      }>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Route>

    <Route
      element={
        <PublicRoute>
          <AuthLayout />
        </PublicRoute>
      }>
      <Route path="/login" element={<Login />} />
    </Route>

    <Route path="*" element={<h1>404</h1>} />
  </Routes>
)
