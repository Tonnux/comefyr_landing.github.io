import { ANCHORS } from '../utils/links'

// Temáticas académicas — futura fuente: Supabase (tabla topics)
export const topics = [
  {
    id: 'topic-neuro',
    title: 'Rehabilitación Neurológica',
    slug: 'rehabilitacion-neurologica',
    courseCount: 8,
    countLabel: 'cursos disponibles',
    icon: 'brain',
    href: ANCHORS.cursos,
  },
  {
    id: 'topic-electro',
    title: 'Electrodiagnóstico',
    slug: 'electrodiagnostico',
    courseCount: 5,
    countLabel: 'cursos disponibles',
    icon: 'activity',
    href: ANCHORS.cursos,
  },
  {
    id: 'topic-fisica',
    title: 'Medicina Física',
    slug: 'medicina-fisica',
    courseCount: 12,
    countLabel: 'cursos disponibles',
    icon: 'heart-pulse',
    href: ANCHORS.cursos,
  },
  {
    id: 'topic-pediatric',
    title: 'Rehabilitación Pediátrica',
    slug: 'rehabilitacion-pediatrica',
    courseCount: 6,
    countLabel: 'cursos disponibles',
    icon: 'baby',
    href: ANCHORS.cursos,
  },
  {
    id: 'topic-diplomados',
    title: 'Diplomados',
    slug: 'diplomados',
    courseCount: 4,
    countLabel: 'programas disponibles',
    icon: 'graduation-cap',
    href: ANCHORS.cursos,
  },
  {
    id: 'topic-eventos',
    title: 'Congresos y eventos',
    slug: 'congresos-eventos',
    courseCount: 10,
    countLabel: 'eventos disponibles',
    icon: 'calendar-days',
    href: ANCHORS.eventos,
  },
]
