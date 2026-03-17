import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { MOCK_CLIENTS } from '../data/mockData'
import Navbar from '../components/Navbar'
import { DashboardSkeleton } from '../components/Skeleton'

interface DashboardPageProps {
  onLogout: () => void
}

export default function DashboardPage({ onLogout }: DashboardPageProps) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Clients</h2>
          <p className="text-gray-500 mt-1 text-sm">Select a client to view and download their files.</p>
        </div>

        {loading ? (
          <DashboardSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MOCK_CLIENTS.map((client) => (
              <button
                key={client.id}
                onClick={() => navigate(`/client/${client.id}`)}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-left hover:shadow-md hover:border-brand-500 transition group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-sm shrink-0 group-hover:bg-brand-600 group-hover:text-white transition">
                    {client.avatarInitials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-brand-600 transition">{client.name}</p>
                    <p className="text-sm text-gray-500">{client.company}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{client.email}</span>
                  <span className="bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5 text-xs font-medium">
                    {client.files.length} files
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
