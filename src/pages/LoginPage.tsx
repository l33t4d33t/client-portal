import { useState, FormEvent } from 'react'
import { ADMIN_CREDENTIALS, MOCK_CLIENTS, COMPANY_NAME, SUPPORT_EMAIL, SALES_PHONE } from '../data/mockData'
import { AuthUser } from '../types'

interface LoginPageProps {
  onLogin: (user: AuthUser) => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showForgot, setShowForgot] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    await new Promise((res) => setTimeout(res, 800))

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      onLogin({ role: 'admin' })
    } else {
      const client = MOCK_CLIENTS.find(
        (c) => c.email === email && c.password === password
      )
      if (client) {
        onLogin({ role: 'client', clientId: client.id })
      } else {
        setError('Invalid email or password.')
      }
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-900 to-brand-500 px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <img src="/logo.png" alt="Company Logo" className="h-20 w-auto drop-shadow-lg" />
          </div>
          <h1 className="text-2xl font-bold text-white">{COMPANY_NAME}</h1>
          <p className="text-brand-100 mt-1 text-sm">Client Portal — Sign in to access your files</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition text-sm"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="text-xs text-brand-600 hover:text-brand-700 hover:underline transition"
              >
                Forgot your username or password?
              </button>
            </div>
          </form>

          {showForgot && (
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold mb-1">Need help accessing your account?</p>
                  <p className="text-xs text-blue-700">Please contact our support team and we'll get you back in.</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs"><span className="font-medium">Email:</span>{' '}
                      <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">{SUPPORT_EMAIL}</a>
                    </p>
                    <p className="text-xs"><span className="font-medium">Phone:</span>{' '}
                      <a href={`tel:${SALES_PHONE}`} className="underline">{SALES_PHONE}</a>
                    </p>
                  </div>
                </div>
                <button onClick={() => setShowForgot(false)} className="text-blue-400 hover:text-blue-600 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          <div className="mt-6 border-t border-gray-100 pt-5 space-y-1.5">
            <p className="text-xs font-medium text-gray-400 mb-2">Demo credentials</p>
            <p className="text-xs text-gray-400"><span className="font-medium text-gray-500">Admin:</span> admin@multiplexbeverage.com / admin1234</p>
            <p className="text-xs text-gray-400"><span className="font-medium text-gray-500">Sarah:</span> sarah@acmecorp.com / sarah1234</p>
            <p className="text-xs text-gray-400"><span className="font-medium text-gray-500">James:</span> james@novastudio.io / james1234</p>
            <p className="text-xs text-gray-400"><span className="font-medium text-gray-500">Priya:</span> priya@greenleaf.co / priya1234</p>
          </div>
        </div>
      </div>
    </div>
  )
}
