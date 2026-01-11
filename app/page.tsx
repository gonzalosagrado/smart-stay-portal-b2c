import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-3xl font-bold text-white">S</span>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Smart Stay</h1>
        <p className="text-gray-600 mb-8">
          Portal inteligente para huéspedes de hoteles
        </p>
        <Link
          href="/vista-lago"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Ver Demo: Hotel Vista Lago
        </Link>
      </div>
    </div>
  )
}
