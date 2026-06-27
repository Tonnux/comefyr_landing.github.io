import { siteConfig } from '../data/siteConfig'

// Construye URL de WhatsApp con mensaje prellenado
function buildWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(message)}`
}

export function getWhatsAppCourseUrl(courseTitle) {
  return buildWhatsAppUrl(`Hola, quiero información sobre el curso: ${courseTitle}`)
}

export function getWhatsAppEndorsementsUrl() {
  return buildWhatsAppUrl('Hola, quiero información sobre los avales académicos COMEFYR.')
}

export function getWhatsAppMembershipUrl() {
  return buildWhatsAppUrl('Hola, quiero registrarme como socio COMEFYR.')
}
