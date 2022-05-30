import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

// LAYOUTS
import { AuthLayout } from '../layouts/Auth'
import { AppLayout } from '../layouts/App'

// PAGES
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const RouteList = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/login">
            <Home />
          </PrivateRoute>
        }
      />
    </Route>

    <Route element={<AuthLayout />}>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
    </Route>

    <Route path="*" element={<h1>404</h1>} />
  </Routes>
)
