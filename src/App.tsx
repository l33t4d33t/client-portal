import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { AuthUser } from './types'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ClientFilesPage from './pages/ClientFilesPage'

export default function App() {
  const [user, setUser] = useState<AuthUser | null>(null)

  function handleLogout() {
    setUser(null)
  }

  function getDefaultRedirect() {
    if (!user) return '/'
    if (user.role === 'admin') return '/dashboard'
    return `/client/${user.clientId}`
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          user
            ? <Navigate to={getDefaultRedirect()} replace />
            : <LoginPage onLogin={setUser} />
        }
      />
      <Route
        path="/dashboard"
        element={
          user?.role === 'admin'
            ? <DashboardPage onLogout={handleLogout} />
            : <Navigate to="/" replace />
        }
      />
      <Route
        path="/client/:id"
        element={
          user
            ? <ClientFilesPage user={user} onLogout={handleLogout} />
            : <Navigate to="/" replace />
        }
      />
    </Routes>
  )
}
