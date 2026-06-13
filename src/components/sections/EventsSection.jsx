import { events, eventsSection } from '../../data/events'
import EventCard from '../ui/EventCard'
import SectionHeader from '../ui/SectionHeader'

// Próximos eventos con jerarquía visual clara
export default function EventsSection() {
  return (
    <section id="eventos" className="bg-comefyr-soft section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={eventsSection.title}
          subtitle={eventsSection.subtitle}
        />

        {/* Fila principal: destacado + secundario */}
        <div className="grid gap-6 lg:grid-cols-3">
          <EventCard event={events.featured} variant="featured" />
          <EventCard event={events.secondary} variant="secondary" />
        </div>

        {/* Eventos menores — cards compactas */}
        <div className="mt-6 space-y-3">
          {events.minor.map((event) => (
            <EventCard key={event.id} event={event} variant="minor" />
          ))}
        </div>
      </div>
    </section>
  )
}
