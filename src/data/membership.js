// Membresía — futura fuente: Supabase (tabla membership_plans, payment_info)
export const membershipSection = {
  title: 'Membresía COMEFYR 2026',
  subtitle:
    'Forma parte de nuestra comunidad médica profesional y accede a beneficios académicos, eventos, diplomados y actividades exclusivas para asociados.',
}

export const membershipPlans = [
  {
    id: 'plan-specialist',
    name: 'Médico especialista en rehabilitación',
    price: '$1,500 MXN',
    period: 'anual',
    profile: 'Médico especialista en rehabilitación',
  },
  {
    id: 'plan-resident',
    name: 'Residente',
    price: '$900 MXN',
    period: 'anual',
    profile: 'Residente',
  },
]

export const membershipRequirements = [
  'Nombre completo',
  'Correo electrónico',
  'Teléfono',
  'Institución de procedencia',
  'Perfil: Médico especialista en rehabilitación o Residente',
  'Ciudad de procedencia',
]

export const membershipSteps = [
  { step: 1, title: 'Regístrate como socio', description: 'Completa el formulario con tus datos profesionales.' },
  { step: 2, title: 'Realiza tu pago de membresía', description: 'Transfiere el monto correspondiente a tu perfil.' },
  { step: 3, title: 'Envía tu comprobante', description: 'Comparte tu comprobante de pago para validación.' },
  { step: 4, title: 'Espera validación de tu estatus', description: 'Recibirás confirmación de tu membresía activa.' },
]

export const profileOptions = [
  'Médico especialista en rehabilitación',
  'Residente',
]

export const paymentFeatures = [
  { id: 'pay-1', title: 'Comprobante sencillo', description: 'Envía tu comprobante de transferencia por correo o WhatsApp.' },
  { id: 'pay-2', title: 'Facturación', description: 'Solicita factura con tus datos fiscales al correo institucional.' },
]

export const bankInfo = {
  bank: 'BBVA México',
  clabe: '012180001234567890',
  account: '0123456789',
  businessName: 'Colegio Mexicano de Medicina Electrodiagnóstico, Medicina Física y Rehabilitación A.C.',
  billing: 'Facturación disponible — solicitar datos fiscales al correo institucional.',
}
