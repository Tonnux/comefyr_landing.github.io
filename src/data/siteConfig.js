import { ROUTES } from '../utils/links'

// Configuración general del sitio — futura fuente: Supabase o CMS
export const siteConfig = {
  name: 'COMEFYR',
  tagline: 'Ciencia y Ética al servicio de la Humanidad.',
  // Inicio de sesión — plataforma COMEFYR (no confundir con membresía ni registro)
  loginUrl: ROUTES.login,
  // Consulta de estatus de membresía (futura ruta real)
  membershipStatusUrl: ROUTES.membershipStatus,
  heroImage:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=700&fit=crop',
  whatsappMessage:
    'Hola, quiero información sobre cursos, membresía o avales COMEFYR.',
  whatsappPhone: '5255123456789',
  whatsappUrl:
    'https://wa.me/5255123456789?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20cursos%2C%20membres%C3%ADa%20o%20avales%20COMEFYR.',
  year: 2026,
}
