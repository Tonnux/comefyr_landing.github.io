import { Award } from 'lucide-react'
import { statIcons } from '../../utils/icons'

// Card de confianza institucional — sin cifras no confirmadas
export default function StatCard({ title, description, icon }) {
  const Icon = statIcons[icon] || Award

  return (
    <div className="group rounded-card-lg border border-comefyr-blue/8 bg-white p-6 shadow-card transition-all duration-250 hover:border-comefyr-olive/25 hover:shadow-card-hover">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-comefyr-ice transition-colors duration-250 group-hover:bg-comefyr-blue/5">
        <Icon className="h-5 w-5 text-comefyr-blue" aria-hidden="true" />
      </div>
      <p className="font-display text-lg font-bold leading-snug text-comefyr-blue">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-comefyr-muted">{description}</p>
    </div>
  )
}
