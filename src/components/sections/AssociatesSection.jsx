import { ArrowUpRight, Users } from 'lucide-react'
import { associatesSection, socialNetworks } from '../../data/associates'
import { sectionEyebrows } from '../../data/siteContent'
import { useInView } from '../../hooks/useInView'
import { socialIcons } from '../../utils/icons'
import SectionHeader from '../ui/SectionHeader'

function SocialCard({ network }) {
  const Icon = socialIcons[network.icon] || Users

  return (
    <a
      href={network.href}
      className="group flex h-full flex-col rounded-card-lg border border-white/15 bg-white/5 p-6 text-white backdrop-blur-sm transition-all duration-250 hover:border-white/30 hover:bg-white/10 hover:shadow-card-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors duration-250 group-hover:bg-white/15">
          <Icon className="h-5 w-5 text-white/90" aria-hidden="true" />
        </div>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-white/40 transition-all duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-5 font-display text-lg font-bold">{network.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">{network.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-comefyr-gold">
        {network.ctaLabel}
      </p>
    </a>
  )
}

// Comunidad COMEFYR — redes sociales institucionales, sin métricas inventadas
export default function AssociatesSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="comunidad" className="relative overflow-hidden bg-comefyr-blue section-padding">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-comefyr-olive/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-comefyr-green/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          light
          eyebrow={sectionEyebrows.community}
          title={associatesSection.title}
          subtitle={associatesSection.subtitle}
        />

        <div
          ref={ref}
          className={`fade-in-section grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${isInView ? 'is-visible' : ''}`}
        >
          {socialNetworks.map((network) => (
            <SocialCard key={network.id} network={network} />
          ))}
        </div>
      </div>
    </section>
  )
}
