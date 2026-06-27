import { ANCHORS } from '../utils/links'

// Links de navegación — en Supabase podrían venir de una tabla de configuración
export const navLinks = [
  { label: 'Inicio', href: ANCHORS.inicio },
  { label: 'Temáticas', href: ANCHORS.tematicas },
  { label: 'Cursos', href: ANCHORS.cursos },
  { label: 'Membresía', href: ANCHORS.membresia },
  { label: 'Avales', href: ANCHORS.avales },
  { label: 'Comunidad', href: ANCHORS.comunidad },
  { label: 'Contacto', href: ANCHORS.contacto },
]

export const footerNavLinks = [
  { label: 'Inicio', href: ANCHORS.inicio },
  { label: 'Temáticas', href: ANCHORS.tematicas },
  { label: 'Cursos', href: ANCHORS.cursos },
  { label: 'Membresía', href: ANCHORS.membresia },
  { label: 'Avales', href: ANCHORS.avales },
  { label: 'Comunidad', href: ANCHORS.comunidad },
  { label: 'Contacto', href: ANCHORS.contacto },
]

export const footerCourseLinks = [
  { label: 'Todos los cursos', href: ANCHORS.todosCursos },
  { label: 'Temáticas académicas', href: ANCHORS.tematicas },
  { label: 'Membresía COMEFYR', href: ANCHORS.membresia },
  { label: 'Avales académicos', href: ANCHORS.avales },
]

export const footerContactLinks = [
  { label: 'WhatsApp', href: ANCHORS.contacto },
  { label: 'Correo institucional', href: 'mailto:contacto@comefyr.com' },
  { label: 'Redes sociales', href: ANCHORS.comunidad },
  { label: 'Ubicación', href: ANCHORS.contacto },
]

export const footerLegalLinks = [
  { label: 'Aviso de privacidad', href: '#' },
  { label: 'Términos y condiciones', href: '#' },
]
