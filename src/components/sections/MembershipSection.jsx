import { useState } from 'react'
import { Check, Copy, CreditCard, FileText } from 'lucide-react'
import {
  bankInfo,
  membershipPlans,
  membershipRequirements,
  membershipSection,
  membershipSteps,
  paymentFeatures,
} from '../../data/membership'
import { sectionEyebrows } from '../../data/siteContent'
import { siteConfig } from '../../data/siteConfig'
import { useInView } from '../../hooks/useInView'
import { ANCHORS } from '../../utils/links'
import { getWhatsAppMembershipUrl } from '../../utils/whatsapp'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'

// Membresía — pricing institucional, requisitos, timeline y formas de pago (sin formulario)
export default function MembershipSection() {
  const [copied, setCopied] = useState(false)
  const [ref, isInView] = useInView()

  const bankText = `Banco: ${bankInfo.bank}\nCLABE: ${bankInfo.clabe}\nCuenta: ${bankInfo.account}\nRazón social: ${bankInfo.businessName}`

  const copyBankData = async () => {
    try {
      await navigator.clipboard.writeText(bankText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="membresia" className="bg-comefyr-soft section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={sectionEyebrows.membership}
          title={membershipSection.title}
          subtitle={membershipSection.subtitle}
        />

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href={getWhatsAppMembershipUrl()}
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero ser socio COMEFYR
          </Button>
          <Button href={siteConfig.membershipStatusUrl} variant="secondary" size="lg">
            Consultar mi estatus
          </Button>
        </div>

        <div
          ref={ref}
          className={`fade-in-section mt-14 space-y-14 ${isInView ? 'is-visible' : ''}`}
        >
          {/* Planes tipo pricing académico */}
          <div>
            <h3 className="text-center font-display text-xl font-bold text-comefyr-blue">
              Tipos de membresía
            </h3>
            <div className="section-title-divider" aria-hidden="true" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {membershipPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-card-lg border bg-white p-8 shadow-card transition-all duration-250 hover:shadow-card-hover ${
                    index === 0
                      ? 'border-comefyr-blue/20 ring-1 ring-comefyr-blue/10'
                      : 'border-gray-100/90'
                  }`}
                >
                  {index === 0 && (
                    <span className="absolute -top-3 left-6 rounded-full bg-comefyr-blue px-3 py-0.5 text-xs font-semibold text-white">
                      Perfil principal
                    </span>
                  )}
                  <h4 className="font-display text-lg font-bold text-comefyr-blue">{plan.name}</h4>
                  <p className="mt-4">
                    <span className="font-display text-4xl font-bold text-comefyr-blue">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-comefyr-muted">/ {plan.period}</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-comefyr-muted">
                    Membresía anual con acceso a beneficios académicos y actividades COMEFYR.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Requisitos */}
          <div className="rounded-card-lg border border-comefyr-blue/8 bg-white p-8 shadow-card sm:p-10">
            <h3 className="font-display text-xl font-bold text-comefyr-blue">
              Requisitos para registrarte como socio
            </h3>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-comefyr-gold" aria-hidden="true" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {membershipRequirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 rounded-xl border border-comefyr-ice bg-comefyr-soft/60 px-4 py-3 text-sm text-comefyr-text"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-comefyr-blue" aria-hidden="true" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline del proceso */}
          <div>
            <h3 className="text-center font-display text-xl font-bold text-comefyr-blue">
              Proceso de membresía
            </h3>
            <div className="section-title-divider" aria-hidden="true" />
            <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="pointer-events-none absolute left-0 right-0 top-5 hidden h-0.5 bg-comefyr-blue/15 lg:block"
                aria-hidden="true"
              />
              {membershipSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative rounded-card-lg border border-gray-100/90 bg-white p-6 text-center shadow-card transition-shadow duration-250 hover:shadow-card-hover"
                >
                  <span className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-comefyr-blue text-sm font-bold text-white ring-4 ring-comefyr-soft">
                    {step.step}
                  </span>
                  <p className="mt-4 font-display font-semibold text-comefyr-blue">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-comefyr-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formas de pago */}
          <div id="formas-pago">
            <h3 className="flex items-center justify-center gap-2 font-display text-xl font-bold text-comefyr-blue">
              <CreditCard className="h-5 w-5" aria-hidden="true" />
              Formas de pago
            </h3>
            <div className="section-title-divider" aria-hidden="true" />

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {paymentFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-card-lg border border-gray-100/90 bg-white p-6 shadow-card transition-shadow duration-250 hover:shadow-card-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-comefyr-ice">
                    <FileText className="h-5 w-5 text-comefyr-gold" aria-hidden="true" />
                  </div>
                  <h4 className="mt-4 font-display font-bold text-comefyr-blue">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-comefyr-muted">{feature.description}</p>
                </div>
              ))}

              <div className="rounded-card-lg border border-comefyr-blue/10 bg-comefyr-ice/80 p-6 shadow-card lg:col-span-1">
                <h4 className="font-display text-sm font-bold uppercase tracking-wide text-comefyr-blue">
                  Datos bancarios
                </h4>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-comefyr-muted">Banco</dt>
                    <dd className="font-semibold text-comefyr-text">{bankInfo.bank}</dd>
                  </div>
                  <div>
                    <dt className="text-comefyr-muted">CLABE</dt>
                    <dd className="font-semibold text-comefyr-text">{bankInfo.clabe}</dd>
                  </div>
                  <div>
                    <dt className="text-comefyr-muted">Cuenta</dt>
                    <dd className="font-semibold text-comefyr-text">{bankInfo.account}</dd>
                  </div>
                  <div>
                    <dt className="text-comefyr-muted">Razón social</dt>
                    <dd className="mt-1 font-semibold leading-snug text-comefyr-text">
                      {bankInfo.businessName}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button onClick={copyBankData} variant="secondary" size="sm">
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" /> Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Copiar datos
                      </>
                    )}
                  </Button>
                  <Button href={ANCHORS.contacto} size="sm">
                    Enviar comprobante
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
