import { CheckCircle } from 'lucide-react'

// Mensaje de confirmación tras enviar un formulario estático
export default function FormSuccess({ message = 'Gracias, te contactaremos pronto.' }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-comefyr-gold/30 bg-comefyr-soft p-4 text-comefyr-blue">
      <CheckCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}
