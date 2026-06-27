import { ANCHORS } from '../utils/links'

// Temáticas académicas — futura fuente: Supabase (tabla topics)
const topicsData = [
  {
    id: 'topic-neuro',
    title: 'Rehabilitación Neurológica',
    slug: 'rehabilitacion-neurologica',
    icon: 'brain',
    countLabel: 'cursos disponibles',
    description:
      'Formación especializada en el abordaje integral del paciente con lesión neurológica.',
    courses: [
      {
        id: 'course-neuro-1',
        title: 'Neurorehabilitación Basada en Evidencia',
        slug: 'neurorehabilitacion-basada-evidencia',
        description:
          'Actualización en principios y técnicas de neurorehabilitación con enfoque clínico.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-neuro-2',
        title: 'Rehabilitación del Paciente con ACV',
        slug: 'rehabilitacion-paciente-acv',
        description:
          'Estrategias de evaluación y tratamiento en accidente cerebrovascular.',
        modality: 'Presencial',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-neuro-3',
        title: 'Trastornos del Movimiento en Rehabilitación',
        slug: 'trastornos-movimiento-rehabilitacion',
        description:
          'Manejo rehabilitador de pacientes con parkinsonismo y otras condiciones.',
        modality: 'En línea',
        detail_url: ANCHORS.cursos,
      },
    ],
  },
  {
    id: 'topic-electro',
    title: 'Electrodiagnóstico',
    slug: 'electrodiagnostico',
    icon: 'activity',
    countLabel: 'cursos disponibles',
    description:
      'Capacitación en técnicas electrofisiológicas para el diagnóstico de patología neuromuscular.',
    courses: [
      {
        id: 'course-electro-1',
        title: 'Fundamentos de Electrodiagnóstico',
        slug: 'fundamentos-electrodiagnostico',
        description:
          'Introducción a la electromiografía y conducción nerviosa en la práctica clínica.',
        modality: 'En línea',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-electro-2',
        title: 'EMG Clínico: Interpretación Práctica',
        slug: 'emg-clinico-interpretacion',
        description:
          'Interpretación de hallazgos electromiográficos en escenarios clínicos frecuentes.',
        modality: 'En línea',
        detail_url: ANCHORS.contacto,
      },
    ],
  },
  {
    id: 'topic-fisica',
    title: 'Medicina Física',
    slug: 'medicina-fisica',
    icon: 'heart-pulse',
    countLabel: 'cursos disponibles',
    description:
      'Actualización en medicina física y rehabilitación para la atención del paciente adulto.',
    courses: [
      {
        id: 'course-fisica-1',
        title: 'Valoración Funcional Integral',
        slug: 'valoracion-funcional-integral',
        description:
          'Herramientas de evaluación funcional aplicadas a la medicina de rehabilitación.',
        modality: 'Híbrido',
        detail_url: ANCHORS.cursos,
      },
      {
        id: 'course-fisica-2',
        title: 'Prescripción de Ejercicio Terapéutico',
        slug: 'prescripcion-ejercicio-terapeutico',
        description:
          'Principios de prescripción de ejercicio en pacientes con discapacidad física.',
        modality: 'En línea',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-fisica-3',
        title: 'Rehabilitación del Adulto Mayor',
        slug: 'rehabilitacion-adulto-mayor',
        description:
          'Enfoque geriátrico en medicina física y prevención de la dependencia funcional.',
        modality: 'Presencial',
        detail_url: ANCHORS.contacto,
      },
    ],
  },
  {
    id: 'topic-pediatric',
    title: 'Rehabilitación Pediátrica',
    slug: 'rehabilitacion-pediatrica',
    icon: 'baby',
    countLabel: 'cursos disponibles',
    description:
      'Formación en rehabilitación de la población infantil con enfoque interdisciplinario.',
    courses: [
      {
        id: 'course-pediatric-1',
        title: 'Rehabilitación Pediátrica Integral',
        slug: 'rehabilitacion-pediatrica-integral',
        description:
          'Abordaje multidisciplinario del niño con discapacidad motora o del neurodesarrollo.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-pediatric-2',
        title: 'Parálisis Cerebral: Enfoque Actual',
        slug: 'paralisis-cerebral-enfoque-actual',
        description:
          'Estrategias de tratamiento y seguimiento en parálisis cerebral infantil.',
        modality: 'En línea',
        detail_url: ANCHORS.cursos,
      },
    ],
  },
  {
    id: 'topic-ortopedica',
    title: 'Rehabilitación Ortopédica',
    slug: 'rehabilitacion-ortopedica',
    icon: 'bone',
    countLabel: 'cursos disponibles',
    description:
      'Capacitación en rehabilitación musculoesquelética y recuperación postquirúrgica.',
    courses: [
      {
        id: 'course-orto-1',
        title: 'Rehabilitación Postoperatoria de Rodilla',
        slug: 'rehabilitacion-postoperatoria-rodilla',
        description:
          'Protocolos de recuperación funcional tras cirugía de ligamentos y menisco.',
        modality: 'Presencial',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-orto-2',
        title: 'Lesiones Deportivas: Manejo Inicial',
        slug: 'lesiones-deportivas-manejo-inicial',
        description:
          'Evaluación y tratamiento rehabilitador de lesiones musculoesqueléticas agudas.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-orto-3',
        title: 'Columna Vertebral en Rehabilitación',
        slug: 'columna-vertebral-rehabilitacion',
        description:
          'Abordaje conservador de lumbalgia y cervicalgia en medicina de rehabilitación.',
        modality: 'En línea',
        detail_url: ANCHORS.cursos,
      },
    ],
  },
  {
    id: 'topic-dolor',
    title: 'Dolor y Rehabilitación',
    slug: 'dolor-rehabilitacion',
    icon: 'zap',
    countLabel: 'cursos disponibles',
    description:
      'Programas formativos en evaluación y manejo interdisciplinario del dolor crónico.',
    courses: [
      {
        id: 'course-dolor-1',
        title: 'Dolor Crónico: Abordaje Multimodal',
        slug: 'dolor-cronico-abordaje-multimodal',
        description:
          'Estrategias farmacológicas y no farmacológicas en el paciente con dolor persistente.',
        modality: 'En línea',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-dolor-2',
        title: 'Neuromodulación en Dolor',
        slug: 'neuromodulacion-dolor',
        description:
          'Introducción a técnicas de neuromodulación aplicadas al manejo del dolor.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
    ],
  },
  {
    id: 'topic-ultrasonido',
    title: 'Ultrasonido Músculo Esquelético',
    slug: 'ultrasonido-musculo-esqueletico',
    icon: 'scan',
    countLabel: 'cursos disponibles',
    description:
      'Entrenamiento en ecografía musculoesquelética para diagnóstico y guía de procedimientos.',
    courses: [
      {
        id: 'course-us-1',
        title: 'Ecografía MSK: Fundamentos',
        slug: 'ecografia-msk-fundamentos',
        description:
          'Principios básicos de ultrasonido musculoesquelético y anatomía ecográfica.',
        modality: 'Presencial',
        detail_url: ANCHORS.cursos,
      },
      {
        id: 'course-us-2',
        title: 'Ecografía de Hombro y Rodilla',
        slug: 'ecografia-hombro-rodilla',
        description:
          'Técnicas de exploración ecográfica de las articulaciones más frecuentes.',
        modality: 'Presencial',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-us-3',
        title: 'Inyecciones Guiadas por US',
        slug: 'inyecciones-guiadas-ultrasonido',
        description:
          'Procedimientos intervencionistas guiados por ultrasonido en práctica clínica.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
    ],
  },
  {
    id: 'topic-cardio',
    title: 'Rehabilitación Cardiopulmonar',
    slug: 'rehabilitacion-cardiopulmonar',
    icon: 'wind',
    countLabel: 'cursos disponibles',
    description:
      'Formación en rehabilitación cardiovascular y pulmonar basada en evidencia.',
    courses: [
      {
        id: 'course-cardio-1',
        title: 'Rehabilitación Cardíaca Fase II',
        slug: 'rehabilitacion-cardiaca-fase-ii',
        description:
          'Programas estructurados de rehabilitación postinfarto y postcirugía cardíaca.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-cardio-2',
        title: 'Rehabilitación Pulmonar',
        slug: 'rehabilitacion-pulmonar',
        description:
          'Manejo rehabilitador del paciente con EPOC y otras enfermedades respiratorias crónicas.',
        modality: 'En línea',
        detail_url: ANCHORS.cursos,
      },
    ],
  },
  {
    id: 'topic-neurofisio',
    title: 'Neurofisiología Clínica',
    slug: 'neurofisiologia-clinica',
    icon: 'microscope',
    countLabel: 'cursos disponibles',
    description:
      'Actualización en estudios neurofisiológicos y su correlación con el cuadro clínico.',
    courses: [
      {
        id: 'course-neurofisio-1',
        title: 'Potenciales Evocados en la Práctica',
        slug: 'potenciales-evocados-practica',
        description:
          'Indicaciones e interpretación de potenciales evocados somatosensitivos y visuales.',
        modality: 'En línea',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-neurofisio-2',
        title: 'Monitoreo Intraoperatorio',
        slug: 'monitoreo-intraoperatorio',
        description:
          'Fundamentos del monitoreo neurofisiológico durante procedimientos quirúrgicos.',
        modality: 'Presencial',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-neurofisio-3',
        title: 'Estudios de Sueño y Neurofisiología',
        slug: 'estudios-sueno-neurofisiologia',
        description:
          'Introducción a la polisomnografía y trastornos del sueño desde la neurofisiología.',
        modality: 'Híbrido',
        detail_url: ANCHORS.cursos,
      },
    ],
  },
  {
    id: 'topic-diplomados',
    title: 'Diplomados',
    slug: 'diplomados',
    icon: 'graduation-cap',
    countLabel: 'programas disponibles',
    description:
      'Programas de diplomado con enfoque académico y aval institucional COMEFYR.',
    courses: [
      {
        id: 'course-diplo-1',
        title: 'Diplomado en Electrodiagnóstico Clínico',
        slug: 'diplomado-electrodiagnostico-clinico',
        description:
          'Programa integral de formación en electromiografía y conducción nerviosa.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-diplo-2',
        title: 'Diplomado en Rehabilitación Neurológica',
        slug: 'diplomado-rehabilitacion-neurologica',
        description:
          'Formación avanzada en neurorehabilitación para médicos especialistas.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
    ],
  },
  {
    id: 'topic-eventos',
    title: 'Congresos y eventos',
    slug: 'congresos-eventos',
    icon: 'calendar-days',
    countLabel: 'eventos disponibles',
    description:
      'Congresos, simposios y jornadas académicas organizadas por COMEFYR.',
    courses: [
      {
        id: 'course-evento-1',
        title: 'Congreso Anual COMEFYR 2026',
        slug: 'congreso-anual-comefyr-2026',
        description:
          'Encuentro nacional de medicina física y rehabilitación con ponencias internacionales.',
        modality: 'Presencial',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-evento-2',
        title: 'Simposio de Neurorehabilitación',
        slug: 'simposio-neurorehabilitacion',
        description:
          'Jornada intensiva sobre avances en rehabilitación neurológica y neuroplasticidad.',
        modality: 'Híbrido',
        detail_url: ANCHORS.contacto,
      },
      {
        id: 'course-evento-3',
        title: 'Webinar: Actualización en EMG',
        slug: 'webinar-actualizacion-emg',
        description:
          'Sesión en línea con casos clínicos y revisión de guías en electrodiagnóstico.',
        modality: 'En línea',
        detail_url: ANCHORS.contacto,
      },
    ],
  },
  {
    id: 'topic-actualizacion',
    title: 'Actualización médica continua',
    slug: 'actualizacion-medica-continua',
    icon: 'book-open',
    countLabel: 'cursos disponibles',
    description:
      'Cursos breves y recursos formativos para mantener competencias clínicas actualizadas.',
    courses: [
      {
        id: 'course-amc-1',
        title: 'Microcurso: Consentimiento Informado',
        slug: 'microcurso-consentimiento-informado',
        description:
          'Buenas prácticas en consentimiento informado en procedimientos de rehabilitación.',
        modality: 'En línea',
        detail_url: ANCHORS.cursos,
      },
      {
        id: 'course-amc-2',
        title: 'Actualización en Vías Clínicas',
        slug: 'actualizacion-vias-clinicas',
        description:
          'Revisión de protocolos y vías clínicas en medicina física y rehabilitación.',
        modality: 'En línea',
        detail_url: ANCHORS.cursos,
      },
    ],
  },
]

// courseCount se deriva del número de cursos en cada temática
export const topics = topicsData.map((topic) => ({
  ...topic,
  courseCount: topic.courses.length,
}))
