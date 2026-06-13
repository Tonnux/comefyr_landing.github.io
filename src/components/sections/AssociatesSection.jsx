import { ArrowUpRight, Users } from 'lucide-react'
import {
  associatesSection,
  heroPhotos,
  socialNetworks,
} from '../../data/associates'
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

// Asociados — sección oscura tipo EDteam con prueba social
export default function AssociatesSection() {
  return (
    <section id="asociados" className="relative overflow-hidden bg-comefyr-blue section-padding">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-comefyr-olive/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-comefyr-green/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          light
          title={associatesSection.title}
          subtitle={associatesSection.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {heroPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-comefyr-blue/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-lg font-bold text-white">
                {photo.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialNetworks
            .filter((n) => !n.wide)
            .map((network) => (
              <SocialCard key={network.id} network={network} />
            ))}
        </div>

        {socialNetworks
          .filter((n) => n.wide)
          .map((network) => (
            <a
              key={network.id}
              href={network.href}
              className={`group relative mt-4 flex overflow-hidden rounded-2xl bg-gradient-to-br p-8 text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl ${network.gradient}`}
            >
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <p className="text-4xl font-extrabold sm:text-5xl">{network.metric}</p>
                  <p className="mt-1 text-sm text-white/80">{network.metricLabel}</p>
                  <p className="mt-4 text-xl font-bold">{network.name}</p>
                </div>
                <Users className="h-16 w-16 text-white/30 transition-colors group-hover:text-white/50" aria-hidden="true" />
              </div>
              <ArrowUpRight className="absolute bottom-5 right-5 h-6 w-6 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          ))}
      </div>
    </section>
  )
}
