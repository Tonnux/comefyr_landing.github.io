import { trustStats } from '../../data/stats'
import { useInView } from '../../hooks/useInView'
import StatCard from '../ui/StatCard'

// Indicadores de confianza institucional — copy sin métricas inventadas
export default function TrustStats() {
  const [ref, isInView] = useInView()

  return (
    <section className="border-y border-comefyr-blue/8 bg-trust-band section-padding py-12 lg:py-14">
      <div
        ref={ref}
        className={`fade-in-section mx-auto max-w-7xl ${isInView ? 'is-visible' : ''}`}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {trustStats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
