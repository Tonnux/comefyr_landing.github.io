// Encabezado consistente para cada sección
export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
  children,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-comefyr-blue'
  const subtitleColor = light ? 'text-white/80' : 'text-comefyr-muted'

  return (
    <div className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      <div className={align === 'left' ? 'flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between' : ''}>
        <div className={children && align === 'left' ? 'flex-1' : ''}>
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-lg leading-relaxed ${subtitleColor}`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}
