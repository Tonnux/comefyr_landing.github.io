import { Award } from 'lucide-react'
import { statIcons } from '../../utils/icons'

// Card de estadística de confianza
export default function StatCard({ value, label, icon }) {
  const Icon = statIcons[icon] || Award

  return (
    <div className="rounded-card-lg border border-gray-100 bg-white p-6 text-center shadow-card transition-shadow hover:shadow-md">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-comefyr-ice">
        <Icon className="h-6 w-6 text-comefyr-blue" aria-hidden="true" />
      </div>
      <p className="text-3xl font-bold text-comefyr-blue">{value}</p>
      <p className="mt-1 text-sm text-comefyr-muted">{label}</p>
    </div>
  )
}
