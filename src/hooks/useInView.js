import { useEffect, useRef, useState } from 'react'

// Detecta cuando un elemento entra al viewport — para fade-in sobrio por sección
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -32px 0px',
        ...options,
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}
