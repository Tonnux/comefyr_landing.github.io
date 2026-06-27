// Botón reutilizable con variantes primaria y secundaria
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  type = 'button',
  onClick,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-comefyr-olive focus-visible:ring-offset-2'

  const variants = {
    primary: 'bg-comefyr-olive text-white hover:bg-comefyr-olive-dark shadow-sm',
    secondary: 'border-2 border-comefyr-blue text-comefyr-blue bg-transparent hover:bg-comefyr-ice',
    ghost: 'text-comefyr-blue hover:bg-comefyr-ice',
    gold: 'bg-comefyr-gold text-white hover:opacity-90 shadow-sm',
    outlineWhite: 'border-2 border-white text-white hover:bg-white/10',
    white: 'bg-white text-comefyr-blue hover:bg-comefyr-ice shadow-sm',
  }

  const sizes = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
