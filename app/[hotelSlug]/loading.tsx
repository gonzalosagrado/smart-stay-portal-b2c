export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-md mx-auto px-4 py-8 space-y-6">
        {/* Header skeleton */}
        <div className="text-center space-y-4">
          <div className="w-[120px] h-[120px] mx-auto rounded-full bg-gray-200 animate-pulse" />
          <div className="h-8 w-48 mx-auto bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Weather skeleton */}
        <div className="rounded-2xl p-6 bg-gray-200 animate-pulse h-32" />

        {/* Section title skeleton */}
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />

        {/* Links skeleton */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-gray-200 rounded-xl animate-pulse" />
        ))}

        {/* Section title skeleton */}
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />

        {/* Links skeleton */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-gray-200 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  )
}
