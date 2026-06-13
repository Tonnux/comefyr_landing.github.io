// Helpers de evento — compatibilidad entre contrato nuevo y campos legacy
export function getEventImage(event) {
  return event?.image_url || event?.image || ''
}

export function getEventDate(event) {
  return event?.display_date || event?.date || ''
}

export function getEventDetailUrl(event) {
  return event?.detail_url || '#eventos'
}

export function getEventRegistrationUrl(event) {
  return event?.registration_url || '#contacto'
}

// Agrupa eventos planos por jerarquía visual (featured_level)
export function groupEventsByLevel(eventsList) {
  const sorted = [...eventsList].sort((a, b) => a.sort_order - b.sort_order)

  return {
    featured: sorted.find((e) => e.featured_level === 1) || null,
    secondary: sorted.find((e) => e.featured_level === 2) || null,
    minor: sorted.filter((e) => e.featured_level === 3),
  }
}
