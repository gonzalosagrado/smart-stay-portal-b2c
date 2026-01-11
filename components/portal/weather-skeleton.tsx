export function WeatherSkeleton() {
  return (
    <div className="rounded-2xl p-6 bg-gray-200 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="h-10 w-20 bg-gray-300 rounded" />
          <div className="h-4 w-32 bg-gray-300 rounded" />
        </div>
        <div className="w-16 h-16 bg-gray-300 rounded-full" />
      </div>
    </div>
  )
}
