// Campo de formulario reutilizable con label accesible
export default function Input({
  label,
  id,
  type = 'text',
  required = false,
  className = '',
  as = 'input',
  options = [],
  ...props
}) {
  const fieldId = id || label?.toLowerCase().replace(/\s+/g, '-')

  const baseClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-comefyr-text placeholder:text-comefyr-muted/60 transition-colors focus:border-comefyr-blue focus:outline-none focus:ring-2 focus:ring-comefyr-blue/20'

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={fieldId} className="block text-sm font-medium text-comefyr-text">
          {label}
          {required && <span className="text-comefyr-olive"> *</span>}
        </label>
      )}

      {as === 'select' ? (
        <select id={fieldId} required={required} className={baseClass} {...props}>
          <option value="">Selecciona una opción</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : as === 'textarea' ? (
        <textarea
          id={fieldId}
          required={required}
          rows={4}
          className={`${baseClass} resize-y`}
          {...props}
        />
      ) : (
        <input id={fieldId} type={type} required={required} className={baseClass} {...props} />
      )}
    </div>
  )
}
