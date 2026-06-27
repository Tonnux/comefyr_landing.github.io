import { sectionEyebrows } from '../../data/siteContent'
import { endorsementBenefits } from '../../data/endorsements'
import { useInView } from '../../hooks/useInView'
import { endorsementIcons } from '../../utils/icons'
import { getWhatsAppEndorsementsUrl } from '../../utils/whatsapp'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'

// Avales — sección informativa institucional sin formulario
export default function EndorsementsSection() {
  const [ref, isInView] = useInView()

  return (
    <section
      id="avales"
      className="relative overflow-hidden bg-gradient-to-br from-comefyr-blue via-comefyr-blue to-comefyr-green section-padding"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-comefyr-olive/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-comefyr-green/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          light
          eyebrow={sectionEyebrows.endorsements}
          title="Avales académicos COMEFYR"
          subtitle="Respaldamos cursos, diplomados, simposios y eventos académicos relacionados con medicina física, rehabilitación y electrodiagnóstico."
        />

        <div
          ref={ref}
          className={`fade-in-section grid gap-4 sm:grid-cols-2 ${isInView ? 'is-visible' : ''}`}
        >
          {endorsementBenefits.map((benefit) => {
            const Icon = endorsementIcons[benefit.icon] || endorsementIcons['shield-check']
            return (
              <article
                key={benefit.id}
                className="flex items-start gap-4 rounded-card-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-250 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5 text-comefyr-gold" aria-hidden="true" />
                </div>
                <div className="text-left text-white">
                  <h3 className="font-display font-semibold">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{benefit.description}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button
            href={getWhatsAppEndorsementsUrl()}
            variant="gold"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preguntar por avales
          </Button>
        </div>
      </div>
    </section>
  )
}
