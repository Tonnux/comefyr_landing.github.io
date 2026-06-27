// Helpers de curso — compatibilidad entre contrato nuevo y campos legacy
export function getCourseTitle(course) {
  return course.title || course.name || ''
}

export function getCourseImage(course) {
  return course.image_url || course.image || ''
}

export function getCourseDate(course) {
  return course.display_date || course.date || ''
}

export function hasCourseEndorsement(course) {
  return Boolean(course.endorsement_label || course.hasEndorsement)
}

export function getCourseEndorsementLabel(course) {
  return course.endorsement_label || 'Aval COMEFYR'
}

export function getCourseDetailUrl(course) {
  return course.detail_url || '#contacto'
}
