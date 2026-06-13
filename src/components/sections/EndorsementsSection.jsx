import { useState } from 'react'
import { endorsementIcons } from '../../utils/icons'
import { endorsementBenefits } from '../../data/endorsements'
import Button from '../ui/Button'
import FormSuccess from '../ui/FormSuccess'
import Input from '../ui/Input'

// Avales — split oscuro tipo Platzi Business + formulario blanco
export default function EndorsementsSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="avales"
      className="relative overflow-hidden bg-gradient-to-br from-comefyr-blue via-comefyr-blue to-comefyr-green section-padding"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-comefyr-olive/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Avales académicos COMEFYR</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Respaldamos cursos, diplomados, simposios y eventos académicos relacionados con
            medicina física, rehabilitación y electrodiagnóstico.
          </p>

          <ul className="mt-10 space-y-4">
            {endorsementBenefits.map((benefit) => {
              const Icon = endorsementIcons[benefit.icon] || endorsementIcons['shield-check']
              return (
                <li key={benefit.id} className="flex items-start gap-4">
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
        </div>

        <div className="rounded-card-lg bg-white p-6 shadow-2xl sm:p-10">
          <h3 className="text-xl font-bold text-comefyr-blue">Solicitar aval</h3>
          <p className="mt-2 text-sm text-comefyr-muted">
            Completa el formulario y nos pondremos en contacto contigo.
          </p>

          {submitted ? (
            <div className="mt-6">
              <FormSuccess />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Input label="Nombre" name="nombre" required />
              <Input label="Correo institucional" name="email" type="email" required />
              <Input label="Institución" name="institucion" required />
              <Input label="Nombre del curso o evento" name="curso" required />
              <Input label="Teléfono" name="telefono" type="tel" required />
              <Input label="Mensaje" name="mensaje" as="textarea" required />
              <Button type="submit" size="lg" className="w-full">
                Solicitar información
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
