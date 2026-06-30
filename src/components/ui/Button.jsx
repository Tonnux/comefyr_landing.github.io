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

    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDC765]/50 focus-visible:ring-offset-2'



  // CTA principal — hex explícitos para garantizar #EDC765 en navegador

  const primaryButton =

    'border-2 border-[#DDB04E] bg-[#EDC765] text-[#033159] shadow-sm hover:border-[#033159]/25 hover:bg-[#E5BC58] active:border-[#033159]/30 active:bg-[#DDB04E]'



  const variants = {

    primary: primaryButton,

    secondary: 'border-2 border-comefyr-blue text-comefyr-blue bg-transparent hover:bg-comefyr-soft',

    ghost: 'text-comefyr-blue hover:bg-comefyr-soft',

    gold: primaryButton,

    outlineWhite: 'border-2 border-white text-white hover:bg-white/10',

    white: 'bg-white text-comefyr-blue hover:bg-comefyr-soft shadow-sm',

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


