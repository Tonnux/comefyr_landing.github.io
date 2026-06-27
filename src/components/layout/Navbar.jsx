import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logos/logo_comefyr.png'
import { navLinks } from '../../data/navigation'
import { siteConfig } from '../../data/siteConfig'
import { ANCHORS } from '../../utils/links'
import Button from '../ui/Button'

// Navbar institucional — layout 3 zonas, Acceder siempre visible en móvil
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((open) => !open)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-gray-100/80 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-nav' : 'shadow-sm'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href={ANCHORS.inicio} className="shrink-0" aria-label={`${siteConfig.name} — Inicio`}>
            <img
              src={logo}
              alt="Logo COMEFYR"
              className="h-12 w-auto max-w-[150px] object-contain object-left sm:h-14 sm:max-w-[180px] lg:h-16 lg:max-w-[220px]"
            />
          </a>

          <ul className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-2.5 py-2 text-sm font-medium text-comefyr-blue transition-colors hover:text-comefyr-olive xl:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 sm:gap-3 lg:ml-0">
            <Button
              href={siteConfig.loginUrl}
              size="sm"
              aria-label="Acceder con mi cuenta COMEFYR"
              title="Iniciar sesión en la plataforma COMEFYR"
            >
              Acceder
            </Button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 text-comefyr-blue transition-colors hover:border-comefyr-olive/30 hover:bg-comefyr-ice lg:hidden"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-comefyr-blue/20 backdrop-blur-sm transition-opacity duration-250 ${
            isOpen ? 'opacity-100 ease-out' : 'opacity-0 ease-in'
          }`}
          onClick={closeMenu}
        />
        <div
          className={`absolute inset-x-0 top-[72px] mx-3 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all duration-250 sm:top-[80px] sm:mx-4 ${
            isOpen
              ? 'translate-y-0 scale-100 opacity-100 ease-out'
              : '-translate-y-2 scale-[0.98] opacity-0 ease-in'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="divide-y divide-gray-50 p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-4 py-3.5 text-base font-medium text-comefyr-blue transition-colors hover:bg-comefyr-ice hover:text-comefyr-olive"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
