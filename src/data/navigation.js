import { ANCHORS } from '../utils/links'

// Links de navegación — en Supabase podrían venir de una tabla de configuración
export const navLinks = [
  { label: 'Inicio', href: ANCHORS.inicio },
  { label: 'Eventos', href: ANCHORS.eventos },
  { label: 'Temáticas', href: ANCHORS.tematicas },
  { label: 'Cursos', href: ANCHORS.cursos },
  { label: 'Avales', href: ANCHORS.avales },
  { label: 'Mesa Directiva', href: ANCHORS.mesaDirectiva },
  { label: 'Asociados', href: ANCHORS.asociados },
  { label: 'Contacto', href: ANCHORS.contacto },
]

export const footerNavLinks = [
  { label: 'Inicio', href: ANCHORS.inicio },
  { label: 'Eventos', href: ANCHORS.eventos },
  { label: 'Temáticas', href: ANCHORS.tematicas },
  { label: 'Cursos', href: ANCHORS.cursos },
  { label: 'Avales', href: ANCHORS.avales },
  { label: 'Mesa Directiva', href: ANCHORS.mesaDirectiva },
  { label: 'Asociados', href: ANCHORS.asociados },
]

export const footerCourseLinks = [
  { label: 'Cursos destacados', href: ANCHORS.cursos },
  { label: 'Todos los cursos', href: ANCHORS.todosCursos },
  { label: 'Membresía', href: ANCHORS.membresia },
  { label: 'Avales académicos', href: ANCHORS.avales },
]

export const footerContactLinks = [
  { label: 'WhatsApp', href: ANCHORS.contacto },
  { label: 'Correo institucional', href: 'mailto:contacto@comefyr.com' },
  { label: 'Redes sociales', href: ANCHORS.asociados },
  { label: 'Ubicación', href: ANCHORS.contacto },
]

export const footerLegalLinks = [
  { label: 'Aviso de privacidad', href: '#' },
  { label: 'Términos y condiciones', href: '#' },
]
