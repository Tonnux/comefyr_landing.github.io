import { endorsementIcons } from '../../utils/icons'
import { getWhatsAppEndorsementsUrl } from '../../utils/whatsapp'
import { endorsementBenefits } from '../../data/endorsements'
import Button from '../ui/Button'

// Avales — sección informativa institucional sin formulario
export default function EndorsementsSection() {
  return (
    <section
      id="avales"
      className="relative overflow-hidden bg-gradient-to-br from-comefyr-blue via-comefyr-blue to-comefyr-green section-padding"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-comefyr-olive/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">Avales académicos COMEFYR</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
          Respaldamos cursos, diplomados, simposios y eventos académicos relacionados con
          medicina física, rehabilitación y electrodiagnóstico.
        </p>

        <ul className="mt-10 space-y-4 text-left">
          {endorsementBenefits.map((benefit) => {
            const Icon = endorsementIcons[benefit.icon] || endorsementIcons['shield-check']
            return (
              <li
                key={benefit.id}
                className="flex items-start gap-4 rounded-xl bg-white/5 p-4 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5 text-comefyr-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold">{benefit.title}</p>
                  <p className="mt-0.5 text-sm text-white/75">{benefit.description}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-10">
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
