import { trustStats } from '../../data/stats'
import StatCard from '../ui/StatCard'

// Indicadores de confianza institucional
export default function TrustStats() {
  return (
    <section className="bg-comefyr-soft section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
