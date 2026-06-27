import logo from '../../assets/logos/logo_comefyr_2.png'
import {
  footerContactLinks,
  footerCourseLinks,
  footerLegalLinks,
  footerNavLinks,
} from '../../data/navigation'
import { contactInfo } from '../../data/contact'
import { siteConfig } from '../../data/siteConfig'

// Footer institucional ampliado
export default function Footer() {
  return (
    <footer className="bg-comefyr-blue text-white">
      <div className="mx-auto max-w-7xl section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Marca */}
          <div className="space-y-4 lg:col-span-2">
            <img
              src={logo}
              alt="Logo COMEFYR"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/80">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-comefyr-gold">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-comefyr-olive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-comefyr-gold">
              Cursos
            </h3>
            <ul className="space-y-2.5">
              {footerCourseLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-comefyr-olive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-comefyr-gold">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href={contactInfo.whatsapp.href} className="hover:text-white">
                  {contactInfo.whatsapp.label}
                </a>
              </li>
              <li>
                <a href={contactInfo.email.href} className="hover:text-white">
                  {contactInfo.email.label}
                </a>
              </li>
              {footerContactLinks.slice(2).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1 text-white/60">{contactInfo.location.value}</li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/60">
            © {siteConfig.name} {siteConfig.year}
          </p>
        </div>
      </div>
    </footer>
  )
}
