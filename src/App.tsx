import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import { RouteList } from './routes'
import './App.css'

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <RouteList />
    </AuthProvider>
  </BrowserRouter>
)

export default App
