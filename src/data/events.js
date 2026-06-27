import { ANCHORS } from '../utils/links'
import { groupEventsByLevel } from '../utils/eventHelpers'

// Eventos — futura fuente: Supabase (tabla events, lista plana)
export const eventsSection = {
  title: 'Próximos eventos COMEFYR',
  subtitle: 'Participa en nuestras actividades académicas, congresos y simposios.',
}

export const eventsList = [
  {
    id: 'evt-simposio-2026',
    title: 'Simposio COMEFYR 2026',
    slug: 'simposio-comefyr-2026',
    image_url:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop',
    display_date: '15–17 de marzo, 2026',
    start_date: '2026-03-15',
    modality: 'Híbrido',
    location: 'Ciudad de México',
    description:
      'Encuentro académico de referencia en medicina física, rehabilitación y electrodiagnóstico con ponentes nacionales e internacionales.',
    badge: 'Evento destacado',
    featured_level: 1,
    sort_order: 1,
    registration_url: ANCHORS.contacto,
    detail_url: ANCHORS.eventos,
  },
  {
    id: 'evt-diplomado-neuro',
    title: 'Diplomado en Rehabilitación Neurológica',
    slug: 'diplomado-rehabilitacion-neurologica',
    image_url:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=500&fit=crop',
    display_date: 'Inicio: abril 2026',
    start_date: '2026-04-01',
    modality: 'En línea',
    location: 'Plataforma COMEFYR',
    description:
      'Programa académico estructurado para especialistas que buscan actualización en neurorehabilitación basada en evidencia.',
    badge: 'Próximamente',
    featured_level: 2,
    sort_order: 2,
    registration_url: ANCHORS.contacto,
    detail_url: ANCHORS.eventos,
  },
  {
    id: 'evt-webinar-emg',
    title: 'Webinar: Electrodiagnóstico avanzado',
    slug: 'webinar-electrodiagnostico-avanzado',
    image_url:
      'https://images.unsplash.com/photo-1581595220892-b0739db3a8f2?w=500&h=350&fit=crop',
    display_date: '28 de febrero, 2026',
    start_date: '2026-02-28',
    modality: 'Virtual',
    location: 'Zoom',
    description: 'Sesión en vivo sobre técnicas actualizadas de EMG y conducción nerviosa.',
    badge: 'Próximamente',
    featured_level: 3,
    sort_order: 3,
    registration_url: ANCHORS.contacto,
    detail_url: ANCHORS.eventos,
  },
  {
    id: 'evt-taller-pediatrico',
    title: 'Taller de Rehabilitación Pediátrica',
    slug: 'taller-rehabilitacion-pediatrica',
    image_url:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=350&fit=crop',
    display_date: '10 de abril, 2026',
    start_date: '2026-04-10',
    modality: 'Presencial',
    location: 'Guadalajara, Jal.',
    description: 'Taller práctico con casos clínicos en población pediátrica.',
    badge: 'Próximamente',
    featured_level: 3,
    sort_order: 4,
    registration_url: ANCHORS.contacto,
    detail_url: ANCHORS.eventos,
  },
  {
    id: 'evt-jornada-investigacion',
    title: 'Jornada de Investigación COMEFYR',
    slug: 'jornada-investigacion-comefyr',
    image_url:
      'https://images.unsplash.com/photo-1505373877841-8d25f39d466f?w=500&h=350&fit=crop',
    display_date: '5 de mayo, 2026',
    start_date: '2026-05-05',
    modality: 'Híbrido',
    location: 'Monterrey, N.L.',
    description: 'Presentación de proyectos de investigación en rehabilitación.',
    badge: 'Próximamente',
    featured_level: 3,
    sort_order: 5,
    registration_url: ANCHORS.contacto,
    detail_url: ANCHORS.eventos,
  },
]

// Vista agrupada para la UI actual — derivada de featured_level
export const events = groupEventsByLevel(eventsList)
