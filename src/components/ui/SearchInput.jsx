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
        className={`absolute top-1/2 -translate-y-1/2 text-comefyr-muted transition-colors duration-250 ${iconSizes[size]}`}
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-2xl border border-comefyr-blue/10 ${bgClass} text-comefyr-text shadow-sm placeholder:text-comefyr-muted/60 transition-all duration-250 focus:border-comefyr-olive/50 focus:outline-none focus:ring-2 focus:ring-comefyr-olive/15 ${sizes[size]}`}
        aria-label={ariaLabel}
      />
    </div>
  )
}
