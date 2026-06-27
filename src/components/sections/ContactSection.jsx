import { useState } from 'react'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { contactInfo, contactSection } from '../../data/contact'
import Button from '../ui/Button'
import FormSuccess from '../ui/FormSuccess'
import Input from '../ui/Input'
import SectionHeader from '../ui/SectionHeader'

// Formulario de contacto y datos institucionales
export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [captchaChecked, setCaptchaChecked] = useState(false)
  const [captchaError, setCaptchaError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!captchaChecked) {
      setCaptchaError(true)
      return
    }

    setSubmitted(true)
  }

  const handleCaptchaChange = (e) => {
    setCaptchaChecked(e.target.checked)
    if (e.target.checked) setCaptchaError(false)
  }

  return (
    <section id="contacto" className="bg-comefyr-soft section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={contactSection.title}
          subtitle={contactSection.subtitle}
        />

        <div className="overflow-hidden rounded-card-lg border border-gray-100 bg-white shadow-card">
          <div className="grid lg:grid-cols-5">
            <div className="p-6 sm:p-10 lg:col-span-3 lg:border-r lg:border-gray-100">
              {submitted ? (
                <FormSuccess />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Nombre" name="nombre" required />
                    <Input label="Correo" name="email" type="email" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Teléfono" name="telefono" type="tel" required />
                    <Input label="Asunto" name="asunto" required />
                  </div>
                  <Input label="Mensaje" name="mensaje" as="textarea" required />

                  {/* TODO: Reemplazar captcha temporal por reCAPTCHA/hCaptcha cuando se conecte backend. */}
                  <div className="rounded-xl border border-gray-200 bg-comefyr-soft px-4 py-4 sm:px-5">
                    <p className="text-sm font-semibold text-comefyr-blue">
                      Verificación de seguridad
                    </p>
                    <label className="mt-3 flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        name="captcha"
                        checked={captchaChecked}
                        onChange={handleCaptchaChange}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-comefyr-olive focus:ring-comefyr-olive/30"
                      />
                      <span className="text-sm text-comefyr-text">No soy un robot</span>
                    </label>
                    {captchaError && (
                      <p className="mt-3 text-sm font-medium text-red-600" role="alert">
                        Confirma la verificación de seguridad antes de enviar el mensaje.
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg">
                    Enviar mensaje
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-1 bg-comefyr-ice/30 p-6 sm:p-10 lg:col-span-2">
              <ContactItem
                icon={MessageCircle}
                label={contactInfo.whatsapp.label}
                value={contactInfo.whatsapp.value}
                href={contactInfo.whatsapp.href}
              />
              <ContactItem
                icon={Mail}
                label={contactInfo.email.label}
                value={contactInfo.email.value}
                href={contactInfo.email.href}
              />
              <ContactItem
                icon={MapPin}
                label={contactInfo.location.label}
                value={contactInfo.location.value}
              />

              <div className="pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-comefyr-blue">
                  Redes sociales
                </h3>
                <ul className="mt-3 space-y-2">
                  {contactInfo.socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        className="text-sm font-medium text-comefyr-muted transition-colors hover:text-comefyr-olive"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-3 py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
        <Icon className="h-4 w-4 text-comefyr-blue" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-comefyr-muted">{label}</p>
        <p className="mt-0.5 font-semibold text-comefyr-blue">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {inner}
      </a>
    )
  }

  return inner
}
