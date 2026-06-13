import { ArrowRight, Calendar, MapPin, Monitor } from 'lucide-react'
import {
  getEventDate,
  getEventDetailUrl,
  getEventImage,
  getEventRegistrationUrl,
} from '../../utils/eventHelpers'
import Button from './Button'

// Card de evento — variantes: featured, secondary, minor
export default function EventCard({ event, variant = 'minor' }) {
  const image = getEventImage(event)
  const date = getEventDate(event)
  const detailUrl = getEventDetailUrl(event)
  const registrationUrl = getEventRegistrationUrl(event)

  if (variant === 'featured') {
    return (
      <article className="group overflow-hidden rounded-card-lg border border-gray-100 bg-white shadow-card transition-shadow hover:shadow-lg lg:col-span-2">
        <div className="grid lg:grid-cols-5">
          <div className="relative aspect-[16/10] overflow-hidden lg:col-span-3 lg:aspect-auto lg:min-h-[340px]">
            <img
              src={image}
              alt={event.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <EventBadge badge={event.badge} className="bg-comefyr-olive" />
          </div>

          <div className="flex flex-col justify-center p-6 lg:col-span-2 lg:p-8">
            <h3 className="text-2xl font-bold text-comefyr-blue lg:text-3xl">{event.title}</h3>
            <EventMeta event={event} date={date} className="mt-4" />
            <p className="mt-4 leading-relaxed text-comefyr-muted">{event.description}</p>
            <EventActions
              className="mt-6"
              detailUrl={detailUrl}
              registrationUrl={registrationUrl}
            />
          </div>
        </div>
      </article>
    )
  }

  if (variant === 'secondary') {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-card-lg border border-gray-100 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <EventBadge badge={event.badge} className="bg-comefyr-gold" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-comefyr-blue">{event.title}</h3>
          <EventMeta event={event} date={date} className="mt-3" />
          <p className="mt-3 flex-1 text-sm leading-relaxed text-comefyr-muted">{event.description}</p>
          <EventActions
            className="mt-5"
            size="sm"
            detailUrl={detailUrl}
            registrationUrl={registrationUrl}
          />
        </div>
      </article>
    )
  }

  return (
    <article className="group flex items-center gap-4 rounded-card-lg border border-gray-100 bg-white p-4 shadow-card transition-all hover:border-comefyr-olive/40 hover:bg-comefyr-ice/30 hover:shadow-md">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
        <img src={image} alt={event.title} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-comefyr-gold">{date}</p>
        <h3 className="mt-0.5 truncate font-bold text-comefyr-blue sm:text-base">{event.title}</h3>
        <p className="mt-1 hidden text-xs text-comefyr-muted sm:line-clamp-1">
          {event.modality} · {event.location}
        </p>
      </div>

      <Button href={detailUrl} variant="ghost" size="sm" className="shrink-0 gap-1 px-3">
        Ver más
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </article>
  )
}

function EventBadge({ badge, className = '' }) {
  if (!badge) return null
  return (
    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${className}`}>
      {badge}
    </span>
  )
}

function EventMeta({ event, date, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-1 text-sm text-comefyr-muted ${className}`}>
      <span className="inline-flex items-center gap-1">
        <Calendar className="h-4 w-4" aria-hidden="true" />
        {date}
      </span>
      <span className="inline-flex items-center gap-1">
        <Monitor className="h-4 w-4" aria-hidden="true" />
        {event.modality}
      </span>
      <span className="inline-flex items-center gap-1">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        {event.location}
      </span>
    </div>
  )
}

function EventActions({ className = '', size = 'md', detailUrl, registrationUrl }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button href={detailUrl} size={size}>
        Ver evento
      </Button>
      <Button href={registrationUrl} variant="secondary" size={size}>
        Registrarme
      </Button>
    </div>
  )
}
