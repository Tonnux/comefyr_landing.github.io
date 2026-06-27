import { useState } from 'react'
import { X } from 'lucide-react'
import { activeAlert } from '../../data/alerts'
import Button from '../ui/Button'

// Franja delgada de alerta para eventos activos
export default function AlertBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="border-b border-comefyr-blue/10 bg-comefyr-ice">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <p className="min-w-0 flex-1 truncate text-xs font-medium text-comefyr-blue sm:text-sm">
          {activeAlert.message}
        </p>

        <div className="flex shrink-0 items-center gap-1.5">
          <Button href={activeAlert.ctaHref} size="xs">
            {activeAlert.ctaLabel}
          </Button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-md p-1 text-comefyr-blue/70 transition-colors hover:bg-comefyr-blue/10 hover:text-comefyr-blue"
            aria-label="Cerrar alerta"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
