import { useState } from 'react'
import { Check, Copy, CreditCard, FileText } from 'lucide-react'
import {
  bankInfo,
  membershipPlans,
  membershipRequirements,
  membershipSection,
  membershipSteps,
  paymentFeatures,
  profileOptions,
} from '../../data/membership'
import { siteConfig } from '../../data/siteConfig'
import { ANCHORS } from '../../utils/links'
import Button from '../ui/Button'
import FormSuccess from '../ui/FormSuccess'
import Input from '../ui/Input'

// Membresía — flujo claro: explicación → planes → requisitos → proceso → formulario → pago
export default function MembershipSection() {
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const bankText = `Banco: ${bankInfo.bank}\nCLABE: ${bankInfo.clabe}\nCuenta: ${bankInfo.account}\nRazón social: ${bankInfo.businessName}`

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
    <section id="membresia" className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        {/* 1. Encabezado + botones principales */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-comefyr-blue sm:text-4xl">
            {membershipSection.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-comefyr-muted">
            {membershipSection.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={ANCHORS.registroSocio} size="lg">
              Quiero ser socio COMEFYR
            </Button>
            <Button href={siteConfig.membershipStatusUrl} variant="secondary" size="lg">
              Consultar mi estatus
            </Button>
          </div>
        </div>

        {/* 2. Cards de membresía */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-card-lg border-2 border-comefyr-olive/25 bg-comefyr-soft p-8 shadow-card transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-comefyr-blue">{plan.name}</h3>
              <p className="mt-3">
                <span className="text-4xl font-extrabold text-comefyr-olive">{plan.price}</span>
                <span className="ml-2 text-comefyr-muted">/ {plan.period}</span>
              </p>
            </div>
          ))}
        </div>

        {/* 3. Requisitos */}
        <div className="mt-12 rounded-card-lg border border-gray-100 bg-comefyr-ice p-8 shadow-card">
          <h3 className="text-xl font-bold text-comefyr-blue">Requisitos para registrarte como socio</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {membershipRequirements.map((req) => (
              <li key={req} className="flex items-start gap-3 text-sm text-comefyr-text">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-comefyr-olive" aria-hidden="true" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Proceso en 4 pasos */}
        <div className="mt-12">
          <h3 className="mb-8 text-center text-xl font-bold text-comefyr-blue">
            Proceso de membresía
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {membershipSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-card-lg border border-gray-100 bg-white p-6 text-center shadow-card"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-comefyr-olive text-sm font-bold text-white">
                  {step.step}
                </span>
                <p className="mt-4 font-semibold text-comefyr-blue">{step.title}</p>
                <p className="mt-2 text-sm text-comefyr-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Formulario de registro */}
        <div
          id="registro-socio"
          className="mt-12 rounded-card-lg border border-gray-100 bg-comefyr-soft p-6 shadow-card sm:p-10"
        >
          <h3 className="text-xl font-bold text-comefyr-blue">Regístrate como socio</h3>
          <p className="mt-2 text-sm text-comefyr-muted">
            Completa tus datos para iniciar el proceso de membresía.
          </p>

          {submitted ? (
            <div className="mt-6">
              <FormSuccess message="Gracias por registrarte. Te contactaremos pronto con los siguientes pasos." />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <Input label="Nombre completo" name="nombre" required />
              <Input label="Correo electrónico" name="email" type="email" required />
              <Input label="Teléfono" name="telefono" type="tel" required />
              <Input label="Institución de procedencia" name="institucion" required />
              <Input label="Perfil" name="perfil" as="select" options={profileOptions} required />
              <Input label="Ciudad de procedencia" name="ciudad" required />
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Quiero ser socio COMEFYR
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* 6. Formas de pago */}
        <div id="formas-pago" className="mt-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h3 className="flex items-center gap-2 text-xl font-bold text-comefyr-blue">
              <CreditCard className="h-5 w-5" aria-hidden="true" />
              Formas de pago
            </h3>
            <Button href={ANCHORS.formasPago} variant="ghost" size="sm">
              Ver formas de pago
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {paymentFeatures.map((feature) => (
              <div
                key={feature.id}
                className="rounded-card-lg border border-gray-100 bg-white p-6 shadow-card"
              >
                <FileText className="h-6 w-6 text-comefyr-gold" aria-hidden="true" />
                <h4 className="mt-3 font-bold text-comefyr-blue">{feature.title}</h4>
                <p className="mt-2 text-sm text-comefyr-muted">{feature.description}</p>
              </div>
            ))}

            <div className="rounded-card-lg border border-comefyr-blue/10 bg-comefyr-ice p-6 shadow-card lg:col-span-1">
              <dl className="space-y-3 text-sm">
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
                  <dd className="mt-1 font-semibold text-comefyr-text">{bankInfo.businessName}</dd>
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
    </section>
  )
}
