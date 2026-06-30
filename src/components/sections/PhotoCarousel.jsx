import { ChevronLeft, ChevronRight } from 'lucide-react'
import { carouselPhotos, carouselSection } from '../../data/photos'
import { sectionEyebrows } from '../../data/siteContent'
import { useCarousel } from '../../hooks/useCarousel'
import { useInView } from '../../hooks/useInView'
import SectionHeader from '../ui/SectionHeader'

// Carrusel fotográfico — estilo institucional sobrio
export default function PhotoCarousel() {
  const { current, goTo, next, prev, trackTransform } = useCarousel({
    total: carouselPhotos.length,
    autoplayMs: 6000,
  })
  const [ref, isInView] = useInView()

  return (
    <section className="overflow-hidden bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={sectionEyebrows.carousel}
          title={carouselSection.title}
          subtitle={carouselSection.subtitle}
        />

        <div
          ref={ref}
          className={`fade-in-section relative px-8 sm:px-12 ${isInView ? 'is-visible' : ''}`}
        >
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-comefyr-blue/10 bg-white text-comefyr-blue shadow-card transition-all duration-250 hover:border-comefyr-olive/30 hover:shadow-card-hover"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-comefyr-blue/10 bg-white text-comefyr-blue shadow-card transition-all duration-250 hover:border-comefyr-olive/30 hover:shadow-card-hover"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out lg:gap-5"
              style={{ transform: trackTransform }}
            >
              {carouselPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative aspect-[4/3] w-[88vw] shrink-0 overflow-hidden rounded-2xl border border-comefyr-blue/8 shadow-card sm:aspect-[16/10] sm:w-[70vw] lg:w-[calc(48%-0.625rem)]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {photo.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-comefyr-blue/95 via-comefyr-blue/50 to-transparent px-5 py-5">
                      <p className="font-display text-sm font-semibold text-white sm:text-base">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {carouselPhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-250 ${
                index === current
                  ? 'w-8 bg-comefyr-gold'
                  : 'w-1.5 bg-comefyr-blue/20 hover:bg-comefyr-blue/40'
              }`}
              aria-label={`Ir a foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
