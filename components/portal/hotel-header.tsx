import Image from 'next/image'
import { Hotel } from '@/types/portal'

export function HotelHeader({ hotel }: { hotel: Hotel }) {
  return (
    <header className="text-center space-y-4">
      {hotel.logoUrl ? (
        <Image
          src={hotel.logoUrl}
          alt={`${hotel.name} logo`}
          width={120}
          height={120}
          className="mx-auto rounded-full object-cover"
          priority
        />
      ) : (
        <div
          className="w-[120px] h-[120px] mx-auto rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${hotel.primaryColor}, ${hotel.primaryColor}dd)`
          }}
        >
          <span className="text-4xl font-bold text-white">
            {hotel.name.charAt(0)}
          </span>
        </div>
      )}
      <h1 className="text-2xl font-semibold text-gray-900">
        {hotel.name}
      </h1>
    </header>
  )
}
