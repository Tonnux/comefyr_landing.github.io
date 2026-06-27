// Encabezado consistente para cada sección — eyebrow, Manrope en título y línea dorada
export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  light = false,
  className = '',
  children,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-comefyr-blue'
  const subtitleColor = light ? 'text-white/80' : 'text-comefyr-muted'
  const eyebrowColor = light ? 'text-comefyr-gold' : 'text-comefyr-olive'
  const dividerClass =
    align === 'center' ? 'section-title-divider' : 'section-title-divider section-title-divider-left'

  return (
    <div className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      <div className={align === 'left' ? 'flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between' : ''}>
        <div className={children && align === 'left' ? 'flex-1' : ''}>
          {eyebrow && (
            <p className={`section-eyebrow ${eyebrowColor}`}>{eyebrow}</p>
          )}

          <h2
            className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${titleColor} ${
              eyebrow ? 'mt-3' : ''
            }`}
          >
            {title}
          </h2>

          <div className={dividerClass} aria-hidden="true" />

          {subtitle && (
            <p className={`mt-4 text-base leading-relaxed sm:text-lg ${subtitleColor}`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}
