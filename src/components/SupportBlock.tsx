import { SUPPORT_EMAIL, SUPPORT_ADDRESS, SALES_PHONE, SERVICE_PHONE, COMPANY_NAME } from '../data/mockData'

export default function SupportBlock() {
  return (
    <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row items-start justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">Need help?</p>
          <p className="text-xs text-gray-500 mt-0.5">{COMPANY_NAME} support is available Monday–Friday, 8am–6pm EST.</p>
          <p className="text-xs text-gray-400 mt-1">{SUPPORT_ADDRESS}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {SUPPORT_EMAIL}
        </a>
        <a
          href={`tel:${SALES_PHONE}`}
          className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span><span className="text-gray-500 font-normal">Sales:</span> {SALES_PHONE}</span>
        </a>
        <a
          href={`tel:${SERVICE_PHONE}`}
          className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-medium transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span><span className="text-gray-500 font-normal">Service:</span> {SERVICE_PHONE}</span>
        </a>
      </div>
    </div>
  )
}
