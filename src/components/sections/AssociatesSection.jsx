import { ArrowUpRight, Users } from 'lucide-react'
import { associatesSection, socialNetworks } from '../../data/associates'
import { socialIcons } from '../../utils/icons'
import SectionHeader from '../ui/SectionHeader'

function SocialCard({ network }) {
  const Icon = socialIcons[network.icon] || Users
  return (
    <a
      href={network.href}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br p-6 text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl ${network.gradient}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl font-extrabold">{network.metric}</p>
          <p className="mt-1 text-sm text-white/80">{network.metricLabel}</p>
          <p className="mt-4 text-lg font-bold">{network.name}</p>
        </div>
        <Icon className="h-10 w-10 text-white/40 transition-colors group-hover:text-white/70" aria-hidden="true" />
      </div>
      <ArrowUpRight className="absolute bottom-4 right-4 h-5 w-5 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
    </a>
  )
}

// Comunidad COMEFYR — redes sociales y prueba social
export default function AssociatesSection() {
  return (
    <section id="comunidad" className="relative overflow-hidden bg-comefyr-blue section-padding">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-comefyr-olive/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-comefyr-green/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          light
          title={associatesSection.title}
          subtitle={associatesSection.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialNetworks.map((network) => (
            <SocialCard key={network.id} network={network} />
          ))}
        </div>
      </div>
    </section>
  )
}
