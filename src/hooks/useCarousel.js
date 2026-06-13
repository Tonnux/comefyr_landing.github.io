import { useCallback, useEffect, useState } from 'react'

// Hook reutilizable para carruseles con autoplay y breakpoint desktop
export function useCarousel({
  total,
  autoplayMs = 6000,
  desktopBreakpoint = 1024,
  mobileSlideOffset = '88vw + 1rem',
  desktopSlideOffset = '48% + 1.25rem',
}) {
  const [current, setCurrent] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${desktopBreakpoint}px)`)
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [desktopBreakpoint])

  const goTo = useCallback(
    (index) => setCurrent((index + total) % total),
    [total],
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (!autoplayMs || total <= 1) return undefined
    const timer = setInterval(next, autoplayMs)
    return () => clearInterval(timer)
  }, [next, autoplayMs, total])

  const slideOffset = isDesktop ? desktopSlideOffset : mobileSlideOffset
  const trackTransform = `translateX(calc(-${current} * (${slideOffset})))`

  return { current, isDesktop, goTo, next, prev, trackTransform }
}
