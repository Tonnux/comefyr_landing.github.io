import { useState } from 'react'
import { Bot, MessageCircle, X } from 'lucide-react'
import { chatOptions } from '../../data/chatOptions'
import { siteConfig } from '../../data/siteConfig'

// Botones flotantes — Chat IA arriba, WhatsApp abajo
export default function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {chatOpen && (
        <div className="mb-1 w-[calc(100vw-2rem)] max-w-80 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-comefyr-blue px-4 py-3.5 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold">Asistente COMEFYR</span>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              className="rounded-lg p-1.5 hover:bg-white/10"
              aria-label="Cerrar chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">
            <p className="mb-3 text-sm text-comefyr-muted">
              ¿En qué podemos ayudarte?
            </p>
            <ul className="space-y-2">
              {chatOptions.map((option) => (
                <li key={option.id}>
                  <a
                    href={option.href}
                    onClick={() => setChatOpen(false)}
                    className="block rounded-xl border border-gray-100 px-3 py-2.5 text-sm font-medium text-comefyr-blue transition-colors hover:border-comefyr-olive hover:bg-comefyr-ice"
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setChatOpen(!chatOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-comefyr-blue text-white shadow-[0_4px_20px_rgba(3,49,89,0.35)] transition-transform hover:scale-105"
        aria-label="Abrir asistente COMEFYR"
      >
        <Bot className="h-6 w-6" />
      </button>

      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
