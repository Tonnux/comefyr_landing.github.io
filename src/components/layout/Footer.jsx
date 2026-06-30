import logoFooter from '../../assets/logos/logo_comefyr_2.png'
import {
  footerContactLinks,
  footerCourseLinks,
  footerLegalLinks,
  footerNavLinks,
} from '../../data/navigation'
import { contactInfo } from '../../data/contact'
import { siteConfig } from '../../data/siteConfig'
import { socialIcons } from '../../utils/icons'

const socialLinks = [
  { label: 'YouTube', href: '#', icon: 'youtube' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
]

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-comefyr-gold">
        {title}
      </h3>
      <div className="mt-3 h-0.5 w-8 rounded-full bg-comefyr-gold" aria-hidden="true" />
      <div className="mt-4">{children}</div>
    </div>
  )
}

// Footer institucional — coherente con identidad visual Fase 1+2
export default function Footer() {
  return (
    <footer className="border-t border-comefyr-gold/40 bg-comefyr-blue text-white">
      <div className="mx-auto max-w-7xl section-padding pb-10 pt-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Marca */}
          <div className="space-y-5 lg:col-span-2">
            <img
              src={logoFooter}
              alt="Logo COMEFYR"
              className="h-10 w-auto max-w-[168px] object-contain object-left sm:h-11 sm:max-w-[184px]"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/80">{siteConfig.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition-all duration-250 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navegación */}
          <FooterColumn title="Navegación">
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors duration-250 hover:text-comefyr-olive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Cursos */}
          <FooterColumn title="Cursos">
            <ul className="space-y-2.5">
              {footerCourseLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors duration-250 hover:text-comefyr-olive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contacto */}
          <FooterColumn title="Contacto">
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a
                  href={contactInfo.whatsapp.href}
                  className="transition-colors duration-250 hover:text-white"
                >
                  {contactInfo.whatsapp.label}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.email.href}
                  className="transition-colors duration-250 hover:text-white"
                >
                  {contactInfo.email.label}
                </a>
              </li>
              {footerContactLinks.slice(2).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors duration-250 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1 text-white/60">{contactInfo.location.value}</li>
            </ul>
          </FooterColumn>
        </div>

        {/* Legal */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/60 transition-colors duration-250 hover:text-white"
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
