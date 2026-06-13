import { Search } from 'lucide-react'

// Campo de búsqueda reutilizable para catálogos de cursos
export default function SearchInput({
  value,
  onChange,
  placeholder = 'Buscar...',
  ariaLabel = 'Buscar',
  className = '',
  size = 'md',
  variant = 'white',
}) {
  const sizes = {
    sm: 'py-2.5 pl-10 pr-4 text-sm',
    md: 'py-3.5 pl-12 pr-4',
  }

  const iconSizes = {
    sm: 'left-3 h-4 w-4',
    md: 'left-4 h-5 w-5',
  }

  const bgClass = variant === 'soft' ? 'bg-comefyr-soft' : 'bg-white'

  return (
    <div className={`relative ${className}`}>
      <Search
        className={`absolute top-1/2 -translate-y-1/2 text-comefyr-muted ${iconSizes[size]}`}
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border border-gray-200 ${bgClass} text-comefyr-text placeholder:text-comefyr-muted/60 focus:border-comefyr-blue focus:outline-none focus:ring-2 focus:ring-comefyr-blue/20 ${sizes[size]}`}
        aria-label={ariaLabel}
      />
    </div>
  )
}
