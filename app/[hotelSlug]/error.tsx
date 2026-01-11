'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-2xl">😕</span>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Algo salió mal</h2>
        <p className="text-gray-600 mb-6">
          No pudimos cargar el portal. Por favor intenta nuevamente.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Intentar nuevamente
        </button>
      </div>
    </div>
  )
}
