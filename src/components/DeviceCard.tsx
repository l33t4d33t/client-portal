import { Device, ClientFile } from '../types'

interface DeviceCardProps {
  device: Device
  files: ClientFile[]
  isActive: boolean
  onClick: () => void
}

export default function DeviceCard({ device, files, isActive, onClick }: DeviceCardProps) {
  const fileCount = files.length
  const hasExpiringSoon = files.some((f) => {
    if (!f.expiresAt) return false
    const daysLeft = Math.ceil((new Date(f.expiresAt).getTime() - Date.now()) / 86400000)
    return daysLeft <= 30 && daysLeft > 0
  })

  return (
    <button
      onClick={onClick}
      className={`text-left rounded-2xl border p-5 transition group ${
        isActive
          ? 'border-brand-500 bg-brand-50 shadow-sm'
          : 'border-gray-200 bg-white hover:border-brand-400 hover:shadow-sm'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isActive ? 'bg-brand-600' : 'bg-gray-100 group-hover:bg-brand-100'}`}>
          <svg className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-brand-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9l-6-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v6h6" />
          </svg>
        </div>
        {hasExpiringSoon && (
          <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full shrink-0">
            Expiring Soon
          </span>
        )}
      </div>

      <p className={`font-semibold text-sm ${isActive ? 'text-brand-700' : 'text-gray-900'}`}>{device.name}</p>
      <p className="text-xs text-gray-500 mt-0.5">Model: {device.model}</p>
      <p className="text-xs text-gray-400 mt-0.5 font-mono">S/N: {device.serialNumber}</p>

      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500">{fileCount} file{fileCount !== 1 ? 's' : ''}</span>
        <span className={`text-xs font-medium ${isActive ? 'text-brand-600' : 'text-gray-400'}`}>
          {isActive ? 'Viewing ›' : 'View ›'}
        </span>
      </div>
    </button>
  )
}
